import connectMongo from '@/database/conn';
import Instance from '@/models/Instances';
import User from '@/models/User';
import { buffer } from 'micro';

const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SCERET_KEY);
await connectMongo();

export const config = {
    api: {
        bodyParser: false,
    },
    maxDuration: 5,
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
        await addSubscriptionsInDd(event.data.object);
        res.status(200).send('Webhook Received Successfully');
    }
    if (event.type == 'customer.subscription.updated') {
        await updateSubscription(event.data.object);
        res.status(200).send('Webhook Received Successfully');
    }

}
export default webhookHandler;


async function addSubscriptionsInDd(subscription) {
    try {
        console.log(subscription)
        const user = await User.findOne({ stripe_customer_id: subscription.customer });
        console.log(user);
        await Instance.create({
            user_id: user.id,
            stripe_subscription_id: subscription.id,
            subscription_status: subscription.status
        });
    } catch (error) {

        console.log(error);
        res.status(500).json({ error: 'Internal Server Error', message: err.message })

    }
}

async function updateSubscription(subscription) {

    try {

        console.log(subscription)
        const dBsubscription = await Instance.findOne({ stripe_subscription_id: subscription.id });
        console.log(dBsubscription)
        dBsubscription.subscription_status = subscription.status;
        if (dBsubscription.status == 2 && subscription.status != 'active') {
            dBsubscription.status == 3
        }
        await dBsubscription.save();

    } catch (error) {


        console.log(error);
        res.status(500).json({ error: 'Internal Server Error', message: err.message })


    }

    //send the webhook event 
}
