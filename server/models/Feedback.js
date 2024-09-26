const mongoose = require('mongoose')

const FeedbackSchema = new mongoose.Schema({
  orderId: {
    type: String,
    required: true,
    unique: true
  },
  CustomerID: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  deliveryFeedback: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
});

const FeedbackModel = mongoose.model("feedback", FeedbackSchema)

module.exports = FeedbackModel