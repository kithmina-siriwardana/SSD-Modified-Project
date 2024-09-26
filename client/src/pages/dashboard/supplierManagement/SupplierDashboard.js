import React, { useEffect, useState } from "react";
import Header from "../../../components/dashboard/Header";
import Sidebar from "../../../components/dashboard/Sidebar";
import PaymentBarChart from "../../../components/dashboard/supplierManagement/PaymentBarChart";
import RecentlyAddedSuppliers from "../../../components/dashboard/supplierManagement/RecentlyAddedSuppliers";
import SupplierPieChart from "../../../components/dashboard/supplierManagement/SupplierPieChart";

const moment = require('moment');

function SupplierDashboard() {

    const [supplierCount, setSupplierCount] = useState(0);

    useEffect(() => {
        const getCount = async () => {
            const response = await fetch('/api/suppliers/getCount/count', { method: 'GET' });

            const json = await response.json();

            if (response.ok) {
                setSupplierCount(json.count);
            }

            if (!response.ok) {
                console.log(json.error);
            }

        }
        getCount();

    }, []);

    return (
        <>
            <Header />
            <Sidebar />
            <main className="main" id="main">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                    <li className="breadcrumb-item">Dashboard</li>
                </ol>

                <div className="row" style={{ margin: "20px 0", justifyContent: "center" }} >
                    <div className="col-lg-5 card" style={{ margin: "0 15px 0 0", padding: "20px" }}>
                        <SupplierPieChart />
                        {/* <RecentSupplierPayment /> */}
                    </div>

                    <div className="col-lg-5" style={{ margin: "0 15px 0 0"}}>

                        <div className="card" style={{padding: "40px"}}>
                            <h5 className="card-title">Today : {moment().format("YYYY MMMM DD")}</h5>
                            <div className="d-flex align-items-center">
                                <div className="ps-3">
                                    <h3 >Suppliers : {supplierCount}</h3>
                                </div>
                            </div>
                        </div>
                        <div className="card" style={{padding: "20px" }}>
                            <RecentlyAddedSuppliers />
                        </div>
                    </div>
                </div>

                <div className="row" style={{ margin: "20px 0", justifyContent: "center" }}>
                    <div className="col-lg-10 card" style={{ margin: "0 15px 0 0", padding: "20px" }}>
                        <PaymentBarChart />
                    </div>
                </div>

            </main>
        </>
    )
}

export default SupplierDashboard;