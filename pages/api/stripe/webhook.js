import connectMongo from '@/database/conn';
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
    connectMongo();

    console.log(event.type);

    switch(event.type){

      case 'customer.created':
        await addCustomerStripeIdToDb(event.data.object);
        break;

      case 'customer.subscription.created':
        console.log('RECEIVED EVENT FOR SUBSCRIPTION CREATION');
        break;
      
      case 'customer.subscription.updated':
        console.log('RECEIVED EVENT FOR SUBSCRIPTION UPDATION');
        break;
      
      case 'payment_intent.succeeded':
        console.log('RECEIVED EVENT FOR ');
        break;


      default:
        console.log(`Unhandled event type ${event.type}`);


        

    }

    res.status(200);



  } else{
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed')

  }
}
  export default webhookHandler;



async function addCustomerStripeIdToDb(customer){
    const user  = await User.find({email:customer.email});
    user.stripe_customer_id = customer.id;
    await user.save();
}




