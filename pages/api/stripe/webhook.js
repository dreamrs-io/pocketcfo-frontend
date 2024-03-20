import connectMongo from '@/database/conn';
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
      console.error('Webhook signature verification failed.', err);
      return res.status(400).send('Webhook Error: Invalid signature');
    }
    const event_object = event.data.object;
    connectMongo();

    console.log(event_object);

    if (event_object.object == 'checkout.session') {

      if (event_object.status === 'complete' && event_object.payment_status === 'paid') {

        // create the subscriptions in database with subscription id

        // save the invoice with subscriptionId 

        // create the instances in database that will be linked to subscription that we created 




        console.log(event_object)



      }







      res.status(200).send('Webhook Received');
    } else {
      res.setHeader('Allow', 'POST');
      res.status(405).end('Method Not Allowed');
    }
  };

  export default webhookHandler;




