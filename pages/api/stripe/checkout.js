const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);


export default async function handler(req, res) {

  let customer;
  let email = 'mohidfauji@gmail.com'
    
    try {
        customer = await stripe.customers.list({ email: email, limit: 1 });
        if (customer.data.length === 0) {
            customer = await stripe.customers.create({
                email: email,
            });
        } else {
            customer = customer.data[0];
        }
    } catch (error) {

      console.log(error)

      res.status(400).json({error:'Error Occured while creating the new customer'})
        
    }

  try {

    const subscription = await stripe.checkout.sessions.create({
      success_url: process.env.NEXTAUTH_URL+'/dashboard',
      line_items: [
        {
          price: 'price_1OwQpjKOMTDoOrE4VmUZuS11',
          quantity:1
        },
      ],
      mode: 'subscription',
      customer:customer.id
    });

    res.status(200).json({ subscription })

  } catch (error) {

    console.log(error)

    res.status(400).json({error:'Unexpected error Occured'})

  }

}