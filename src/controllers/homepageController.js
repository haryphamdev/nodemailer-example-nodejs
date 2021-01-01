import mailer from "../configs/mailer";

let getHomePage = (req, res) => {
    return  res.render('home.ejs');
}

let handleSendEmail = async(req, res) => {
    await mailer.sendNormalEmail(req.body.email, 'Send a simple email with nodemailer', req.body.content);
    return res.render('success.ejs');
}


module.exports = {
    getHomePage: getHomePage,
    handleSendEmail: handleSendEmail,
}
