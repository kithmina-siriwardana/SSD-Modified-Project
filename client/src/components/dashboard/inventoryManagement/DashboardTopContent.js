import React, { Component } from "react";
import { useState, useEffect } from "react";

import Chart from "react-apexcharts";

function DashboardTopContent() {
  //count no of products
  const [noOfProducts, setNoOfProducts] = useState(0);
  const [products, setProducts] = useState(null);

  const [rawMaterials, setRawMaterials] = useState(null);

  //total inventory products cost value
  const [totalProductsCost, setTotalProductsCost] = useState(0);

  //total inventory raw materials cost value
  const [totalRawMaterialsCost, setTotalRawMaterialsCost] = useState(0);

  //to get the count of suppliers
  const [supplierCount, setSupplierCount] = useState(0);

  //for fetching supplier details
  useEffect(() => {
    const fetchSupplierInfo = async () => {
      const response = await fetch("/api/suppliers");
      const json = await response.json();

      if (response.ok) {
        setSupplierCount(Object.keys(json).length);
      }
    };

    fetchSupplierInfo();
  }, []);

  //for fetching product details
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("/api/inventoryProducts");
      const json = await response.json();

      if (response.ok) {
        setProducts(json);
        setNoOfProducts(Object.keys(json).length);

        const productNames = [];
        const productData = [];
        const reorderLevel = [];

        json.map((product) => {
          productNames.push(product.product_name);
          productData.push(product.units_in_stock);
          reorderLevel.push(product.reorder_level);
        });

        let total = 0;
        for (let i = 0; i < json.length; i++) {
          total = total + json[i].units_in_stock * json[i].unit_price;
        }

        setTotalProductsCost(total);

        setBarStateProducts({
          options: {
            colors: ["#30abf2", "#fc2323"],
            chart: {
              id: "basic-bar1",
            },

            legend: {
              show: true,
              showForSingleSeries: true,
              customLegendItems: ["Units in Stock", "Reorder Level"],
            },

            xaxis: {
              categories: productNames,
              axisBorder: {
                show: true,
                color: "#78909C",
                offsetX: 0,
                offsetY: 0,
              },
            },

            yaxis: {
              axisBorder: {
                show: true,
                color: "#78909C",
                offsetX: 0,
                offsetY: 0,
              },
            },
          },

          series: [
            {
              name: "Units In Stock",
              data: productData,
            },
            {
              name: "Reorder Level",
              data: reorderLevel,
            },
          ],
        });
      }
    };

    fetchProducts();
  }, []);

  //for fetching raw material details
  useEffect(() => {
    const fetchRawMaterials = async () => {
      const response = await fetch("/api/inventoryRawMaterials");
      const json = await response.json();

      if (response.ok) {
        setRawMaterials(json);

        const rmData = [];
        const rmNames = [];
        const reOrderLevel = [];

        json.map((rawMaterial) => {
          rmData.push(rawMaterial.qty_in_stock);
          rmNames.push(rawMaterial.raw_material_name);
          reOrderLevel.push(rawMaterial.reorder_level);
        });

        let total = 0;
        for (let i = 0; i < json.length; i++) {
          total = total + json[i].qty_in_stock * json[i].unit_price;
        }

        setTotalRawMaterialsCost(total);

        setBarStateRawMaterials({
          options: {
            colors: ["#05ffb4", "#fc2323"],
            chart: {
              id: "basic-bar2",
            },

            legend: {
              show: true,
              showForSingleSeries: true,
              customLegendItems: ["Quantity in Stock", "Reorder Level"],
            },

            xaxis: {
              categories: rmNames,
              axisBorder: {
                show: true,
                color: "#78909C",
                offsetX: 0,
                offsetY: 0,
              },
            },
            yaxis: {
              axisBorder: {
                show: true,
                color: "#78909C",
                offsetX: 0,
                offsetY: 0,
              },
            },
          },

          series: [
            {
              name: "Quantity in Stock",
              data: rmData,
            },
            {
              name: "Reorder Level",
              data: reOrderLevel,
            },
          ],
        });
      }
    };

    fetchRawMaterials();
  }, []);

  //for charts - products
  const [barStateProducts, setBarStateProducts] = useState({
    options: {
      colors: [],
      chart: {
        id: "",
      },

      legend: {
        show: false,
        showForSingleSeries: false,
        customLegendItems: ["", ""],
      },

      xaxis: {
        categories: [],
        axisBorder: {
          show: false,
          color: "",
          offsetX: 0,
          offsetY: 0,
        },

        yaxis: {
          axisBorder: {
            show: false,
            color: "",
            offsetX: 0,
            offsetY: 0,
          },
        },
      },
    },

    series: [
      {
        name: "",
        data: [],
      },
      {
        name: "",
        data: [],
      },
    ],
  });

  // for charts - raw materials
  const [barStateRawMaterials, setBarStateRawMaterials] = useState({
    options: {
      colors: "",
      chart: {
        id: "",
      },

      legend: {
        show: false,
        showForSingleSeries: false,
        customLegendItems: ["", ""],
      },

      xaxis: {
        categories: [],
        axisBorder: {
          show: false,
          color: "",
          offsetX: 0,
          offsetY: 0,
        },
        yaxis: {
          axisBorder: {
            show: false,
            color: "",
            offsetX: 0,
            offsetY: 0,
          },
        },
      },
    },
    series: [
      {
        name: "",
        data: [],
      },
      {
        name: "",
        data: [],
      },
    ],
  });

  return (
    <main id="main" className="main">
      <div className="pagetitle">
        <h1>Dashboard</h1>
      </div>
      <br /> {/*End of main title*/}
      <div className="d-flex">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div className="card d-flex w-25">
          <div className="card-body">
            <h5 className="card-title">Total Suppliers</h5>
            <b>{supplierCount}</b>

            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2f-uFEOKKCuBfjHPLELAO4HCxwWvnycFVxg&usqp=CAU"
              style={{
                height: "50px",
                width: "50px",
                position: "relative",
                left: "170px",
              }}
            />
          </div>
        </div>{" "}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div className="card d-flex w-25">
          <div className="card-body">
            <h5 className="card-title">Total Product Categories</h5>
            <b>{noOfProducts}</b>

            <img
              src="https://www.pngitem.com/pimgs/m/325-3256236_products-icon-vector-product-icon-png-transparent-png.png"
              style={{
                height: "50px",
                width: "50px",
                position: "relative",
                left: "180px",
              }}
            />
          </div>
        </div>{" "}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div className="card d-flex w-25">
          <div className="card-body">
            {/* <select class="form-select form-select-sm" aria-label=".form-select-sm example" style={{borderStyle: "none", width: '150px', position: 'relative', left: '100px'}}>
                  <option selected>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
    </select> */}

            <h5 className="card-title">All Inventory Value</h5>
            <b>Rs. {totalRawMaterialsCost + totalProductsCost}</b>

            <img
              src="https://media.istockphoto.com/vectors/profit-analysis-icon-earning-growth-blue-version-vector-id1211747430?k=20&m=1211747430&s=170667a&w=0&h=HMmsVRj54hQQRXWFPqOurfc-LHMkG6q4dxxh-F9tAsU="
              style={{
                height: "50px",
                width: "50px",
                position: "absolute",
                left: "215px",
              }}
            />
          </div>
        </div>
      </div>
      <br />
      <br />
      {/* Start of table with hoverable rows */}
      <div className="card">
        <div className="card-body">
          <center>
            <h5 className="card-title">Recent Purchase Details</h5>
          </center>

          <div className="card-body">
            <table
              class="table table-hover"
              style={{ textAlign: "center", verticalAlign: "middle" }}
            >
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Supplier Name</th>
                  <th scope="col">Raw Material</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Total Cost (Rs.)</th>
                  <th scope="col">Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>ABC Suppliers</td>
                  <td>Coconut Husk</td>
                  <td>20 KG</td>
                  <td>15050</td>
                  <td>2016-05-25</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/*End Table with hoverable rows*/}
      <br />
      <br />
      {/*Start of charts*/}
      <div className="d-inline">
        <div className="card">
          <center>
            <h5 className="card-title">
              Availability - <strong>Products</strong>
            </h5>
          </center>
          <div className="card-body">
            <Chart
              options={barStateProducts.options}
              series={barStateProducts.series}
              type="bar"
              height="400"
              width="1100"
            />
          </div>
        </div>

        <div className="card">
          <center>
            <h5 className="card-title">
              Availability - <strong>Raw Materials</strong>
            </h5>{" "}
          </center>
          <div className="card-body">
            <Chart
              options={barStateRawMaterials.options}
              series={barStateRawMaterials.series}
              type="bar"
              height="400"
              width="1100"
            />
          </div>
        </div>

        {/* <div className="card">

                  <center><h5 className="card-title">Category Wise Sales (%)</h5> </center>

                  
                  <ul class="nav nav-tabs nav-tabs-bordered d-flex" id="borderedTabJustified" role="tablist">
                      <li class="nav-item flex-fill" role="presentation" >
                        <button class="nav-link w-100 active" id="home-tab" data-bs-toggle="tab" data-bs-target="#bordered-justified-home" type="button" role="tab" aria-controls="home" aria-selected="true"  style={{fontStyle: 'italic'}}>DAILY</button>
                      </li>
                      <li class="nav-item flex-fill" role="presentation">
                        <button class="nav-link w-100" id="profile-tab" data-bs-toggle="tab" data-bs-target="#bordered-justified-profile" type="button" role="tab" aria-controls="profile" aria-selected="false" tabindex="-1"  style={{fontStyle: 'italic'}}>MONTHLY</button>
                      </li>
                      <li class="nav-item flex-fill" role="presentation">
                        <button class="nav-link w-100" id="contact-tab" data-bs-toggle="tab" data-bs-target="#bordered-justified-contact" type="button" role="tab" aria-controls="contact" aria-selected="false" tabindex="-1"  style={{fontStyle: 'italic'}}>YEARLY</button>
                      </li>
                </ul>

                  

                  <div className="card-body">
                    <Chart
                    options={barStateRawMaterials.options}
                    series={barStateRawMaterials.series}
                    type="bar"
                    height="400"
                    width="1100"
                  />
                  </div>
                  </div>  */}
      </div>
    </main>
  );
}

export default DashboardTopContent;
