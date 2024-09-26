const mongoose = require('mongoose')

const InventoryRawMaterialsSchema = new mongoose.Schema({
    raw_material_name: {
        type: String,
        required: true,
    },
    unit_price: {
        type: Number,
        required: true,
    },
 
    unit: {
        type: String,
        required: true,
    },
    qty_in_stock: {
        type: Number,
        required: true,
    },
    reorder_level: {
        type: Number,
        required: true,
    },
    supplier_name: {
        type: String,
        required: true,
    },
});

const InventoryRawMaterialsModel = mongoose.model("inventoryRawMaterials", InventoryRawMaterialsSchema)

module.exports = InventoryRawMaterialsModel