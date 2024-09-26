import React from "react";

import Header from "../../../components/dashboard/Header";
import Sidebar from "../../../components/dashboard/Sidebar";

import SupplierForm from "../../../components/dashboard/supplierManagement/SupplierForm";

function AddSupplier() {
    return (
        <>
            <Header />
            <Sidebar />
            <main className="main" id="main">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                    <li class="breadcrumb-item">Supplier Management</li>
                    <li class="breadcrumb-item">Add Supplier</li>
                </ol>
                <SupplierForm
                    formName="Add Supplier"
                    buttonName="Add Supplier"
                    companyName=""
                    companyPhoneNo=""
                    brNo=""
                    companyAddress=""
                    contactPersonName=""
                    contactPersonPhoneNo=""
                    contactPersonEmail=""
                    status = {true}
                />
            </main>
        </>
    )
}

export default AddSupplier;