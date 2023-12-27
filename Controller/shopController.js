const path = require('path');

exports.showShopPage = (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'shop.html'));
  // res.send('<h1>hello from express</h1>'); // You can also send a response directly
};
