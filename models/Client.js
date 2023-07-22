const mongoose = require('mongoose');
const { Schema } = mongoose;

const ClientSchema = new Schema({
    userName: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    tel: {
        type: String,
        unique: true,
        required: true
    },
    brands: {
        type: [
            {
                type: Schema.Types.ObjectId,
                ref: "brands"
            }
        ]        
    }
})

module.exports = mongoose.model('Client', ClientSchema);
