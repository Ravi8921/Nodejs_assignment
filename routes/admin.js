
const express = require("express");
const router = express.Router();
const path =require ('path');
// Middleware to parse incoming request bodies
router.use(express.urlencoded({ extended: true }));

// Route for displaying the form

router.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
  // Here, '..' moves up one level to access the 'views' directory
});


router.get('/contact', (req, res, next) => {
  res.sendFile(path.join(__dirname,'../', 'views', 'contact.html'));
});

router.post('/contactus', (req, res) => {
  const { name, email } = req.body; // Assuming form sends 'name' and 'email' fields
  
  // Process the form data (you can add validation, saving to a database, etc.)
  
  // Redirect to success page after form submission
  res.redirect('/success');
});

// Route for showing success message
router.get('/success', (req, res) => {
  res.send('Form successfully filled!');
});



// Route to handle form submission
router.post("/add-product", (req, res, next) => {
  console.log(req.body); // Access form data here
  // Process the form data, perform necessary actions

  res.redirect("/");
});








module.exports = router;
