const express = require('express')

const {
    createMachineStats,
    getAllMachineStats
    
} = require('../controllers/machineStatsController')

const router = express.Router()

// POST a new MachineStat
router.post('/', createMachineStats)

// GET all MachineStats
router.get('/', getAllMachineStats)

module.exports = router