const express = require('express')
const{
    createSupplierOrder,
    getAllSupplierOrders,
    getOneSupplierOrder,
    deleteSupplierOrder,
    updateSupplierOrder,
    updateSupplierOrderPayment,
    getUnpaidSupplierOrders


} = require('../controllers/supplierOrderController')

const router = express.Router()

//Get all orders
router.get('/', getAllSupplierOrders)

//Get all unpaid orders
router.get('/unpaid/', getUnpaidSupplierOrders)

//Get one order by id
router.get('/:id',getOneSupplierOrder)

//Post a new order
router.post('/', createSupplierOrder)

//Delete an order
router.delete('/:id', deleteSupplierOrder)

//Update a new order
router.patch('/:id', updateSupplierOrder)

//update payment
router.put('/suporderupdate/:id',updateSupplierOrderPayment)


module.exports = router