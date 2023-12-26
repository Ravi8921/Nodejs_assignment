const express = require('express');

const app = express();

const adminRoute = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// Body parser middleware
app.use(express.urlencoded({ extended: true }));

app.use(adminRoute);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).send('<h1>Page not found</h1>');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
