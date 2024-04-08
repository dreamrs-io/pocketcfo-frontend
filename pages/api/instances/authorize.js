import connectMongo from "@/database/conn";
import Instance from "@/models/Instances";
import { getServerAuthSession } from "../auth/[...nextauth]";
import Cryption from "@/lib/encryption";
export default async function handler(req, res) {

    const session = await getServerAuthSession(req, res)
    if (!session) {
        res.status(401).json({ message: 'Unauthorized' });
    }
    connectMongo();

    switch (req.method) {


    case 'GET':
        try {
            var credentials = {
                email: 'admin@mail.com',
                timestamp: Date.now()
            };
            const cryption  = new Cryption('base64:jPMAS5iDh5vHWceGzWxS16CkiFH8ssZ7OV4S0kOIw+M=')
            let encryptedToken  =  cryption.encrypt(JSON.stringify(credentials));
            const redirectUrl = `http://demo.pocketcfos.com/auth/redirect?token=${encryptedToken}`
            res.status(200).json({ url : redirectUrl })
            
        } catch (error) {

            console.log(error)

            res.status(500).json({ message: 'Server Error Occured' })
            
        }
        break;

    case 'POST':
        const { id } = req.body;
        try {
            const instance = await Instance.findOne({ _id: id });
            var credentials = {
                email: instance.software_credentials.email,
                timestamp: Date.now()
            };

            const cryption  = new Cryption('base64:JGnF8t3fJBGrXfnh18yqGshTBMF68QTCL9uqwko63LM=')
            let encryptedToken  =  cryption.encrypt(JSON.stringify(credentials));
            const redirectUrl = `http://${instance.domain_name}/auth/redirect?token=${encryptedToken}`
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



