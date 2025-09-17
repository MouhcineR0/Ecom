const mongoose = require('mongoose');

const CardSchema = mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Users'
	},
	product: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Products'
	},
	Quantity: {
		type: Number,
		default: 1
	},
	date: {
		type: Date,
		default: Date.now()
	}
});

module.exports = mongoose.model('Card', CardSchema);