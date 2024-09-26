const ProductOrder = require('../models/productOrder')

// Get all product Orders
const getAllproductOrders = async (req, res) => {
    const productOrder = await ProductOrder.find();
    res.send(productOrder);
}

// Update a product order
const updateProductOrders = async (req, res) => {
    
    const { id } = req.params
    const { status } = req.body

    const productOrder = await ProductOrder.findByIdAndUpdate({ _id: id }, {
        status: req.body.status
    })

    if (!productOrder) {
        return res.status(404).json({ error: 'Poduct Order does not exsist' })
    }

    res.status(200).json(productOrder)
}


module.exports = {
    getAllproductOrders,
    updateProductOrders
}