const express = require('express')
const {
    createProduct,
    updateProduct,
    deleteProduct,
    getProduct,
    getAllProducts,
    updateQuantity

} = require('../controllers/inventoryProductsController')

const router = express.Router()


// GET a single product by id
router.get('/:id', getProduct)

// GET all products
router.get("/", getAllProducts);

// POST a new product
router.post('/', createProduct)

// DELETE a product
router.delete('/:id', deleteProduct)

// UPDATE a product
router.patch('/:id', updateProduct)

//UPDATE Quantity
router.patch('/updateQTY/:id', updateQuantity)


module.exports = router