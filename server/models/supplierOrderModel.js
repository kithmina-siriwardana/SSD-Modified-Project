const mongoose = require('mongoose')

const supplierOrderSchema = mongoose.Schema({

    supplierId: {type: String, required: true},
    rawMaterial: {type: String, required: true},
    quantity: {type: Number},
    unit: {type: String},
    orderStatus: {type: String, default: "Pending"},
    Date:{type: Date, default: Date.now},
    // deliveredAt: {type: Date}

})

const SupplierOrder = mongoose.model('supplierorders', supplierOrderSchema)

module.exports = SupplierOrder;