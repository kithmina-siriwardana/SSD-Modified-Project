const mongoose = require('mongoose')

const delevarySchema = mongoose.Schema({
    
recieverName:{type:String},
orderID:{type:String},  
address:{type:String},  
phoneNumber:{type:String}, 

})


const Delevery = mongoose.model('Delivary',delevarySchema)

module.exports = Delevery;



