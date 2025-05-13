# AltChain Backend

This is the Express.js backend for AltChain.

### Routes

- `POST /api/waitlist`: Accepts `name` and `email`, sends confirmation email via SendGrid
- `POST /api/contact`: Accepts `name`, `email`, and `message`, sends message to Daniel's inbox

### Environment Variables

- `SENDGRID_API_KEY`
- `SENDER_EMAIL`
- `CONTACT_RECEIVER_EMAIL`
