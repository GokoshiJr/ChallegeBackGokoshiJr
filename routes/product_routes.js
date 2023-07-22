const express = require('express');
const router = express.Router();

const { index } = require('../controllers/product_controller');

// return all products
router.get('/', index);

module.exports = router;
