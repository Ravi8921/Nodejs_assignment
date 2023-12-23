const express = require('express');
const app = express();

// First Middleware
app.use((req, res, next) => {
  console.log('This is the first middleware');
  next();
});

// Second Middleware
app.use((req, res, next) => {
  console.log('This is the second middleware');
  next();
});

// Routes or additional configuration can be added here

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
