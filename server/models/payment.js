const mongoose = require('mongoose')

const paymentSchema = mongoose.Schema({
    
Customer_id:{type:String},
Card_Number:{type:Number},  
Card_holder_name:{type:String},
Card_expiry_date:{type:String},
Card_CVC :{type:String}

})


const Payment = mongoose.model('payments',paymentSchema)

module.exports = Payment;



