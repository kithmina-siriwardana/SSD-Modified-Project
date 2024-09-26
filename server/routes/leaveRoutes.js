const express = require('express')
const {
    createLeave,
    getLeaves,
    getLeave,
    deleteLeave,
    updateLeave
} = require('../controllers/LeaveController')

const router = express.Router()

// GET all leaves
router.get('/', getLeaves)

// GET a single user
router.get('/:id', getLeave)

// POST a new user
router.post('/', createLeave)

// DELETE a user
router.delete('/:id', deleteLeave)

// UPDATE a user
router.patch('/:id', updateLeave)


module.exports = router