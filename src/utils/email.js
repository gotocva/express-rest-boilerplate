import nodeMailer from 'nodemailer';
import { env } from '../configs/env';

const transporter = nodeMailer.createTransport({
  host: env.SMTP_HOST, // 'smtp.zoho.com',
  secure: true,
  port: env.SMTP_HOST, // 465,
  auth: {
    user: env.SMTP_USERNAME,
    pass: env.SMTP_PASSWORD,
  },
});

/**
 * 
 * @param {*} toEmail 
 * @param {*} subject 
 * @param {*} htmlMessage 
 * @returns 
 */
export const sendEmail = (toEmail, subject, htmlMessage) => {
    const mailOptions = {
        from: env.EMAIL_FROM, // 'siva@sparkouttech.com', // sender address
        to: toEmail, // 'gotocva@gmail.com',
        subject: subject, // 'Some subject', // Subject line
        html: htmlMessage, // '<p>test</p>', // plain text body
    };
    return transporter.sendMail(mailOptions)
}