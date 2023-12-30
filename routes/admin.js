
// const express = require("express");
// const router = express.Router();
// const path =require ('path');
// // Middleware to parse incoming request bodies
// router.use(express.urlencoded({ extended: true }));

// // Route for displaying the form

// router.get('/add-product', (req, res, next) => {
//   res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
//   // Here, '..' moves up one level to access the 'views' directory
// });


// router.get('/contact', (req, res, next) => {
//   res.sendFile(path.join(__dirname,'../', 'views', 'contact.html'));
// });

// router.post('/contactus', (req, res) => {
//   const { name, email } = req.body; // Assuming form sends 'name' and 'email' fields
  
//   // Process the form data (you can add validation, saving to a database, etc.)
  
//   // Redirect to success page after form submission
//   res.redirect('/success');
// });

// // Route for showing success message
// router.get('/success', (req, res) => {
//   res.send('Form successfully filled!');
// });



// // Route to handle form submission
// router.post("/add-product", (req, res, next) => {
//   console.log(req.body); // Access form data here
//   // Process the form data, perform necessary actions

//   res.redirect("/");
// });








// module.exports = router;



const express = require('express');
const router = express.Router();
const addProductController = require('../Controller/addProductcontroller');
const contactController = require('../Controller/contactController');
const successController= require('../Controller/successController')
const errorController =require ('../Controller/errorController')
// Middleware to parse incoming request bodies
router.use(express.urlencoded({ extended: true }));


// Routes
router.get('/getproduct', addProductController.getAddProducts);
router.get('/add-product', addProductController.postAddProduct);
router.post('/add-product', addProductController.getProducts);

router.get('/contact', contactController.showContactForm);
router.post('/contactus', contactController.processContactForm);

// Route for showing success message
router.get('/success', successController.showSuccessMessage);
router.get('/error',errorController.error404)
module.exports = router;
