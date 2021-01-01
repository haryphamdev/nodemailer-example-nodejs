require('dotenv').config();
import nodemailer  from "nodemailer";

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.MAIL_USERNAME, // generated ethereal user
      pass: process.env.MAIL_PASSWORD, // generated ethereal password
    },
  });


let sendNormalEmail = (toReceiver, toSubject, htmlContent) => {
    // send mail with defined transport object
    return transporter.sendMail({
        from: '"HaryPhamDev 👻"', // sender address
        to: toReceiver, // list of receivers
        subject: toSubject,
        html: htmlContent, // html body
    });

}

module.exports = {
    sendNormalEmail: sendNormalEmail
}
