const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");

const handleSendEmail = (options) => {
  const transporter = nodemailer.createTransport(
    smtpTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secureConnection: true,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    })
  );

  const mailOptions = {
    from: `Dietetyk Umami <${process.env.EMAIL_USERNAME}>`,
    to: process.env.EMAIL_USERNAME,
    subject: options.subject,
    html: `Od: ${options.email} <br> Wiadomosc: <br> ${options.message}`,
    replyTo: options.email,
  };

  transporter.sendMail(mailOptions, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });
};

module.exports = handleSendEmail;
