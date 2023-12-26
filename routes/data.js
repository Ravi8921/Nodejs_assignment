// routes/messages.js
const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/', (req, res, next) => {
  // Read messages from file
  const messages = fs.readFileSync('messages.txt', 'utf8');

  // Split messages by line and display them
  const messageList = messages.split('\n');
  res.send(`
    <h1>Messages</h1>
    <ul>
      ${messageList.map((message) => `<li>${message}</li>`).join('')}
    </ul>
  `);
});

module.exports = router;
