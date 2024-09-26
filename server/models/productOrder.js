const mongoose = require('mongoose')

const productOrderSchema = new mongoose.Schema({

	currentDate: {
		type: Date,
        required: true,
		default: Date.now
	},
	product: {
		type: String,
		required: true,
	},
	quantity: {
		type: Number,
		required: true
	},
	status: {
		type: String,
		default: "Pending"
	}

})

const productOrder = mongoose.model('productOrder', productOrderSchema)

module.exports = productOrder;