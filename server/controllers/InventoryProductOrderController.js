//inventory product order controller for product orders from the inventory

/*Product Orders*/
const inventoryProductOrder = require('../models/InventoryProductOrder')
const mongoose = require('mongoose')

//CREATE an order for a product
const createProductOrder = async (req, res) => {
    const {product, productQuantity} = req.body

    // add details to db
    try{
        const productOrder = await inventoryProductOrder.create({product, productQuantity})
        res.status(200).json(productOrder)
    } catch(error) {
        res.status(400).json({error: error.message})
    }
} 


//Read details of all product orders ordered from the inventory
const getAllProductOrders = async (req, res) => {
    await inventoryProductOrder.find()
        .then((allProductOrders) => res.status(200).json(allProductOrders));
};

//DELETE a particular product order
const deleteProductOrder = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Product order does not exist'})
    }

    const productOrder = await inventoryProductOrder.findOneAndDelete({_id: id})

    if(!productOrder) {
        return res.status(404).json({error: 'Product order does not exist'})
    }

    res.status(200).json(productOrder)

} 

// Update a product order
const updateProductOrders = async (req, res) => {
    
    const { id } = req.params
    const { status } = req.body

    console.log(id + "  " + status)

    const productOrder = await inventoryProductOrder.findByIdAndUpdate({ _id: id }, {
        status: req.body.status
    })

    if (!productOrder) {
        return res.status(404).json({ error: 'Poduct Order does not exsist' })
    }

    res.status(200).json(productOrder)
}

module.exports = { 
    createProductOrder,
    getAllProductOrders,
    deleteProductOrder,
    updateProductOrders
}