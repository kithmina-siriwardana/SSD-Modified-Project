import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell } from "recharts";

function SupplierPieChart() {

  // * -------------------------------------------------------------------- Pie Chart Functions --------------------------------------------------------------------

  const COLORS = ["#F96666", "#41AF6C"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  // * -------------------------------------------------------------------- Pie Chart Functions --------------------------------------------------------------------

  const [chartData, setChartData] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    const getSupNames = async () => {
      const response = await fetch('/api/suppliers/chart/data');
      const json = await response.json();

      if (response.ok) {
        setChartData(json);
      }

      if (!response.ok) {
        setError(json.error);
        console.log(error);
      }
    };

    getSupNames();
  }, [error]);



  return (
    <>
      <h1>Supplier Status</h1>

      <div style={{marginLeft:"auto", marginRight:"auto" }}>
        <PieChart width={450} height={450}>
          <Pie
            data={chartData}
            cx={200}
            cy={200}
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={200}
            fill="#8884d8"
            dataKey="count"
          >
            {chartData && chartData.map((entry, index) =>
              <Cell key={"status"} fill={entry._id ? "#41AF6C" : "#F96666"} />
            )}
          </Pie>
        </PieChart>
      </div>


      <div style={{ color: "#41AF6C" }}>
        <i className="bi bi-square-fill"></i> Active
      </div>

      <div style={{ color: "#F96666" }}>
        <i className="bi bi-square-fill"></i> Inactive
      </div>
    </>
  );
}

export default SupplierPieChart;


