// routes/login.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send(`
    <form onsubmit="localStorage.setItem('username', document.getElementById('username').value)" action="/login/product" method="POST">
      <input id="username" type="text" name="username" placeholder="Enter username" required>
      <button type="submit">Submit</button>
    </form>
  `);
});

router.post('/product', (req, res, next) => {
  const { username } = req.body;
  // Store username in local storage or cookie
  // For example, using cookies:
  res.cookie('username', username);
  res.redirect('/'); // Redirect to message form or any desired route
});

module.exports = router;
