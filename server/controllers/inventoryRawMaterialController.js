/*Raw materials*/
const InventoryRawMaterials = require('../models/InventoryRawMaterials')
const mongoose = require('mongoose')

//CREATE a raw material
const createRawMaterial = async (req, res) => {
    const {raw_material_name, unit_price, unit, qty_in_stock, reorder_level, supplier_name} = req.body

    //validations when ceratinga  new ra materuial - checks if it already exists
    if(await InventoryRawMaterials.findOne({raw_material_name})){
        return res.status(400).json({ error: 'The raw material already exists' })
    }

    // add details to db
    try{
        const rawMaterial = await InventoryRawMaterials.create({raw_material_name, unit_price, unit, qty_in_stock, reorder_level, supplier_name})
        res.status(200).json(rawMaterial)
    } catch(error) {
        res.status(400).json({error: error.message})
    }
}

//Read details of all raw materials
const getAllRawMaterials = async (req, res) => {
    await InventoryRawMaterials.find()
        .then((allRawMaterials) => res.status(200).json(allRawMaterials));
};

//READ details of a single raw material
const getRawMaterial = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Raw Material does not exist'})
    }

    const rawMaterial = await InventoryRawMaterials.findById(id)

    if(!rawMaterial) {
        return res.status(404).json({error: 'Raw material does not exist'})
    }

    res.status(200).json(rawMaterial)
}


//UPDATE details of a single raw material
const updateRawMaterial = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Raw material does not exist'})
    }

    const rawMaterial = await InventoryRawMaterials.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!rawMaterial) {
        return res.status(404).json({error: 'Raw material does not exist'})
    }

    res.status(200).json(rawMaterial)
}


//DELETE a single raw material
const deleteRawMaterial = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Raw material does not exist'})
    }

    const rawMaterial = await InventoryRawMaterials.findOneAndDelete({_id: id})

    if(!rawMaterial) {
        return res.status(404).json({error: 'Raw material does not exist'})
    }

    res.status(200).json(rawMaterial)

}

module.exports = {
    createRawMaterial,
    getRawMaterial,
    getAllRawMaterials,
    updateRawMaterial,
    deleteRawMaterial
} 