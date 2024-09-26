const express = require('express')

const {
    delivaryCreate} = require('../controllers/delivaryController')

const router = express.Router()


// GET From Buy now button
router.post('/', delivaryCreate)

module.exports = router