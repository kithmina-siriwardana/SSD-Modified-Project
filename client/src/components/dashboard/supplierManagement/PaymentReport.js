import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const moment = require('moment');

function SupplierPaymentReport() {

    const [paymentData, setPaymentData] = useState();
    let totalAmount = 0;
    let totalQty = 0;
    const [error, setError] = useState();

    const { name, rawMaterial } = useParams();
    console.log(rawMaterial);
    useEffect(() => {

        const getPaymentData = async () => {
            const response = await fetch(`/api/supplier-payment/payment-data/${name}`);
            const json = await response.json();

            if (response.ok) {
                setPaymentData(json);
            }

            if (!response.ok) {
                setError(json.error);
            }
        }

        getPaymentData();
    }, [])

    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth()+1;
    const year = date.getFullYear();


    return (
        <>
            <div className="col-12">
                <div className="row" style={{ margin: "60px 0 30px" }}>
                    <div className="col-12">
                        <img src="https://i.ibb.co/c6HQzff/jiffy-logo.png" style={{ width: "20%", height: "auto", margin: "20px 0 20px 0"}} alt="jiffy-logo" />

                        <span style={{ margin: "0 0 0 50%", fontWeight:"800"}}>Generated Date : {`${day} - ${month} - ${year}`} </span>

                        <h1 style={{ margin: "20px 0 0 0", textAlign:"center", fontWeight:"600" }}>Supplier Payment Report</h1>
                    </div>
                </div>
                <div className="row" >
                    <div className="col-12">

                        <h2 style={{ margin: "20px 0"}}> {`Supplier Name : ${name}`} </h2>
                        <h2 style={{ margin: "20px 0"}}> {`Raw Material  : ${rawMaterial}`} </h2>

                        <table className="table col-md-6">
                            <thead className="table-secondary" style={{ textAlign: "right" }}>
                                <tr>
                                    <th style={{ width: "30%" }} scope="col">Payment Reference Number</th>
                                    <th style={{ width: "20%" }} scope="col">Transaction Date</th>
                                    <th style={{ width: "20%" }} scope="col">Unit Price</th>
                                    <th style={{ width: "10%" }} scope="col">Quantity</th>
                                    <th style={{ width: "20%" }} scope="col">Amount</th>
                                </tr>
                            </thead>
                            <tbody className="table-light">
                                {paymentData &&
                                    paymentData.map((data) => {
                                        totalAmount = totalAmount + data.amount;
                                        totalQty = totalQty + data.quantity;
                                        return (
                                            <tr key={data._id}>
                                                <td style={{ textAlign: "right" }}>{data.paymentReferenceNo}</td>
                                                <td style={{ textAlign: "right" }}>{moment(data.transactionDate).format('DD MMMM YYYY')}</td>
                                                <td style={{ textAlign: "right" }}>{data.unitPrice}</td>
                                                <td style={{ textAlign: "right" }}>{data.quantity}</td>
                                                <td style={{ textAlign: "right" }}>{data.amount}</td>

                                            </tr>
                                        );
                                    })}
                            </tbody>
                            <tfoot className="table-secondary">
                                <tr>
                                    <th style={{ textAlign: "center" }} colSpan="3">Total</th>
                                    <td style={{ textAlign: "right" }}>{totalQty}</td>
                                    <td style={{ textAlign: "right" }}>{totalAmount}</td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SupplierPaymentReport;