const Product = require('../models/Product');
const Brand = require('../models/Brand');
const Client = require('../models/Client');
const mongoose = require('mongoose')

async function special_price(req, res) {
    try {
        client = await Client.findById(req.params.user_id)
        product = await Product.findById(req.params.nombre_producto)
        
        let special_pricing = product.precioBase

        if (client.brands.length > 0) {
            client.brands.forEach(element => {
                if (element.toString() == product.id_marca.toString()) {
                    special_pricing = product.precioBase * 0.7
                }
            });
            res.json({ precio: special_pricing });
        } else {
            res.json({ precio: product.precioBase })
        }
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
}

module.exports = {
    special_price
}
