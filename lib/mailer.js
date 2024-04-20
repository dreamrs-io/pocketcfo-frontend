import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
        user: process.env.SMTP_USERNAME,
        pass: process.env.SMTP_PASSWORD,
    },

});


export const sendEmail = async (to,from, subject, html) => {
    try {
        const t = await transporter.sendMail({
            from: from,
            to: to,
            subject: subject,
            html: html
        })
        console.log(t.messageId)

        if(t.messageId){
            return true;
        } else {
            return false;
        }

    } catch (error) {
        console.error('Error sending email: ', error);
        return false;
    }
};