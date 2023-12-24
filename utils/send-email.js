const nodemailer = require("nodemailer");

const sendEmail = async (to, messageContent) => {
  try {
    //create transport
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "vs8934274@gmail.com",
        pass: "qhpp xxov olja echi",
      },
    });
    //message obj
    const message = {
      to,
      Subject: "New Message from NodeMailer APP",
      html: `
      <h3>You have received a new message from nodemailer App</h3>
      <p>${messageContent}</p>
      `,
    };
    //send the email
    const info = await transporter.sendMail(message);
    console.log("Message Sent", info.messageId);
  } catch (error) {
    console.log(error);
    throw new Error("Email could not be sent");
  }
};

module.exports = sendEmail;
