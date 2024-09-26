import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Header from "../../../components/dashboard/Header";
import Sidebar from "../../../components/dashboard/Sidebar";

function SupplierReports() {

    const [status, setStatus] = useState(true);
    const [filter, setFilter] = useState();
    const [materialType, setMaterialType] = useState("Coir");
    const [error, setError] = useState("");

    useEffect(() => {

        const fetchAllSuppliers = async () => {
            const response = await fetch("/api/suppliers");
            const json = await response.json();

            if (response.ok) {
                let array = json.map(data => data.rawMaterial);
                setFilter([...new Set(array)]);
            } else {
                setError(json.error);
                console.log(error);
            }
        };

        fetchAllSuppliers();

    }, [])

    return (
        <>
            <Header />
            <Sidebar />
            <main className="main" id="main">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                    <li class="breadcrumb-item">Supplier Management</li>
                    <li class="breadcrumb-item">Pay Supplier</li>
                </ol>

                <div className="row">

                    <div className="col-lg-6">
                        <div className="card info-card sales-card">
                            <div className="card-body">
                                <h5 className="card-title">Raw Material Supplier Report</h5>
                                <div className="d-flex align-items-center">
                                    <div className="ps-3">
                                        <div className="col-12">
                                            <div className="input-group mb-3">
                                                <select className="form-select" defaultValue={"coir"} onChange={e => setMaterialType(e.target.value)}>
                                                    {filter && filter.map(data =>
                                                        <option defaultValue={data}>{data}</option>
                                                    )}
                                                </select>
                                                <Link to={{ pathname: `/supplier-reports/${materialType}` }}><button className="btn btn-primary" type="button"><i class="bi bi-file-text-fill"></i></button></Link>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="card info-card sales-card">
                            <div className="card-body">
                                <h5 className="card-title">Supplier Active / Inactive Status Report</h5>
                                <div className="d-flex align-items-center">
                                    <div className="ps-3">
                                        <div className="input-group mb-3">
                                            <select className="form-select" defaultValue={status} onChange={e => setStatus(e.target.value)}>
                                                <option value={true}>Active</option>
                                                <option value={false}>Inactive</option>
                                            </select>
                                            <Link to={{ pathname: `/supplier-status-reports/${status}` }}><button className="btn btn-primary" type="button"><i class="bi bi-file-text-fill"></i></button></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </main>
        </>
    )
}

export default SupplierReports;
