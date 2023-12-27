const express = require('express');
const path = require('path'); // Don't forget to import the path module
const router = express.Router();

router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views' ,'shop.html'));
    // res.send('<h1>hello from express</h1>'); // You can also send a response directly
});

module.exports = router;
