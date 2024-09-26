const User = require("../models/User");
const mongoose = require("mongoose");
const CART = require("../models/cart");
const Delivary = require("../models/delivary");
const xss = require("xss");

const delivaryCreate = async (req, res) => {
  try {
    // Sanitize user inputs to prevent XSS
    const delivary = new Delivary({
      recieverName: xss(req.body.recieverName),
      orderID: xss(req.body.orderID),
      address: xss(req.body.address),
      phoneNumber: xss(req.body.phoneNumber),
    });

    // Save the delivery record to the database
    await delivary.save();

    // Send a sanitized response
    res.json(delivary);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  delivaryCreate,
};
