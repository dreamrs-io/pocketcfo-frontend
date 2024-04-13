import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    // service:'gmail',
    port: 465,
    auth: {
        user: process.env.SMTP_USERNAME,
        pass: process.env.SMTP_PASSWORD,
    },

});


export const sendEmail = async (to, subject, html) => {
    try {
        const t = await transporter.sendMail({
            from: '"PocketCfos" <verify@pocketcfos.com>',
            to: to,
            subject: subject,
            text: html
        })

        return t.messageId;

    } catch (error) {
        console.error('Error sending email: ', error);
        throw new Error('Error sending email');
    }
};