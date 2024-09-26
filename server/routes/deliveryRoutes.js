const express = require('express')

const router = express.Router()

const {
    getReportDetails
} = require('../controllers/deliveryController');

router.get('/delivery-report', getReportDetails);


module.exports = router