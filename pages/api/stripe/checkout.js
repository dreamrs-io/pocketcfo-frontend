import User from '@/models/User';
import { getServerAuthSession } from '../auth/[...nextauth]';
import connectMongo from '@/database/conn';
import { ErrorCodes } from '@/utils/Errors';

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);


export default async function handler(req, res) {
    await connectMongo();

    const session = await getServerAuthSession(req, res)
    if (!session) {
        res.status(401).json({ message: 'Unauthorized' });
    }
    if(!session.user.verified){
        res.status(400).json(ErrorCodes.EMAIL_VERIFICATION_REQUIRED);
    }

    let customer = ''

    
    try {
        customer = await stripe.customers.list({ email: session.user.email, limit: 1 });
        if (customer.data.length === 0) {
            customer = await stripe.customers.create({
                email: session.user.email,
            });
            const user = await User.findOne({_id:session.user.id})
            user.stripe_customer_id= customer.id;
            await user.save();
        } else {
            customer = customer.data[0];
            
        }
    } catch (error) {

        console.log(error);


        res.status(400).json({error:'Error Occured while creating the new customer'})
        
    }

    try {

        const subscription = await stripe.checkout.sessions.create({
            success_url: process.env.NEXTAUTH_URL+'/dashboard',
            line_items: [
                {
                    price: 'price_1P3kf9KOMTDoOrE4BmYyjBn0',
                    quantity:1
                },
            ],
            mode: 'subscription',
            customer:customer.id,
        });

        res.status(200).json({ subscription })

    } catch (error) {

        console.log(error)

        res.status(400).json({error:'Unexpected error Occured'})

    }

}