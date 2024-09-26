import React, { useEffect, useState, useRef } from "react";
import { PieChart, Pie, Cell } from "recharts";

function SoldProductsCountPieChart(){

    const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

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

///////////////////////////////////////////////////////////////////////
const [chartData, setChartData] = useState();
const [error, setError] = useState();

useEffect(() => {
    const getSoldProductCount = async () => {
        const response = await fetch('/api/v7/orderedProduct/getproductssoldcount');
        const json = await response.json();

        if (response.ok) {
            setChartData(json);
            console.log(json)
          }

          if (!response.ok) {
            setError(json.error);
            console.log(error);
          }
    };

    getSoldProductCount();
});

return (
    <>
      <h1>Total Percentage of each Product Ordered (last 30 days)</h1>

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
            dataKey="Total"
          >
            {chartData && chartData.map((entry, index) =>
              <Cell key={"_id"} fill={entry._id==="Jiffy Pots" ? "#41AF6C" : entry._id==="Jiffy Growblocks"?"#F96666":entry._id==="Jiffy Performa"?"#0000FF":entry._id==="Jiffy Pellets"?"#A020F0":entry._id==="Jiffy Substrates"?"#242624":entry._id==="Jiffy Growbags"?"#fa0505":"#F00"} />
            )}
          </Pie>
        </PieChart>
      </div>


      <div style={{ color: "#41AF6C" }}>
        <i className="bi bi-square-fill"></i> Jiffy Pots
      </div>

      <div style={{ color: "#fa0505" }}>
        <i className="bi bi-square-fill"></i> Jiffy Growbags
      </div>

      <div style={{ color: "#0000FF" }}>
        <i className="bi bi-square-fill"></i> Jiffy Performa 
      </div>

      <div style={{ color: "#F96666" }}>
        <i className="bi bi-square-fill"></i> Jiffy Growblocks
      </div>

      <div style={{ color: "#A020F0" }}>
        <i className="bi bi-square-fill"></i> Jiffy Pellets
      </div>

      <div style={{ color: "#242624" }}>
        <i className="bi bi-square-fill"></i> Jiffy Substrates
      </div>
    </>
  );
}

export default SoldProductsCountPieChart;