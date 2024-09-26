const express = require('express')

const { getPayment,
    createPayment,
    updatePayment,
    removePayment} = require('../controllers/paymentController')

const router = express.Router()



// GET From Buy now button
router.post('/', createPayment)
router.get('/getPayment/:cusID', getPayment)
router.put('/updatePayment/:cusID', updatePayment)
router.delete('/removePayment/:cusID', removePayment)

module.exports = router



