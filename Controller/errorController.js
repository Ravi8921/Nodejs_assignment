exports.error404 = (req, res) => {
    res.status(404).render('404', { pageTitle: 'Page Not Found' }); // Assuming '404' is the name of your EJS file
  };
  