import React, { useEffect, useState } from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";

function PaymentBarChart() {

    const [data, setData] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        const getSupNames = async () => {
            const response = await fetch('/api/supplier-payment/payment-data');
            const json = await response.json();

            if (response.ok) {
                setData(json);
            }

            if (!response.ok) {
                setError(json.error);
                console.log(error);
            }
        };

        getSupNames();
    }, []);

    return (
        <>
            <h1>Supplier Payments</h1>
            <div style={{marginLeft:"auto", marginRight:"auto" }}>
                <BarChart
                    width={1200}
                    height={500}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="_id"/>
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Total" fill="#0084d8" unit={"LKR"}/>
                </BarChart>
            </div>
        </>
    )
}

export default PaymentBarChart;