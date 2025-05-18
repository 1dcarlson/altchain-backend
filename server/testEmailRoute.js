const express = require('express');
const router = express.Router();

router.get('/test-email', (req, res) => {
  const key = process.env.SENDGRID_API_KEY;
  const isValid = key && key.startsWith('SG.');
  res.json({
    status: isValid ? 'ok' : 'invalid',
    startsWith: key ? key.substring(0, 4) : null,
    length: key ? key.length : 0,
  });
});

module.exports = router;
