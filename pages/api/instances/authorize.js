import connectMongo from "@/database/conn";
import Instance from "@/models/Instances";
import { getServerAuthSession } from "../auth/[...nextauth]";
import Cryption from "@/lib/encryption";
export default async function handler(req, res) {
    switch (req.method) {
    case 'GET':
        try {
            var credentials = {
                email: 'admin@mail.com',
                domain:process.env.DEMO_APP_DOMAIN,
                timestamp: Date.now(),
            };
            const cryption  = new Cryption(process.env.APP_KEY)
            let encryptedToken  =  cryption.encrypt(JSON.stringify(credentials));
            const redirectUrl = `${process.env.DEMO_APP_DOMAIN}/auth/redirect?token=${encryptedToken}`
            res.status(200).json({ url : redirectUrl })
            
        } catch (error) {

            console.log(error)

            res.status(500).json({ message: 'Server Error Occured' })
            
        }
        break;

    case 'POST':
        const session = await getServerAuthSession(req, res)
        if (!session) {
            res.status(401).json({ message: 'Unauthorized' });
        }
        connectMongo();
        const { id } = req.body;
        try {
            const instance = await Instance.findOne({ _id: id });
            let credentials = {
                email: session.user.email,
                domain:instance.domain,
                timestamp: Date.now()
            }; 
            if (process.env.APP_ENV === 'local') {
                credentials = {
                    email: 'admin@mail.com',
                    domain:process.env.DEMO_APP_DOMAIN,
                    timestamp: Date.now(),
                };
            }

            const cryption  = new Cryption(process.env.APP_KEY)
            let encryptedToken  =  cryption.encrypt(JSON.stringify(credentials));
            const redirectUrl = `${instance.domain_name}/auth/redirect?token=${encryptedToken}`
            res.status(200).json({ url : redirectUrl })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server Error Occured' })
        }

        break;

    default:
        res.status(405).json({ message: 'Method Not Allowed' })

    }

}



