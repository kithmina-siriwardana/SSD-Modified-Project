const express = require('express')

const {
    createMachine,
    getAllMachines,
    getMachine,
    getMachinesByFId,
    deleteMachine,
    updateMachine   
} = require('../controllers/machineController')

const router = express.Router()

// POST a new Machine
router.post('/', createMachine)

// GET all Machines
router.get('/', getAllMachines)

// GET Machines by FId
router.get('/', getMachinesByFId)

// GET a single Machine by ID
router.get('/:id', getMachine)

// UPDATE a Machine by ID
router.patch('/:id', updateMachine)
 
// DELETE a Machine by ID
router.delete('/:id', deleteMachine)

module.exports = router