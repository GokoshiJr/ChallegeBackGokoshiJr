const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductSchema = new Schema({
    nombre: {
        type: String,
        unique: true,
        required: true
    },
    precioBase: {
        type: Number,
        required: true
    },
    enStock: {
        type: Boolean,
        required: true
    },
    id_marca: {
        type: Schema.Types.ObjectId,
        ref: "brands"
    }
})

module.exports = mongoose.model('Product', ProductSchema);
