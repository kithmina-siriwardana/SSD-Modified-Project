const express = require('express')

const {
    insert,
    getIncomeOverview} = require('../controllers/incomeHistoryControllers')

const router = express.Router()



// GET From Buy now button
router.post('/insert',insert)
router.get('/incomeOverview',getIncomeOverview)


module.exports = router