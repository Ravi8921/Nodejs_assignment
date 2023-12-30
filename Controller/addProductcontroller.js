const Product = require('../Model/product');
const path = require('path');

exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.productName); // Use the correct field name from the form
  product.save();
  res.redirect('/');
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render('shop', {
      prods: products,
      pageTitle: 'Shop',
      path: '/', // Define the path for your shop route
      hasProducts: products.length > 0, // Check the length of the products array
      activeShop: true, // Corrected the variable name to follow camelCase convention
      productCSS: true, // Just assuming this is used for CSS inclusion
    });
  });
};



exports.getAddProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render('add-product', {
      pageTitle: 'Add Product',
      path: '/add-product',
      products: products // Assuming 'products' is the data you want to pass to the view
    });
  });
};
