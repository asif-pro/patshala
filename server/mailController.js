// import HTML_TEMPLATE from "./mail-template.js";
// import SENDMAIL from "./mailer.js"
const HTML_TEMPLATE = require('./mail-template.js');
const SENDMAIL = require('./mailer.js');


// const message = "Hi there, you were emailed me through nodemailer"
// const options = {
//     from: "patshalapro@outlook.com", // sender address
//     to: "www.aba333@ymail.com", // receiver email
//     subject: "Send email in Node.JS with Nodemailer using Gmail account", // Subject line
//     text: message,
//     html: HTML_TEMPLATE(message),
// }

function sendMail ({reciver,subject, text}) {
    const options = {
        from: "patshalapro@outlook.com", // sender address
        to: reciver, // receiver email
        subject, // Subject line
        text,
        // html: HTML_TEMPLATE(message),
    }
    SENDMAIL(options, (info) => {
        console.log("Email sent successfully");
        console.log("MESSAGE ID: ", info.messageId);
    });
}

const mailController = {};

mailController.sendMail = async ( req, res ) => {
    console.log('Hi mail gese');
   
}

module.exports = sendMail;