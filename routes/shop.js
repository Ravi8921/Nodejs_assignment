const express = require('express');
const router = express.Router();
const shopController = require('../Controller/shopController');

// Route for displaying the shop page
router.get('/', shopController.showShopPage);

module.exports = router;
