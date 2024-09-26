const mongoose = require('mongoose') 


const LeaveSchema = new mongoose.Schema({
  empID:{
    type:String
  },
  description: {
    type: String,
    required: true,
  },
  startDate:{
    type: Date,
    required: true,
  },
  endDate:{
    type: Date,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  lastLogin: {
    type: Date,
    default: Date.now,
    required: true,
  },
})
const Leave = mongoose.model('Leave', LeaveSchema)

module.exports = Leave;