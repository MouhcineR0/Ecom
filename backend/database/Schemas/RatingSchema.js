const mongoose = require('mongoose');

const RatingSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Products'
    },
    liked: {
        type: Boolean,
        default: false
    },
    // User must have permission to 1 comment for each product
    comment: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Ratings', RatingSchema);