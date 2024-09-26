const mongoose = require('mongoose')

const MachineSchema = new mongoose.Schema({
	mId: {
		type: String,
		required: true,
	},
	maxRunningHrs: {
		type: Number,
		required: true
	},
  	product: {
		type: String,
		required: false
	},
	mFactory: {
		type: String,
		required: true
	},
	installedDate: {
		type: Date,
        required: false,
		default: Date.now
	},
	totalProductions: {
		type: Number,
		required: false,
		default: 0
	},
	totalRunningHrs: {
		type: Number,
		required: false,
		default: 0
	}
})

const Machine = mongoose.model('Machine', MachineSchema)

module.exports = Machine
