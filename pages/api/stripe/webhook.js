import connectMongo from '@/database/conn';
import Instance from '@/models/Instances';
import User from '@/models/User';
import Subscriptions from '@/pages/subscriptions';
import { buffer } from 'micro';

const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SCERET_KEY);

export const config = {
    api: {
        bodyParser: false,
    },
};

const webhookHandler = async (req, res) => {

    if (req.method === 'POST') {
        const buf = await buffer(req);
        const sig = req.headers['stripe-signature'];
        let event;
        try {
            event = stripe.webhooks.constructEvent(buf.toString(), sig, process.env.STRIPE_WEBHOOK_SECRET);
        } catch (err) {
            return res.status(400).send('Webhook Error: Invalid signature');
        }

        connectMongo();
        console.log(event.type);
        switch (event.type) {
        case 'customer.created':
            await addCustomerStripeIdToDb(event.data.object);
            break;
        case 'checkout.session.completed':
            await addSubscriptionsInDd(event.data.object);
            break;
        case 'customer.deleted':
            console.log(event.data.object)
            break;
        case 'customer.subscription.updated':
            await updateSubscription(event.data.object);
            break;

        default:
            console.log(`Unhandled event type ${event.type}`);
        }
        res.status(200);

    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed')

    }
}
export default webhookHandler;



async function addCustomerStripeIdToDb(customer) {
    const user = await User.findOne({ email: customer.email });
    user.stripe_customer_id = customer.id;
    await user.save();
}

async function addSubscriptionsInDd(subscription) {
    if (subscription.payment_status == 'paid') {
        const user = await User.findOne({ email: subscription.customer_details.email });
        await Instance.create({
            user_id:user.id,
            stripe_subscription_id:subscription.subscription,
        })
    }
}

async function updateSubscription(subscription){
    const dBsubscription = await Subscriptions.findOne({stripe_subscription_id:subscription.id});
    dBsubscription.status = subscription.status;
    await dBsubscription.save();
    //send the webhook event 
}
