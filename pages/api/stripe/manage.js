const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);


export default async function handler(req, res) {

    let customer_id = 'cus_PmR8hrSuTKSFw0'

    try {

        const session = await stripe.billingPortal.sessions.create({
            customer: customer_id,
            return_url: 'https://www.pocketcfos.com/dashboard',
        });

        res.status(200).json({ session })

    } catch (error) {

        console.log(error)

        res.status(400).json({error:'Unexpected error Occured'})

    }

}