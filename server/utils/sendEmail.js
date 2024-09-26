var nodemailer = require("nodemailer");

const sendEmail = (mailTo, mailSubject, message) => {

  var transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD
    }
  });
  
  var mailOptions = {
    from: process.env.EMAIL_FROM,
    to: mailTo,
    subject: mailSubject,
    text: message
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};

module.exports = sendEmail;
