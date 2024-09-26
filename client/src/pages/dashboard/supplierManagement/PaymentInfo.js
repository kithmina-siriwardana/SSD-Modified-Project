import React from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../../../components/dashboard/Header";
import Sidebar from "../../../components/dashboard/Sidebar";
import PaymentInfoCard from "../../../components/dashboard/supplierManagement/PaymentInfoCard";

function PaymentInfo() {
    const { name, rawMaterial } = useParams();

    return (
        <>
            <Header />
            <Sidebar />
            <main className="main" id="main">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                    <li class="breadcrumb-item">Supplier Manager
                    </li>
                    <li class="breadcrumb-item active">Details</li>
                </ol>
                <h1>Payment Details</h1>
                <Link to={{ pathname: `/supplier-reports/${name}/${rawMaterial}` }}><button class="btn btn-primary" style={{margin:"20px 10px"}}><span style={{color:"#fff"}}><i class="bi bi-file-earmark-bar-graph"></i> Report</span></button></Link>
                <PaymentInfoCard />
            </main>
        </>
    )
}

export default PaymentInfo;