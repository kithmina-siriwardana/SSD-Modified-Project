const SupplierFeedback = require('../models/SupplierFeedback');

//* Add new feedback
const newSupplierFeedback = async (req, res) => {

    const newSupplierFeedback = new SupplierFeedback({
        supplierId: req.body.id,
        feedback: req.body.feedback
    });

    newSupplierFeedback
        .save()
        .then(supplierFeedback => res.status(200).json(supplierFeedback))
        .catch(error => res.status(400).json({ error: error.message }));
};


//* find a supplier by name
const feedbackBySupplierName = async (req, res) => {
    SupplierFeedback
        .find({ supplierId: req.params.id })
        .then((supplier) => { res.status(200).json(supplier) })
        .catch(error => res.status(400).json({ error: error.message }));
};

//*Delete feedback
const deleteSupplier = async (req, res) => {

    console.log(req.params.id);

    await SupplierFeedback
        .findByIdAndDelete(req.params.id)
        .then(res.status(200).json({ message: "Successfully deleted the feedback" }))
        .catch(error => res.status(400).json({ error: error.message }));
};




module.exports = {
    newSupplierFeedback,
    feedbackBySupplierName,
    deleteSupplier
};
