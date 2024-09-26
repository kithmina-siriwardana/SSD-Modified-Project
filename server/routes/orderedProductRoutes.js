const express = require('express')

const {
    Create,
    getProductByOrderId,
    getNumberOfOrdersForProduct,
    getProductsSoldCount
} = require('../controllers/orderedProductController')

const router = express.Router()



// GET From Buy now button
router.post('/create', Create)

//Get product by order id
router.get('/getProductbyOrderid/:id', getProductByOrderId)

//Get number of orders for a product
router.get('/getNumberOfOrders', getNumberOfOrdersForProduct)

//Get products sold count in orders
router.get('/getproductssoldcount', getProductsSoldCount)

module.exports = router