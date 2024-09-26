const mongoose = require('mongoose') 

const SiteFeedbackSchema = new mongoose.Schema({
    name: {
      type: String
    },
    feedback: {
      type: String
    },
    isApproved: {
      type: Boolean,
      default: false
    }
  })

  const SiteFeedback = mongoose.model('SiteFeedback', SiteFeedbackSchema)

  module.exports = SiteFeedback;