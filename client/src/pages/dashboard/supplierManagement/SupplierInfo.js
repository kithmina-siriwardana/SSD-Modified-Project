import React from "react";
import {useParams } from "react-router-dom";
import Header from "../../../components/dashboard/Header";
import Sidebar from "../../../components/dashboard/Sidebar";
import FeedbackCard from "../../../components/dashboard/supplierManagement/FeedbackCard";
import FeedbackForm from "../../../components/dashboard/supplierManagement/FeedbackForm";
import SupplierInfoCard from "../../../components/dashboard/supplierManagement/SupplierInfoCard";

function SupplierInfo() {
    const { id } = useParams();

    return (
        <>
            <Header />
            <Sidebar />
            <main className="main" id="main">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                    <li className="breadcrumb-item">Supplier Manager
                    </li>
                    <li className="breadcrumb-item active">Details</li>
                </ol>


                <button className="btn btn-primary" style={{margin: "20px 0" }} type="button" data-bs-toggle="collapse" data-bs-target="#collapse" aria-expanded="false" aria-controls="collapseExample"><i className="bi bi-chat-right-text"></i><span style={{ margin: "0 10px", color: "#FFF" }}>Add feedback</span></button>

                <div className="collapse" id="collapse">
                    <FeedbackForm />
                </div>

                <h1>Details</h1>
                <SupplierInfoCard
                    id={id}
                />
                <h1>Feedbacks</h1>
                <FeedbackCard />
            </main>
        </>
    )
}

export default SupplierInfo;

