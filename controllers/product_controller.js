const Product = require('../models/Product');
const Brand = require('../models/Brand');
const mongoose = require('mongoose')

async function index(req, res) {
    try {
        const products = await Product.find({ enStock: { $eq: 1 } });
        res.json(products);
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
}

module.exports = {
    index
}
