import React, { useEffect, useState } from "react";

const moment = require("moment");

function RecentlyAddedSuppliers() {

    const [data, setData] = useState();
    const [error, setError] = useState();
    let count = 0;

    useEffect(() => {

        const getRecentlyAdded = async () => {
            const respone = await fetch('/api/suppliers/get/recently-added');
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
            <h1>Recently added suppliers</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Raw Material</th>
                        <th scope="col">Date Added</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map(
                        supplier =>
                            <tr key={supplier._id}>
                                <th scope="row">{++count}</th>
                                <td>{supplier.companyName}</td>
                                <td>{supplier.rawMaterial}</td>
                                <td>{moment(supplier.createdAt).format("YYYY-MM-DD")}</td>
                            </tr>
                    )}
                </tbody>
            </table>
        </>

    )
}

export default RecentlyAddedSuppliers;