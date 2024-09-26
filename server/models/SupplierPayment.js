const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SupplierPaymentSchema = new Schema({
    supplierName: {
        type: String,
        required: true
    },
      
    supplierID: {
        type: String,
    
    },
      
    orderID: {
        type: String,
     
    },

    amount: {
        type: Number,
      
    }
    ,
    transactionDate: {
        type: Date,
      
    },
    paymentReferenceNo: {
        type: Number,
      
    },
    fileName: {
        type: String,
      
    }
},
    {
        timestamps: true
    }
);

const SupplierPayment = mongoose.model("SupplierPayment", SupplierPaymentSchema);

module.exports = SupplierPayment;