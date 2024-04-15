import connectMongo from "@/database/conn";
import Cryption from "@/lib/encryption";
import { sendEmail } from "@/lib/mailer";
import { addEmailToQueue } from "@/lib/queue";
import User from "@/models/User";
import { ErrorCodes } from "@/utils/Errors";
import { confirmationEmailTemplate } from "@/utils/emailTemplates/VerifyEmail";


export default async function handler(req, res) {

    if (req.method!='POST'){
        res.status(405)
    }


    await connectMongo();

    const { username, email, password, password_confirmation } = req.body;

    const user = await User.findOne({ email: email });

    console.log()

    if (user && user.provider == 'google') {

        res.status(400).json(ErrorCodes.EMAIL_ALREADY_REGISTERED_WITH_GOOGLE)
    }
    if (user) {
        res.status(400).json(ErrorCodes.EMAIL_ALREADY_EXISTS)
    }

    if (password != password_confirmation) {

        res.status(400).json(ErrorCodes.PASSWORDS_DONT_MATCH)
    }

    try {
        await User.create({
            name: username,
            email: email,
            image: '/assets/profile.png',
            provider: 'credentials',
            password: password
        })

        var credentials = {
            email: email,
            timestamp: Date.now()
        };

        const cryption = new Cryption(process.env.APP_KEY)
        let encryptedToken = cryption.encrypt(JSON.stringify(credentials));
        const verificationLink = `https://pocketcfos.com/auth/redirect?token=${encryptedToken}`
        const emailTemplate = confirmationEmailTemplate(verificationLink, username)
        const data = {
            to:email,
            from:'"PocketCfos" <verify@pocketcfos.com>',
            subject:'Email Verification',
            html:emailTemplate
        }
        const q = await addEmailToQueue(data)
        // await sendEmail(email,'"PocketCfos" <verify@pocketcfos.com>','Email Verification', emailTemplate);
        res.status(201).json({ message: 'Created Successfully' });
    } catch (error) {
        res.status(400).json(ErrorCodes.GENERAL_SERVER_ERROR);
        console.log(error)
    }

}