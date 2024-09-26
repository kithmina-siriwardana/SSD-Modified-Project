const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SupllierSchema = new Schema({
  companyName: {
    type: String,
    required: true,
    unique: true
  },
  companyPhoneNo: {
    type: String,
    required: true,
  },
  brNo: {
    type: String,
    required: true,
  },
  companyAddress: {
    type: String,
    required: true,
  },
  contactPersonName: {
    type: String,
    required: true,
  },
  contactPersonPhoneNo: {
    type: String,
    required: true,
  },
  contactPersonEmail: {
    type: String,
    required: true,
  },
  rawMaterial: {
    type: String,
    required: true
  },
  bankName: {
    type: String,
    required: true
  },
  bankBranch: {
    type: String,
    required: true
  },
  bankAccountNo: {
    type: String,
    required: true
  },
  status: {
    type: Boolean,
    required: true
  }
},
  {
    timestamps: true
  }
);

const Supplier = mongoose.model("Supplier", SupllierSchema);

module.exports = Supplier;
