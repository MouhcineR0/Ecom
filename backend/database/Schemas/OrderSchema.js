const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    },
    date: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        validate: {
            validator: (value) => {
                const Status = ['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'];
                return Status.includes(value);
            },
            message: 'Not Valid Status'
        },
        default: 'Pending'
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Products'
    },
    quantity: {
        type: Number,
        default: 1
    },
    price: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Orders', OrderSchema);