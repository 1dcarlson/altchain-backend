const sgMail = require('@sendgrid/mail');

// Log for debugging — this will show up in Railway Deploy Logs
console.log("SENDGRID_API_KEY from env:", process.env.SENDGRID_API_KEY);

// Load API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

module.exports = sgMail;
