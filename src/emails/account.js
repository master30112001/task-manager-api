const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail
    .send({
      to: email,
      from: "master30112001@gmail.com",
      subject: "Welcome to the Task App",
      text: `Welcome to the app, ${name}.Let me know how you get along the app.`,
    })
    .then(() => {
      console.log("created");
    })
    .catch((e) => {
      console.log(e.response.body);
    });
};

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "master30112001@gmail.com",
    subject: "Cancelation of your account",
    text: `We are sorry to hear this ${name}. 
We have got to know that you have deleted your account.
Your honest feedback is always appreciated.`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail,
};
