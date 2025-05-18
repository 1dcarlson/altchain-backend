const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const sgMail = require('@sendgrid/mail');
const testEmailRoute = require('./server/testEmailRoute');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.use(cors());
app.use(express.json());
app.use('api', testEmailRoute);

app.post('/api/waitlist', async (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) return res.status(400).json({ error: 'Missing fields' });

  const msg = {
    to: email,
    from: process.env.SENDER_EMAIL,
    subject: 'Welcome to the AltChain Waitlist!',
    html: `<h1>Welcome, ${name}!</h1><p>You’re now on the AltChain waitlist.</p><p><a href="https://altchain.tech">Visit AltChain</a></p>`,
  };

  try {
    await sgMail.send(msg);
    res.status(200).json({ message: 'Confirmation sent' });
  } catch (err) {
    res.status(500).json({ error: 'Send failed' });
  }
});

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) return res.status(400).json({ error: 'Missing fields' });

  const msg = {
    to: process.env.CONTACT_RECEIVER_EMAIL,
    from: process.env.SENDER_EMAIL,
    subject: 'New Contact Submission',
    html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p>${message}</p>`,
  };

  try {
    await sgMail.send(msg);
    res.status(200).json({ message: 'Contact sent' });
  } catch (err) {
    res.status(500).json({ error: 'Send failed' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
