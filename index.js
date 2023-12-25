const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Route for displaying the form
app.get('/add-product', (req, res) => {
  res.send(`
    <form action="/add-product" method="post">
      <input type="text" name="productName" placeholder="Product Name">
      <input type="text" name="productSize" placeholder="Product Size"> 
      <button type="submit">Add Product</button>
    </form>
  `);
});

// Route for handling form submission
app.post('/add-product', (req, res) => {
  const productName = req.body.productName;
  const productSize = req.body.productSize; // Retrieve the size from the form

  // Log the parsed data
  console.log('Product Name:', productName);
  console.log('Product Size:', productSize);

  res.send('Product added successfully.');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
