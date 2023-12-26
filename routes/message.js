// routes/message.js
const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/', (req, res, next) => {
  const username = req.cookies.username; // Retrieve username from cookies
  res.send(`
    <h1>Send a Message</h1>
    <form action="/send-message" method="POST">
      <input id="username" type="hidden" name="username" value="${username}">
      <input id="message" type="text" name="message" placeholder="Enter message" required>
      <button type="submit">Send</button>
    </form>
  `);
});


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
  
router.post('/send-message', (req, res, next) => {
  const { username, message } = req.body;

  // Store message in file with username
  fs.appendFileSync('messages.txt', `${username}: ${message}\n`);

  res.redirect('/'); // Redirect to message form after sending message
});

module.exports = router;
