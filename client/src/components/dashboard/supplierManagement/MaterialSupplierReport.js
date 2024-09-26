import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function RawMaterialReport() {

    const [suppliertData, setSuppliertData] = useState();
    const [error, setError] = useState();
    const { rawMaterial } = useParams();
   
    useEffect(() => {

        const getPaymentData = async () => {
            const response = await fetch(`/api/suppliers/rawMaterial/${rawMaterial}`);
            const json = await response.json();

            if (response.ok) {
                setSuppliertData(json);
                console.log(json);
            }

            if (!response.ok) {
                setError(json.error);
                console.log(error);
            }
        }

        getPaymentData();
    }, [])

    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();


    return (
        <>
            <div className="col-12">
                <div className="row" style={{ margin: "60px 0 30px" }}>
                    <div className="col-12">
                        <img src="https://i.ibb.co/c6HQzff/jiffy-logo.png" style={{ width: "20%", height: "auto", margin: "20px 0 20px 0" }} alt="jiffy-logo" />

                        <span style={{ margin: "0 0 0 50%", fontWeight: "800" }}>Generated Date : {`${day} - ${month} - ${year}`} </span>

                        <h1 style={{ margin: "20px 0 0 0", textAlign: "center", fontWeight: "600" }}>Raw Material Supplier Report</h1>
                    </div>
                </div>
                <div className="col-12">

                    <h2 style={{ margin: "20px 0" }}> {`Raw Material  : ${rawMaterial}`} </h2>

                    <table className="table table-bordered col-md-12">
                        <thead className="table-secondary" style={{ textAlign: "center" }}>
                            <tr>
                                <th style={{ width: "40%" }} scope="col" colSpan={4}>Company Details</th>
                                <th style={{ width: "30%" }} scope="col" colSpan={3}>Contact Person Details</th>
                                <th style={{ width: "30%" }} scope="col" colSpan={3}>Bank Details</th>
                            </tr>
                            <tr>
                                <th style={{ width: "12%" }} scope="col" >Company Name</th>
                                <th style={{ width: "8%" }} scope="col" >Phone Number</th>
                                <th style={{ width: "10%" }} scope="col" >BR Number</th>
                                <th style={{ width: "10%" }} scope="col" >Address</th>
                                <th style={{ width: "10%" }} scope="col" >Name</th>
                                <th style={{ width: "10%" }} scope="col" >Contact Number</th>
                                <th style={{ width: "10%" }} scope="col" >E-mail</th>
                                <th style={{ width: "10%" }} scope="col" >Bank Name</th>
                                <th style={{ width: "10%" }} scope="col" >Branch</th>
                                <th style={{ width: "10%" }} scope="col" >Account Number</th>
                            </tr>
                        </thead>

                        <tbody style={{ textAlign: "center" }}>

                            {suppliertData && suppliertData.map((data) =>
                                <tr>
                                    <td style={{ width: "10%" }} >{data.companyName}</td>
                                    <td style={{ width: "10%" }} >{data.companyPhoneNo}</td>
                                    <td style={{ width: "10%" }} >{data.brNo}</td>
                                    <td style={{ width: "10%" }} >{data.companyAddress}</td>
                                    <td style={{ width: "10%" }} >{data.contactPersonName}</td>
                                    <td style={{ width: "10%" }} >{data.contactPersonPhoneNo}</td>
                                    <td style={{ width: "10%" }} >{data.contactPersonEmail}</td>
                                    <td style={{ width: "10%" }} >{data.bankName}</td>
                                    <td style={{ width: "10%" }} >{data.bankBranch}</td>
                                    <td style={{ width: "10%" }} >{data.bankAccountNo}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

        </>
    )
}

export default RawMaterialReport;