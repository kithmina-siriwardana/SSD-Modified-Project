const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({

    CustomerID: { type: String },
    Status: { type: String },
    Date:{type: Date, default: Date.now},
    DelevaryStatus: { type: String },
    Reciever_Name: { type: String },
    Shpiing_Address: { type: String },
    Phone : { type: String },



})


const Order = mongoose.model('order', orderSchema)

module.exports = Order;



