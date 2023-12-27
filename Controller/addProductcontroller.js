const path = require('path');

exports.showAddProductForm = (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'));
};

exports.processAddProductForm = (req, res) => {
  console.log(req.body); // Access form data here
  // Process the form data, perform necessary actions

  res.redirect('/');
};
