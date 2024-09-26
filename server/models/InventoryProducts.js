const mongoose = require('mongoose')
const InventoryProductsSchema = new mongoose.Schema({
    product_name: {
        type: String,
        required: true,
    },
    unit_price: {
        type: Number,
        required: true,
    },
 
    reorder_level: {
        type: Number,
        required: true,
    },
    weight_per_unit: {
        type: Number,
        required: true,
    },
    units_in_stock: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    photo: {
        type: String
    }
});

const InventoryProductsModel = mongoose.model("inventoryProducts", InventoryProductsSchema)

module.exports = InventoryProductsModel