const express = require("express");

const {newSupplierPayment, allSupplierPayments, getPaymentData, getPaymentDataBySupplier, getRecentPayments,oneSupplierPayments,getOutcomeOverview } = require("../controllers/supplierPaymentController");

const router = express.Router();

//*Add new supplier payment 
router.post("/", newSupplierPayment);

//*Get all supplier payments 
router.get("/", allSupplierPayments);



//*Get one supplier payments 
router.get("/getOne/:ID", oneSupplierPayments);

 

//*Get report details payments
router.get("/getReport", getOutcomeOverview) ;

//*Get all supplier payments 
router.get("/payment-data", getPaymentData);

//*Get Payment data by name
router.get("/payment-data/:name", getPaymentDataBySupplier);

//*Get Payment data by name
router.get("/recent-data", getRecentPayments);

module.exports = router;