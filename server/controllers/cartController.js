const User = require("../models/User");
const mongoose = require("mongoose");
const xss = require("xss"); // Import xss for input sanitization

const CART = require("../models/cart");
const InventoryProducts = require("../models/InventoryProducts");

// Create a new cart
const createCart = async (req, res) => {
  const { customer_id, Item_number, quantity } = req.body;

  const sanitizedCustomerId = xss(customer_id);
  const sanitizedItemNumber = xss(Item_number);
  const sanitizedQuantity = xss(quantity);

  const cart = new CART({
    customer_id: sanitizedCustomerId,
    Item_number: sanitizedItemNumber,
    quantity: sanitizedQuantity,
  });

  try {
    await cart.save();
    res.status(201).send(xss(cart)); // Respond with sanitized cart
  } catch (error) {
    res.status(400).json({ error: xss(error.message) });
  }
};

// Get specific cart item by customer ID and product ID
const getCart = async (req, res) => {
  const sanitizedCustomerId = xss(req.params.cID);
  const sanitizedItemNumber = xss(req.params.pID);

  try {
    const cart = await CART.find({
      customer_id: sanitizedCustomerId,
      Item_number: sanitizedItemNumber,
    });
    if (!cart.length) {
      return res.status(404).json({ error: "Cart item not found" });
    }
    res.status(200).send(xss(cart));
  } catch (error) {
    res.status(400).json({ error: xss(error.message) });
  }
};

// Get all cart items for a customer
const getAllCart = async (req, res) => {
  const sanitizedCustomerId = xss(req.params.cID);

  try {
    const cart = await CART.find({ customer_id: sanitizedCustomerId });

    if (!cart.length) {
      return res.status(404).json({ error: "No items in the cart" });
    }

    const products = await Promise.all(
      cart.map((item) => InventoryProducts.findById(item.Item_number))
    );

    const finalCart = cart.map((item, index) => ({
      product_id: products[index]._id,
      product_name: products[index].product_name,
      unit_price: products[index].unit_price,
      quantity: item.quantity,
    }));

    res.status(200).send(finalCart);
  } catch (error) {
    res.status(400).json({ error: xss(error.message) });
  }
};

// Update cart item by customer ID and product ID
const updateCart = async (req, res) => {
  const sanitizedCustomerId = xss(req.params.customerID);
  const sanitizedItemNumber = xss(req.params.productID);
  const { customer_id, Item_number, quantity } = req.body;

  const sanitizedBodyCustomerId = xss(customer_id);
  const sanitizedBodyItemNumber = xss(Item_number);
  const sanitizedQuantity = xss(quantity);

  try {
    const cart = await CART.findOneAndUpdate(
      { customer_id: sanitizedCustomerId, Item_number: sanitizedItemNumber },
      {
        customer_id: sanitizedBodyCustomerId,
        Item_number: sanitizedBodyItemNumber,
        quantity: sanitizedQuantity,
      },
      { new: true }
    );

    if (!cart) {
      return res.status(404).json({ error: "Cart item not found" });
    }

    res.status(200).send(xss(cart));
  } catch (error) {
    res.status(400).json({ error: xss(error.message) });
  }
};

// Delete a cart item by customer ID and product ID
const deleteCart = async (req, res) => {
  const sanitizedCustomerId = xss(req.params.customerID);
  const sanitizedItemNumber = xss(req.params.productID);

  try {
    const cart = await CART.findOneAndDelete({
      customer_id: sanitizedCustomerId,
      Item_number: sanitizedItemNumber,
    });

    if (!cart) {
      return res.status(404).json({ error: "Cart item not found" });
    }

    res.status(200).send(xss(cart));
  } catch (error) {
    res.status(400).json({ error: xss(error.message) });
  }
};

module.exports = {
  createCart,
  getCart,
  getAllCart,
  updateCart,
  deleteCart,
};
