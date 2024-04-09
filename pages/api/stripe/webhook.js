import connectMongo from '@/database/conn';
import Instance from '@/models/Instances';
import User from '@/models/User';
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

        await connectMongo();
        switch (event.type) {
        // case 'customer.created':
        //     await addCustomerStripeIdToDb(event.data.object);
        //     break;
        case 'customer.subscription.created':
            await addSubscriptionsInDd(event.data.object);
            res.status(200);
            break;
        case 'customer.subscription.updated':
            console.log(event.data.object)
            await updateSubscription(event.data.object);
            res.status(200);
            break;
        default:
            console.log(`${event.type}`);
        }
        console.log('Executed')
        res.status(200);
    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed')

    }
}
export default webhookHandler;


async function addSubscriptionsInDd(subscription) {
    console.log(subscription)
    const user = await User.findOne({ stripe_customer_id : subscription.customer });
    console.log(user);
    await Instance.create({
        user_id: user.id,
        stripe_subscription_id: subscription.id,
        subscription_status : subscription.status
    })
}

async function updateSubscription(subscription) {
    const dBsubscription = await Instance.findOne({ stripe_subscription_id: subscription.id });
    dBsubscription.subscription_status = subscription.status;
    if (dBsubscription.status==2 && subscription.status != 'active'){
        dBsubscription.status==3
    }
    await dBsubscription.save();
    //send the webhook event 
}
