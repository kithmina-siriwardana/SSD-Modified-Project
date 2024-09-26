const mongoose = require('mongoose')

const inventoryProductOrderSchema = new mongoose.Schema({

	currentDate: {
		type: Date,
        required: true,
		default: Date.now
	},
	product: {
		type: String,
		required: true,
	},
	productQuantity: {
		type: Number,
		required: true
	},
	status: {
		type: String,
		default: "Pending"
	}

});

const inventoryProductOrder = mongoose.model('inventoryProductOrder', inventoryProductOrderSchema)

module.exports = inventoryProductOrder;