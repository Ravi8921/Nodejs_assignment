const express = require('express');
const path =require ('path');
const app = express();

const adminRoute = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// Body parser middleware
app.use(express.urlencoded({ extended: true }));

app.use(adminRoute);
app.use(shopRoutes);

// app.use((req, res, next) => {
//   res.status(404).send('<h1>Page not found</h1>');
// });
// Catch-all route for handling 404 - Page not found
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});
// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});



