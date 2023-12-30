// contactController.js

const path = require('path');


exports.showContactForm = (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'contact.html'));
    // res.sendFile('../views/contact.html'); // Replace 'path_to' with the actual path
  };
  
  exports.processContactForm = (req, res) => {
    // Process form data (name, email)
    res.redirect('/success');
  };
  