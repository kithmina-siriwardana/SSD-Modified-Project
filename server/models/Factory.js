const mongoose = require('mongoose')

const FactorySchema = new mongoose.Schema({
	fId: {
		type: String,
		required: true,
	},
	fName: {
		type: String,
		required: false
	},
 	fLocation: {
		type: String,
		required: true
	},
	numOfMachines: {
		type: Number,
		required: false
	},
	numOfVehicles: {
		type: Number,
		required: false
	},
  	numOfEmployees: {
		type: Number,
		required: false
	},
	createdDate: {
		type: Date,
		required: false,
        default: Date.now
	}
})

const Factory = mongoose.model('Factory', FactorySchema)

module.exports = Factory
