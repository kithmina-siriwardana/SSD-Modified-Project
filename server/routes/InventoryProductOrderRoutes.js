const express = require('express')
const {
    createProductOrder,
    getAllProductOrders,
    deleteProductOrder,
    updateProductOrders
} = require('../controllers/InventoryProductOrderController')

const router = express.Router()

// GET all product orders
router.get("/", getAllProductOrders);

// POST a new product order
router.post('/', createProductOrder);

// DELETE a particula product order
router.delete('/:id', deleteProductOrder);

//Update an product order
router.patch('/:id', updateProductOrders);

module.exports = router