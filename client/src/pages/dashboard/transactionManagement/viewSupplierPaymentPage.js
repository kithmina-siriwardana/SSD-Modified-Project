import React from "react";

import Header from "../../../components/dashboard/Header";
import Sidebar from "../../../components/dashboard/Sidebar";

import ViewSupplierPayment from "../../../components/dashboard/transactionManagement/viewSupplierPayment";

function SupplierPayment() {

    return (
        <>
            <Header />
            <Sidebar />
            <main className="main" id="main">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                    <li class="breadcrumb-item">Financial Management</li>
                    <li class="breadcrumb-item">View Payment</li>
                </ol>
                <ViewSupplierPayment
                    formName="Pay Supplier"
                    buttonName="Pay"
                />
            </main>
        </>
    )
}

export default SupplierPayment;
