import sgMail from '@sendgrid/mail';

console.log("SENDGRID_API_KEY:", process.env.SENDGRID_API_KEY); // <== this line helps debug

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default sgMail;
