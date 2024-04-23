import User from '@/models/User';
import { getServerAuthSession } from '../auth/[...nextauth]';
import connectMongo from '@/database/conn';
import { ErrorCodes } from '@/utils/Errors';
import Instance from '@/models/Instances';

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);


export default async function handler(req, res) {
    await connectMongo();

    const session = await getServerAuthSession(req, res)
    if (!session) {
        res.status(401).json({ message: 'Unauthorized' });
    }
    const user = await User.findOne({_id:session.user.id})
    if(!user.verified){
        res.status(400).json(ErrorCodes.EMAIL_VERIFICATION_REQUIRED);
    }

    const { subscriptionId }  = req.body;

    const previousSubscription = await Instance.findOne({_id:subscriptionId});


    try {

        const subscription = await stripe.checkout.sessions.create({
            success_url: process.env.NEXTAUTH_URL+'/dashboard',
            line_items: [
                {
                    price: previousSubscription.stripe_plan_id,
                    quantity:1
                },
            ],
            mode: 'subscription',
            customer:user.stripe_customer_id,
            subscription_data: {
                metadata:{
                    subscription_id : subscriptionId
                }
            },
            
        });

        res.status(200).json({ subscription })

    } catch (error) {

        console.log(error.raw.message)

        res.status(400).json({error:'Unexpected error Occured'})

    }

}