const mongoose = require('mongoose')

const cartSchema = mongoose.Schema({
    
customer_id:{type:String},
Item_number:{type:String},  
quantity:{type:Number},

})


const CART = mongoose.model('carts',cartSchema)

module.exports = CART;



