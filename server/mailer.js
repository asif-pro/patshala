// import nodemailer from "nodemailer";
const nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  service: "outlook",
  host: "outlook.com",
  port: 587,
  secure: false,
  auth: {
    user: "patshalapro@outlook.com",
    pass: "iamPatshala7",
  },
});


/** create reusable sendmail function 
@params {object} options - mail options (to, subject, text, html)
@params {function} callback - callback function to handle response
*/
const SENDMAIL = async (mailDetails, callback) => {
    try {
      const info = await transporter.sendMail(mailDetails)
      callback(info);
    } catch (error) {
      console.log(error);
    } 
  };

//   export default SENDMAIL;
module.exports = SENDMAIL;