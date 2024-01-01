const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'All Products',
      path: '/products'
    });
  });
};


// Assume '/product/:productId' is the route to display a product's details
// exports.getProuctdetail('/product/:productId', (req, res, next) => {
//   const productId = req.params.productId;
//   // Fetch product details by ID from the database or storage
//   Product.findById(productId, (product) => {
//       res.render('product-detail', {
//           product: product,
//           pageTitle: product.title,
//           path: '/products' // Update the path as needed
//       });
//   });
// });

// Assuming this code is in admin.js
exports.getProductDetail = (req, res, next) => {
  const productId = req.params.productId;
  // Fetch product details by ID from the database or storage
  Product.findById(productId, product => {
    console.log(product);

    // Assuming 'products' is an array of products retrieved from somewhere
    // res.render('shop/product-list', { prods: products });

    // Rendering the product details page with the fetched product
    res.render('shop/product-detail', {
      product: product,
      pageTitle: product.title,
      path: '/products' // Update the path as needed
    });
  });
};





exports.getIndex = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/'
    });
  });
};

exports.getCart = (req, res, next) => {
  res.render('shop/cart', {
    path: '/cart',
    pageTitle: 'Your Cart'
  });
};

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};
