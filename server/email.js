const sgMail = require('@sendgrid/mail');

console.log("SENDGRID_API_KEY from env:", process.env.SENDGRID_API_KEY);

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

module.exports = sgMail;
