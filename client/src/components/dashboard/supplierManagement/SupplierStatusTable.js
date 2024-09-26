import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const moment = require('moment');

function SupplierStatusTable() {

    const [data, setData] = useState();
    const [error, setError] = useState();
    const { status } = useParams();

    useEffect(() => {

        const getStatusData = async () => {
            const response = await fetch(`/api/suppliers/status/${status}`);
            const json = await response.json();

            if (response.ok) {
                setData(json);
                console.log(json);

            }

            if (!response.ok) {
                setError(json.error);
                console.log(error);
            }
        }

        getStatusData();

    }, [])

    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    console.log(status);

    return (
        <>
            <section className="section">
                <div className="col-12">
                    <div className="row" style={{ margin: "60px 0 30px" }}>
                        <div className="col-12">
                            <img src="https://i.ibb.co/c6HQzff/jiffy-logo.png" style={{ width: "20%", height: "auto", margin: "20px 0 20px 0" }} alt="jiffy-logo" />

                            <span style={{ margin: "0 0 0 50%", fontWeight: "800" }}>Generated Date : {`${day} - ${month} - ${year}`} </span>

                            <h1 style={{ margin: "20px 0 0 0", textAlign: "center", fontWeight: "600" }}>Supplier Active / Inactive Status Report</h1>
                        </div>
                    </div>
                    <div className="col-12">

                        <h2 style={{ margin: "20px 0" }}> Status  : {status === "true" ? "Active" : "Inactive"} </h2>
                        <div className="row">
                            <div className="col-12">
                                <table className="table  table-bordered col-8">
                                    <thead className="table-secondary " style={{ textAlign: "center" }}>
                                        <tr>
                                            <th scope="col">Company Name</th>
                                            <th scope="col">Company Phone No</th>
                                            <th scope="col">Raw Material</th>
                                            <th scope="col">Contact Person Name</th>
                                            <th scope="col">Contact Person Phone No</th>
                                            <th scope="col">Contact Person E-mail</th>
                                        </tr>
                                    </thead>
                                    <tbody style={{ textAlign: "center" }}>
                                        {data &&
                                            data.map((supplier) => {
                                                return (
                                                    <tr key={supplier._id}>
                                                        <td>{supplier.companyName}</td>
                                                        <td>{supplier.companyPhoneNo}</td>
                                                        <td>{supplier.rawMaterial}</td>
                                                        <td>{supplier.contactPersonName}</td>
                                                        <td>{supplier.contactPersonPhoneNo}</td>
                                                        <td>{supplier.contactPersonEmail}</td>
                                                    </tr>
                                                );
                                            })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default SupplierStatusTable;