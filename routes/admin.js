// const express = require('express');
// const router =express .Router();


// // Route for displaying the form
// router.get('/add-product', (req, res) => {
//     res.send(`
//       <form action="/add-product" method="post">
//         <input type="text" name="productName" placeholder="Product Name">
//         <input type="text" name="productSize" placeholder="Product Size"> 
//         <button type="submit">Add Product</button>
//       </form>
//     `);
//   });
  
//   router.post('/product',(req,res,next)=>{

//     console.log(req.body);
//     res.redirect('/');
//   });

//   module.exports =router;


  const express = require('express');
const router = express.Router();

// Middleware to parse incoming request bodies
router.use(express.urlencoded({ extended: true }));

// Route for displaying the form
router.get('/add-product', (req, res) => {
  res.send(`
    <form action="/add-product" method="post">
      <input type="text" name="productName" placeholder="Product Name">
      <input type="text" name="productSize" placeholder="Product Size"> 
      <button type="submit">Add Product</button>
    </form>
  `);
});

// Route to handle form submission
router.post('/add-product', (req, res, next) => {
  console.log(req.body); // Access form data here
  // Process the form data, perform necessary actions
  
  res.redirect('/');
});

module.exports = router;
