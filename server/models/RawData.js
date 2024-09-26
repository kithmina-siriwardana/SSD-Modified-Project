const mongoose = require('mongoose')

const RawDataSchema = new mongoose.Schema({
	currentDate: {
		type: Date,
        required: true,
		default: Date.now
	},
	fId: {
		type: String,
		required: true,
	},
	rawMaterial: {
		type: String,
		required: true,
	},
	NoOfRaws: {
		type: Number,
		required: true,
		default: 0
	}
})

const RawData = mongoose.model('RawData', RawDataSchema)

module.exports = RawData
