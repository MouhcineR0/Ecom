const mongoose = require('mongoose');

const AddressSchema = mongoose.Schema({
    address_line1: {
        type: String,
        required: true,
        lowercase: true,
    },
    address_line2: {
        type: String,
        lowercase: true
    },
    city: {
        type: String,
        required: true,
        lowercase: true
    },
    country: {
        type: String,
        required: true,
        lowercase: true
    },
    codePostal: {
        type: Number,
        required: true,
        maxlength: 8,
        minlength: 3
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    }
});

module.exports = mongoose.model('Address', AddressSchema);