const mongoose = require('mongoose')

const incomeHistory = mongoose.Schema({
    
Order_id:{type:String},
total_Amount:{type:Number}, 
Date:{type: Date, default: Date.now},


})


const income = mongoose.model('incomeHistory',incomeHistory)

module.exports = income;



