const { find } = require("../models/Supplier");
const Supplier = require("../models/Supplier");

//* create a suplliers
const newSupplier = async (req, res) => {

    const newSupplier = new Supplier({
        companyName: req.body.companyName,
        companyPhoneNo: req.body.companyPhoneNo,
        brNo: req.body.brNo,
        companyAddress: req.body.companyAddress,
        contactPersonName: req.body.contactPersonName,
        contactPersonPhoneNo: req.body.contactPersonPhoneNo,
        contactPersonEmail: req.body.contactPersonEmail,
        rawMaterial: req.body.rawMaterial,
        bankName: req.body.bankName,
        bankBranch: req.body.bankBranch,
        bankAccountNo: req.body.bankAccountNo,
        status: req.body.status
    });

    newSupplier
        .save()
        .then(supplier => res.status(200).json(supplier))
        .catch(error => res.status(400).json({ error: error.message }));
};


//* find all suppliers
const allSuppliers = async (req, res) => {
    await Supplier.find()
        .then(suppliers => res.status(200).json(suppliers));
};


//* find a supplier by id
const supplierById = async (req, res) => {
    Supplier
        .findById(req.params.id)
        .then((supplier) => { res.status(200).json(supplier) })
        .catch(error => res.status(400).json({ error: error.message }));
};


//* find a supplier by companyName
const supplierByName = async (req, res) => {
    Supplier
        .find({ companyName: { $regex: ".*" + req.params.comName + ".*", $options: 'i' } })
        .then(supplier => { res.status(200).json(supplier) })
        .catch(error => res.status(400).json({ error: error.message }))
};

//* find a supplier by rawMaterial
const supplierByRawMaterial = async (req, res) => {
    Supplier
        .find({ rawMaterial: { $regex: ".*" + req.params.rawMaterial + ".*", $options: 'i' } })
        .then(supplier => { res.status(200).json(supplier) })
        .catch(error => res.status(400).json({ error: error.message }))
};



//* update a supplier
const updateASupplier = async (req, res) => {
    updateSupplier = {
        companyName: req.body.companyName,
        companyPhoneNo: req.body.companyPhoneNo,
        brNo: req.body.brNo,
        companyAddress: req.body.companyAddress,
        contactPersonName: req.body.contactPersonName,
        contactPersonPhoneNo: req.body.contactPersonPhoneNo,
        contactPersonEmail: req.body.contactPersonEmail,
        rawMaterial: req.body.rawMaterial,
        bankName: req.body.bankName,
        bankBranch: req.body.bankBranch,
        bankAccountNo: req.body.bankAccountNo,
        status: req.body.status
    };


    await Supplier
        .findOneAndUpdate({ _id: req.params.id }, updateSupplier, { new: true })
        .then(supplier => res.status(200).json(supplier))
        .catch(error => res.status(400).json({ error: error.message }));
};


//*delete supplier
const deleteSupplier = async (req, res) => {
    await Supplier
        .findById(req.params.id)
        .then(supplier => supplier.remove().then(res.json({ success: true }))) //! update this line
        .catch(error => res.status(400).json({ error: error.message }));
};

//*get supplier count
const getSupplierCount = async (req, res) => {
    await Supplier
        .estimatedDocumentCount({})
        .then(count => { res.json({ count: count }) })
        .catch(error => { res.json({ error: error }) });
};

//* Get Bar Chart Data
const getSupplierData = async (req, res) => {
    await Supplier
        .find({status:true}, { companyName: 1, rawMaterial: 1, bankName: 1, bankBranch: 1, bankAccountNo: 1, _id: 1 })
        .then(supplierNames => res.json(supplierNames))
        .catch(error => res.json({ error: error.message }));
};

//* Get Pie Chart Data
const getStatusCount = async (req, res) => {
    await Supplier
        .aggregate()
        .group({
            _id: "$status",
            count: {
                $count: {}
            }
        })
        .sort({
            _id: 1
        })
        .then(data => res.json(data))
        .catch(error => res.json({ error: error.message }));
}

//*Get recently added suppliers
const getRecentlyAdded = async(req, res)=>{
    await Supplier
    .find({}, { companyName: 1, rawMaterial: 1, createdAt : 1, _id : 1})
    .sort({createdAt : "asc"})
    .limit(5)
    .then(suppliers=>res.status(200).json(suppliers))
    .catch(error=>res.status(400).json(error));
}

//*Get recently added suppliers
const getSupplierByStatus = async(req, res)=>{
    await Supplier
    .find({status:req.params.status})
    .then(suppliers=>res.status(200).json(suppliers))
    .catch(error=>res.status(400).json(error));
}



module.exports = {
    newSupplier,
    allSuppliers,
    supplierById,
    supplierByName,
    supplierByRawMaterial,
    updateASupplier,
    getSupplierCount,
    deleteSupplier,
    getSupplierData,
    getStatusCount,
    getRecentlyAdded,
    getSupplierByStatus
};