import React, { useEffect, useState } from 'react';

import Header from '../../../components/dashboard/deliveryManagement/deliverymangerheader';
import Sidebar from '../../../components/dashboard/Sidebar';
import Footer from '../../../components/dashboard/Footer';
import Deliveryreport from '../../../components/dashboard/deliveryManagement/reportTable';
import html2Canvas from 'html2canvas'
import jsPDF from 'jspdf'





function ReportPage() {

    const [error, setError] = useState(null);
    const [data, setData] = useState(null);
    
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

    const date = new Date();

    const day = date.getDate();

    const month = date.getMonth() + 1;

    const year = date.getFullYear();

    return (
        <div>
            <Header />

            <Sidebar />
            <main id="main" className="main">
                <div className="pagetitle">
                    <h1>Reports</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <a href="index.html">Home</a>
                            </li>
                            <li className="breadcrumb-item">Tables</li>
                            <li className="breadcrumb-item active">General</li>
                        </ol>
                    </nav>
                </div>
                {/* <!-- End Page Title --> */}

                <button class="btn btn-primary" style={{ float: "right" }} onClick={() => { exportPdf() }}><i class="bi bi-file-earmark-arrow-down-fill"></i> Download </button>


                <div id='report'>
                    <div className="col-12">

                        <div className="row" style={{ margin: "60px 0 30px" }}>

                            <div className="col-12">

                                <img src="https://i.ibb.co/c6HQzff/jiffy-logo.png" style={{ width: "20%", height: "auto", margin: "20px 0 20px 0" }} alt="jiffy-logo" />



                                <span style={{ margin: "0 0 0 50%", fontWeight: "800" }}>Generated Date : {`${day} - ${month} - ${year}`} </span>



                                <h1 style={{ margin: "20px 0 0 0", textAlign: "center", fontWeight: "600" }}>Deliver Feedback Report</h1>

                            </div>

                        </div>

                        <div className="row" >

                            <div className="col-12">




                                <Deliveryreport />


                            </div>

                        </div>

                    </div>

                </div>


            </main>
            <Footer />
            <a href=""
                className="back-to-top d-flex align-items-center justify-content-center">
                <i className="bi bi-arrow-up-short"></i>
            </a>
        </div>
    );
}

export default ReportPage;