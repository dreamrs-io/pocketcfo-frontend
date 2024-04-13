import connectMongo from "@/database/conn";
import Cryption from "@/lib/encryption";
import { sendEmail } from "@/lib/mailer";
import User from "@/models/User";
import { ErrorCodes } from "@/utils/Errors";
import { confirmationEmailTemplate } from "@/utils/emailTemplates/VerifyEmail";
const imageUrl = '/assets';



export default async function handler(req, res) {


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
        let user = await User.create({
            name: username,
            email: email,
            image: '/assets/profile.png',
            provider: 'credentials',
            password: password
        })
        // var credentials = {
        //     email: email,
        //     timestamp: Date.now()
        // };
        // const cryption = new Cryption(process.env.APP_KEY)
        // let encryptedToken = cryption.encrypt(JSON.stringify(credentials));
        // const verificationLink = `https://pocketcfos.com/auth/redirect?token=${encryptedToken}`
        // const emailTemplate = confirmationEmailTemplate(verificationLink, username)
        // const a = await sendEmail(email, 'Email Verification', emailTemplate)
        // console.log(a);

        res.status(201).json({ message: 'Created Successfully' });

    } catch (error) {

        console.log(error)

        res.status(400).json({ message: 'Error Occured' });

    }

}