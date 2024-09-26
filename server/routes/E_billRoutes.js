const express = require('express')

const {
    getCartTotal,

    getBuyNowTotal} = require('../controllers/eBillController')

const router = express.Router()



// GET From Buy now button
router.get('/getall/:cusID', getCartTotal)

router.get('/getone/:pid/:qty',getBuyNowTotal)

module.exports = router