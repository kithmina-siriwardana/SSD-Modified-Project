const mongoose = require('mongoose')

const MachineStatsSchema = new mongoose.Schema({
	currentDate: {
		type: Date,
        required: true,
		default: Date.now
	},
	mId: {
		type: String,
		required: true,
	},
	product: {
		type: String,
		required: true,
	},
	completedProducts: {
		type: Number,
		required: true,
		default: 0
	},
	ranHrs: {
		type: Number,
		required: true,
		default: 0
	}
})

const MachineStats = mongoose.model('MachineStats', MachineStatsSchema)

module.exports = MachineStats
