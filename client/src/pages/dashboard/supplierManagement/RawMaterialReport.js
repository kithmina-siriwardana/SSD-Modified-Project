import React from "react";

import Header from "../../../components/dashboard/Header";
import Sidebar from "../../../components/dashboard/Sidebar";
import RawMaterialReport from "../../../components/dashboard/supplierManagement/MaterialSupplierReport";
import html2Canvas from 'html2canvas';
import jsPDF from 'jspdf';

function SupplierRawMaterialReport() {

    const exportPdf = () => {
        const input = document.getElementById("report");
        html2Canvas(input, { scale: 2, logging: true, letterRendering: 1, useCORS: true })
            .then(
                canvas => {
                    const imgWidth = 297;
                    const imgHeight = canvas.height * imgWidth / canvas.width;
                    const imgData = canvas.toDataURL('img/svg');
                    const pdf = new jsPDF('l', 'mm', 'a4');
                    pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
                    pdf.save('report.pdf')
                }
            )
    }

    return (
        <>
            <Header />
            <Sidebar />
            <main className="main" id="main">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                    <li class="breadcrumb-item">Supplier Management</li>
                    <li class="breadcrumb-item">Reports</li>
                </ol>

                <div className="col-12 ">
                    <button className="btn btn-primary" style={{ float: "right" }} onClick={() => { exportPdf() }}><i class="bi bi-file-earmark-arrow-down-fill"></i> Download </button>
                    <div style={{ padding: "100px" }} id="report">
                        <RawMaterialReport />
                    </div>
                </div>
            </main>
        </>
    )
}

export default SupplierRawMaterialReport;