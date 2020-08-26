// https://nodemailer.com/usage/

// https://www.w3schools.com/nodejs/nodejs_email.asp

// npm install nodemailer

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "youremail@gmail.com",
    pass: "yourpassword",
  },
});

const mailOptions = {
  from: "youremail@gmail.com",
  to: "myfriend@yahoo.com",
  subject: "Sending Email using Node.js",
  text: "That was easy!",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});

//   Send email to more than one address:
// to: 'myfriend@yahoo.com, myotherfriend@yahoo.com',

//   Send email containing HTML:
//  html: '<h1>Welcome</h1><p>That was easy!</p>'
