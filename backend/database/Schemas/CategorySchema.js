const mongoose = require('mongoose');

const CategorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        lowercase: true,
    },
    svg: {
        type: String, 
        required: true,
    }
});

module.exports = mongoose.model('Category', CategorySchema); 
