import connectMongo from "@/database/conn";
import Cryption from "@/lib/encryption";
import User from "@/models/User";
import { ErrorCodes } from "@/utils/Errors";
import { getServerAuthSession } from "./[...nextauth]";
import { confirmationEmailTemplate } from "@/utils/emailTemplates/VerifyEmail";
import { sendEmail } from "@/lib/mailer";
import { addEmailToQueue } from "@/lib/queue";

export default async function handler(req, res) {
    if (req.method != 'POST') {
        res.status(405)
    }

    switch (req.method) {
    case 'POST':
        const { token } = req.body

        try {

            const dToken = new Cryption(process.env.APP_KEY).decrypt(token)

            const decryptedToken = JSON.parse(dToken);

            const now = new Date();
            const tokenTime = new Date(decryptedToken.timestamp);

            if ((now - tokenTime) / 1000 > 3600) {

                res.status(400).json(ErrorCodes.TOKEN_EXPIRED)
            }

            await connectMongo();

            const user = await User.findOne({ email: decryptedToken.email });

            if (user.verified == true) {
                res.status(400).json(ErrorCodes.USER_ALREADY_VERIFIED)
                return
            }
            user.verified = true;
            await user.save();
            res.status(200).json({ message: 'Email address verified successfully' })

        } catch (error) {

            res.status(500).json(ErrorCodes.GENERAL_SERVER_ERROR)

            console.log(error)

        }
        break;
    case 'GET' :
        const session = await getServerAuthSession(req, res)
        if (!session) {
            res.status(401).json({ message: 'Unauthorized' });
        }
        
        try {
            var credentials = {
                email: session.user.email,
                timestamp: Date.now()
            };
    
            const cryption = new Cryption(process.env.APP_KEY)
            let encryptedToken = cryption.encrypt(JSON.stringify(credentials));
            const verificationLink = `${process.env.NEXTAUTH_URL}/auth/verify-email?token=${encryptedToken}`
            const emailTemplate = confirmationEmailTemplate(verificationLink, session.user.name)
            const data = {
                to:session.user.email,
                from:'"PocketCfos" <verify@pocketcfos.com>',
                subject:'Email Verification',
                html:emailTemplate
            }
            const q = addEmailToQueue(data)
            // const emailSent = await sendEmail(session.user.email,'"PocketCfos" <verify@pocketcfos.com>','Email Verification', emailTemplate);
            if (q){
                res.status(200).json({ message: 'Verification email sent successfully' });
            }else{
                res.status(500).json(ErrorCodes.ERROR_WHILE_SENDING_VERIFICATION_EMAIL)
            }
            
        } catch (error) {

            res.status(500).json(ErrorCodes.GENERAL_SERVER_ERROR)

            console.log(error)
            
        }


        break;

    default:
        res.status(405)

    }
}
