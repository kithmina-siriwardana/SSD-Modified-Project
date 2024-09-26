const express = require('express')

const {
    createCart,
    updateCart,
    getCart,
    getAllCart,
    deleteCart
} = require('../controllers/cartController')

const router = express.Router()



// GET From Buy now button
router.post('/insert', createCart)
router.put('/update/:productID/:customerID', updateCart)
router.get('/get/:pID/:cID', getCart)
router.get('/getAll/:cID', getAllCart)

router.delete('/delete/:productID/:customerID', deleteCart)

module.exports = router