import React from "react";
import Header from "../../../components/dashboard/Header";
import Sidebar from "../../../components/dashboard/Sidebar";

import FullOrderReport from "../../../components/dashboard/orderManagement/SingleOrderReport";
import html2Canvas from 'html2canvas';
import jsPDF from 'jspdf';

function OrderReport(){

    const exportPdf = () => {
        const input = document.getElementById("report");
        html2Canvas(input, { scale: 2, logging: true, letterRendering: 1, useCORS: true })
            .then(
                canvas => {
                    const imgWidth = 210;
                    const imgHeight = canvas.height * imgWidth / canvas.width;
                    const imgData = canvas.toDataURL('img/svg');
                    const pdf = new jsPDF('p', 'mm', 'a4');
                    pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
                    pdf.save('report.pdf')
                }
            )
    }

    return (<>
        <Header />
        <Sidebar />
        <main className="main" id="main">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                <li class="breadcrumb-item">Supplier Management</li>
                <li class="breadcrumb-item">Reports</li>
            </ol>

            <div className="container">
                <button class="btn btn-primary" style={{ float:"right" }} onClick={() => { exportPdf() }}><i class="bi bi-file-earmark-arrow-down-fill"></i> Download </button>
                <div style={{ padding: "100px" }} id="report">
                    <FullOrderReport />
                </div>
            </div>
        </main>
    </>
    )
}







export default OrderReport;