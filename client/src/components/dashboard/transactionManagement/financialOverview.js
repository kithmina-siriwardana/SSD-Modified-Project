import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom'
import axios, { Axios } from 'axios';
import { useParams } from 'react-router-dom'
import { Component } from "react";
import Chart from "react-apexcharts";
import { jsPDF } from "jspdf"
import html2canvas from "html2canvas"


function FinancialOverview() {
    const [chartData, setChartData] = useState([]);
    const [avg, setAverage] = useState('')
    const [tot, setTotal] = useState('')

    const [outcomechartData, setOutcomeChartData] = useState([]);
    const [avgOutcome, setOutcomeAverage] = useState('')
    const [totOutcome, setOutcomeTotal] = useState('')

    useEffect(() => {
        const financialIncome = async () => {
            const response = await fetch('/api/v8/incomeHistory/incomeOverview')
            const json = await response.json()

            var total = 0;
            chartData.map((data) => {
                total += data.income;
            })
            average = total / chartData.length;
            const avg = average.toFixed(2);
            setAverage(avg);
            setTotal(total);
            if (response.ok) {
                setChartData(json)

                const arr1 = [];
                const arr2 = [];

                json.map(chartData => {
                    arr1.push(chartData.income);
                    arr2.push(chartData.date);

                })

                const array1 = arr1.reverse();
                const array2 = arr2.reverse();

                setIncomeChart(
                    {
                        options: {

                            chart: {
                                id: "basic-bar"
                            },

                            xaxis: {
                                categories: array2
                            }
                        },
                        series: [
                            {
                                name: "Total Ran Hours",
                                data: array1
                            }
                        ]
                    }
                )
            }
        }
        financialIncome()
    }

    )

    // for charts - machines running ours
    const [incomeChart, setIncomeChart] = useState(
        {
            options: {

                chart: {
                    id: ""
                },

                xaxis: {
                    categories: []
                }
            },
            series: [
                {
                    name: "",
                    data: []
                }
            ]
        }
    )

    useEffect(() => {
        const financialOutcome = async () => {
            const response = await fetch('/api/supplier-payment/getReport')
            const json = await response.json()

            var outtotal = 0;
            outcomechartData.map((data) => {
                outtotal += data.outcome;
            })
            outaverage = outtotal / outcomechartData.length;
            const outavg = outaverage.toFixed(2);
            setOutcomeAverage(outavg);
            setOutcomeTotal(outtotal);

            if (response.ok) {
                setOutcomeChartData(json)

                const arr1 = [];
                const arr2 = [];

                json.map(outcomechartData => {
                    arr1.push(outcomechartData.outcome);
                    arr2.push(outcomechartData.date);

                })

                const array1 = arr1.reverse();
                const array2 = arr2.reverse();

                setOutcomeChart(
                    {
                        options: {
                            chart: {
                                id: "basic-bar"
                            },

                            xaxis: {
                                categories: array2
                            }
                        },
                        series: [
                            {
                                name: "Total Ran Hours",
                                data: array1
                            }
                        ]
                    }
                )
            }
        }
        financialOutcome()
    }

    )

    // for charts - machines running ours
    const [OutcomeChart, setOutcomeChart] = useState(
        {
            options: {
                colors: ["#E91E63"],
                chart: {
                    id: ""
                },

                xaxis: {
                    categories: []
                }
            },
            series: [
                {
                    name: "",
                    data: []
                }
            ]
        }
    )
 
    const printReport = (e) => {
        e.preventDefault();
        const input = document.getElementById("ss");

        html2canvas(input, { scale: 2, logging: true, letterRendering: 1, useCORS: true })

            .then(

                canvas => {

                    const imgWidth = 210;

                    const imgHeight = canvas.height * imgWidth / canvas.width;

                    const imgData = canvas.toDataURL('img/svg');

                    const pdf = new jsPDF('p', 'mm', 'a4');

                    pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);

                    pdf.save('report.pdf')

                }

            )

    }


    var average
    var outaverage
    return (
        <div>
        <div id="ss"> 
        <img src="https://i.ibb.co/c6HQzff/jiffy-logo.png" style={{ width: "10%", height: "auto", margin: "20px 0 20px 0" }} alt="jiffy-logo" />
        <h1>Company Financial Report In last Two years</h1> 
        <main id="main" className="main">



            <section class="section">
                <div class="row">
                    <div>
                        <div class="col-lg-5">

                            <div class="col-lg-1"></div>

                            <div class="card-body" id="saveChart">

                                <h5 class="card-title">Income Chart ({parseInt(new Date().getFullYear())}-{parseInt(new Date().getFullYear() - 1)})</h5>

                                <Chart
                                    options={incomeChart.options}
                                    series={incomeChart.series}
                                    type="area"
                                    width="180%"

                                />
                                <h5>Total Income : Rs{tot}  </h5>
                                <h5>Average Monthly Income : Rs {avg} </h5>
                                <br />




                            </div>
                        </div>

                        <div class="col-lg-5">

                            <div class="col-lg-1"></div>

                            <div class="card-body" id="saveChart">

                                <h5 class="card-title">Supplier Payment Chart ({parseInt(new Date().getFullYear())}-{parseInt(new Date().getFullYear() - 1)})</h5>

                                <Chart
                                    options={OutcomeChart.options}
                                    series={OutcomeChart.series}
                                    type="area"
                                    width="180%"
                                />
                                <br />


                                <h5>Total Supplier Payment: Rs {totOutcome}  </h5>
                                <h5>Average Supplier Payment : Rs {avgOutcome}  </h5>


                            </div>
                        </div>
                    </div>
                </div>
            </section>

            </main> 
            
        </div><button type="button" onClick={printReport} class="btn btn-primary rounded-pill">print report</button>
       </div>
    );
}

export default FinancialOverview;