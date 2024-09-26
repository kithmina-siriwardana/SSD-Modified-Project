const express = require('express')
const {
    createRawMaterial,
    getRawMaterial,
    getAllRawMaterials,
    updateRawMaterial,
    deleteRawMaterial
} = require('../controllers/inventoryRawMaterialController')

const router = express.Router()

// GET a single product
router.get('/:id', getRawMaterial)

// GET all raw matetrials
router.get("/", getAllRawMaterials);

// POST a new raw material
router.post('/', createRawMaterial)

// DELETE a raw material
router.delete('/:id', deleteRawMaterial)

// UPDATE a raw material
router.patch('/:id', updateRawMaterial)


module.exports = router