import React, { useEffect, useState } from "react";

const moment = require("moment");

function RecentSupplierPayment() {

    const [data, setData] = useState();
    const [error, setError] = useState();
    let count = 0;

    useEffect(() => {

        const getRecentlyAdded = async () => {
            const respone = await fetch('/api/supplier-payment/recent-data');
            const json = await respone.json();

            if (respone.ok) {
                setData(json);
            }

            if (!respone.ok) {
                setError(json.error);
            }
        }

        getRecentlyAdded();
    }, [])



    return (
        <>
            <h1>Recent Supplier Payments</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Ref. No</th>
                        <th scope="col">Supplier Name</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Date</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map(
                        payment =>
                            <tr key={payment._id}>
                                <th scope="row">{payment.paymentReferenceNo}</th>
                                <td>{payment.supplierName}</td>
                                <td>{payment.amount}</td>
                                <td>{moment(payment.createdAt).format("YYYY-MM-DD")}</td>
                            </tr>
                    )}
                </tbody>
            </table>
        </>

    )
}

export default RecentSupplierPayment;