const express = require('express')

const {
    createFactory,
    getFactory,
    getAllFactories,
    updateFactory,
    deleteFactory    
} = require('../controllers/FactoryController')

const router = express.Router()

// POST a new Factory
router.post('/', createFactory)

// GET all Factories
router.get('/', getAllFactories)

// GET a single Factory by ID
router.get('/:id', getFactory)

// UPDATE a Factory by ID
router.patch('/:id', updateFactory)
 
// DELETE a Factory by ID
router.delete('/:id', deleteFactory)

module.exports = router