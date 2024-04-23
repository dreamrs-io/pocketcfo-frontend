import connectMongo from '@/database/conn';
import Instance from '@/models/Instances';
import User from '@/models/User';
import { buffer } from 'micro';
import axios from 'axios';

const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SCERET_KEY);
await connectMongo();

export const config = {
    api: {
        bodyParser: false,
    },
    maxDuration: 20,
};

const webhookHandler = async (req, res) => {

    if (req.method !== "POST") {
        return res.status(405).send("Method Not Allowed")
    }

    const buf = await buffer(req);
    const sig = req.headers['stripe-signature'];
    let event;
    try {
        event = stripe.webhooks.constructEvent(buf.toString(), sig, process.env.STRIPE_WEBHOOK_SECRET);
    } catch (err) {
        return res.status(400).send('Webhook Error: Invalid signature');
    }

    if (event.type == 'customer.subscription.created') {
        try {
            await addSubscriptionsInDd(event.data.object);
            return res.status(200).send('Webhook Received Successfully');
        } catch (error) {
            console.log(error.message)
            return res.status(400).send(`Webhook Error: ${error.message}`);
        }
    }
    if (event.type == 'customer.subscription.updated') {

        let retryCount = 0;
        const maxRetries = 3;

        while (retryCount < maxRetries) {
            try {
                await updateSubscription(event.data.object);
                return res.status(200).send('Webhook Received Successfully');
            } catch (error) {
                console.log(`Retry ${retryCount + 1} failed:`, error.message);
                await new Promise(resolve => setTimeout(resolve, 500))
                retryCount++;
            }
        }

    }
    if(event.type =='customer.subscription.deleted'){

        let retryCount = 0;
        const maxRetries = 3;

        while (retryCount < maxRetries) {
            try {
                await updateSubscription(event.data.object);
                return res.status(200).send('Webhook Received Successfully');
            } catch (error) {
                console.log(`Retry ${retryCount + 1} failed:`, error.message);
                await new Promise(resolve => setTimeout(resolve, 500))
                retryCount++;
            }
        }

    }

    return res.status(200).send('Webhook Received Successfully: ' + event.type);

}
export default webhookHandler;


async function addSubscriptionsInDd(subscription) {
    try {
        if (subscription.metadata.subscription_id){
            const instance = await Instance.findOne({_id:subscription.metadata.subscription_id})
            instance.stripe_subscription_id= subscription.id,
            instance.subscription_status= subscription.status,
            instance.stripe_plan_id= subscription.plan.id,
            await instance.save();
            return;
        }
        const user = await User.findOne({ stripe_customer_id: subscription.customer });
        await Instance.create({
            user_id: user.id,
            stripe_subscription_id: subscription.id,
            subscription_status: subscription.status,
            stripe_plan_id: subscription.plan.id,
        });

    } catch (error) {

        throw error;

    }
}

async function updateSubscription(subscription) {

    try {
        const dBsubscription = await Instance.findOne({ stripe_subscription_id: subscription.id });
        dBsubscription.subscription_status = subscription.status;
        await dBsubscription.save();
        if (subscription.status=='past_due'){
            await stripe.subscription.cancel(subscription.id)
        }

        //send the webhook event to laravel instance

    } catch (error) {
        throw error;
    }

}


