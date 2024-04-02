import User from '@/models/User';
import { getServerAuthSession } from '../auth/[...nextauth]';
import { ErrorCodes } from '@/utils/Errors';

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);


export default async function handler(req, res) {


    const session = await getServerAuthSession(req, res)
    if (!session) {
        res.status(401).json({ message: 'Unauthorized' });
    }

    let  user  = await User.findOne({_id:session.user.id});

    if (!user.stripe_customer_id){


        res.status(400).json(ErrorCodes.NO_ACTIVE_SUBSCRIPTIONS);

        return;


    }

    try {

        const session = await stripe.billingPortal.sessions.create({
            customer: user.stripe_customer_id,
            return_url: 'https://www.pocketcfos.com/dashboard',
        });

        res.status(200).json({ session })

    } catch (error) {

        console.log(error)

        res.status(400).json({error:'Unexpected error Occured'})

    }

}