import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function SupplierTable(props) {
    const [suppliers, setSuppliers] = useState(null);

    useEffect(() => {
        //* Assign suppliers to suppliers object
        setSuppliers(props.suppliers)
    }, [props.suppliers]);

    return (
        <>
            <section className="section">
                <div className="row">
                    <div className="col-12">
                        <div className="card" style={{ padding: "20px" }}>
                            <div className="card-body">
                                <h1>Suppliers</h1>
                                <div className="row" style={{ float : "right", width:"20%", margin:"10px 0 35px" }} >
                                    <div className="col-lg-6 col-md-12" style={{ color: "#41AF6C" }}>
                                    <i className="bi bi-circle-fill"></i> Active
                                    </div>

                                    <div className="col-lg-6 col-md-12" style={{ color: "#F96666" }}>
                                    <i className="bi bi-circle-fill"></i> Inactive
                                    </div>
                                </div>
                                <table className="table  table-hover col-8">
                                    <thead>
                                        <tr>
                                            <th scope="col">Company Name</th>
                                            <th scope="col">Company Phone No</th>
                                            <th scope="col">Raw Material</th>
                                            <th scope="col">Contact Person Name</th>
                                            <th scope="col">Contact Person Phone No</th>
                                            <th scope="col">Contact Person E-mail</th>
                                            <th scope="col">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody style={{ textAlign: "center" }}>
                                        {suppliers &&
                                            suppliers.map((supplier) => {
                                                return (
                                                    <tr key={supplier._id}>
                                                        <td>{supplier.companyName}</td>
                                                        <td>{supplier.companyPhoneNo}</td>
                                                        <td>{supplier.rawMaterial}</td>
                                                        <td>{supplier.contactPersonName}</td>
                                                        <td>{supplier.contactPersonPhoneNo}</td>
                                                        <td>{supplier.contactPersonEmail}</td>
                                                        <td><i className="bi bi-circle-fill" style={{ color: supplier.status ? "#41AF6C" : "#F96666" }}></i></td>
                                                        <td><Link to={{ pathname: `/supplier-info/${supplier._id}` }}><button className="btn btn-primary" title="View details"><i className="bi bi-eye-fill"></i></button></Link></td>
                                                        <td><Link to={{ pathname: `/update-supplier-details/${supplier._id}` }}><button className="btn btn-primary" title="Update details"><i className="bi bi-pencil-square" style={{ color: "#FFF" }}></i></button></Link></td>
                                                        {/* <td><Link to={{ pathname: `/supplier-reports/${supplier.rawMaterial}` }}><button className="btn btn-primary" title="View payment details"><i className="bi bi-file-earmark-text-fill"></i></button></Link></td> */}
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
    );
}

export default SupplierTable;
