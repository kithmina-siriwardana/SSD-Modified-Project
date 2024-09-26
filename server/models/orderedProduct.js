const mongoose = require('mongoose')

const orderProductSchema = mongoose.Schema({
    
OrderID:{type:String},
ProductID:{type:String},
Quantity:{type:Number} 


})


const Orderproduct = mongoose.model('orderproduct',orderProductSchema)

module.exports = Orderproduct;



