const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
        lowercase: true,
        unique: true
    },
    description: {
        type: String,
        require: true,
    },
    price: {
        type: Number,
        required: true
    },
    categorie: {
        type: String,
        required: true
    },
    imagepath: {
        type: String,
        required: true
    },
    type: {
        type: String,
        default: 'product',    // client || admin 
        validate: {
            validator: (value) => {
                const Roles = ['product', 'cover',];
                return Roles.includes(value);
            },
            message: 'Not Valid Type'
        }
    },
    ratings: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Ratings'
    }],
    quantity: {
        type: Number,
        required: true
    },
    promo: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model('Products', ProductSchema);