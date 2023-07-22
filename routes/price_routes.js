const express = require('express');
const router = express.Router();

const { special_price } = require('../controllers/price_controller');

router.get('/:user_id/:nombre_producto', special_price);

module.exports = router;
