const xss = require("xss");
const User = require("../models/User");
const mongoose = require("mongoose");
const CART = require("../models/cart");
const InventoryProducts = require("../models/InventoryProducts");
const Order = require("../models/Order");
const Orderproduct = require("../models/orderedProduct");

const getCartTotal = async (req, res) => {
  try {
    const bill = await CART.find({ customer_id: req.params.cusID });

    if (!bill.length) {
      return res.status(404).json({ message: "Cart not found" });
    }

    const prod = await Promise.all(
      bill.map((item) => InventoryProducts.findById(item.Item_number))
    );

    const final = prod.map((product, index) => {
      const itemPrice = product.unit_price * bill[index].quantity;
      return {
        product_ID: product._id,
        product_Name: xss(product.product_name), // Sanitize product name
        quantity: bill[index].quantity,
        product_price: itemPrice,
        total_Amount: itemPrice * bill[index].quantity,
      };
    });

    res.json(final);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getBuyNowTotal = async (req, res) => {
  try {
    const product = await InventoryProducts.findById(req.params.pid);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const quantity = Number(req.params.qty);
    if (isNaN(quantity) || quantity <= 0) {
      return res.status(400).json({ message: "Invalid quantity" });
    }

    const price = product.unit_price * quantity;

    const bill = [
      {
        product_ID: product._id,
        product_Name: xss(product.product_name), // Use sanitized product name
        quantity: quantity,
        product_price: price,
        total_Amount: price,
      },
    ];

    res.json(bill);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  getCartTotal,
  getBuyNowTotal,
};
