const express = require('express')

const{
    getAllproductOrders,
    updateProductOrders

} = require('../controllers/productOrderController')

const router = express.Router()

//Get all orders
router.get('/', getAllproductOrders)

//Update an product order
router.patch('/:id', updateProductOrders)

module.exports = router