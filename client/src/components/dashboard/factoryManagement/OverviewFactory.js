import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';

function OverviewFactory() {
  const navigate = useNavigate()
  const [machines, setMachines] = useState([])
  const [factories, setFactories] = useState([])

  //count no of machines
  const [noOfMachines, setNoOfMachines] = useState(0)
  //count no of factories
  const [noOfFactories, setNoOfFactories] = useState(0)

    //Factories Overview
    useEffect(() => {
      const fetchFactories = async () => {
        const response = await fetch('/api/factory')
        const json = await response.json()
  
        if (response.ok) {
          setFactories(json)

          const fId = []
  
          json.map(
            factories => {
              fId.push(factories.fId)
            }
          )

          setNoOfFactories(fId.length)

        }
  
      }
  
      fetchFactories()
    }, [])

  //Machine Running hours Overview
  useEffect(() => {
    const fetchMachines = async () => {
      const response = await fetch('/api/machine')
      const json = await response.json()

      if (response.ok) {
        setMachines(json)

        const mId = []
        const totalHours = []

        json.map(
          machine => {
            mId.push(machine.mId)
            totalHours.push(machine.totalRunningHrs)
          }
        )

        setNoOfMachines(mId.length)

        setMachinesRunningHours(
          {
            options: {

              chart: {
                id: "basic-bar"
              },

              xaxis: {
                categories: mId
              }
            },
            series: [
              {
                name: "Total Ran Hours",
                data: totalHours
              }
            ]
          }
        )
      }

    }

    fetchMachines()
  }, [])

  // for charts - machines running ours
  const [machinesRunningHours, setMachinesRunningHours] = useState(
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


  //Machine Production chart
  useEffect(() => {
    const fetchMachines = async () => {
      const response = await fetch('/api/machine')
      const json = await response.json()

      if (response.ok) {
        setMachines(json)

        const mId = []
        const totalProductions = []

        json.map(
          machineProduction => {
            mId.push(machineProduction.mId);
            totalProductions.push(machineProduction.totalProductions);
          }
        )

        setMachineProduciton(
          {
            options: {
              colors: ['#339933'],
              chart: {
                id: "basic-bar"
              },

              xaxis: {
                categories: mId
              }
            },
            series: [
              {
                name: "Total Productions",
                data: totalProductions
              }
            ]
          }
        )
      }

    }

    fetchMachines()
  }, [])

  // for charts - machine production
  const [machineProduction, setMachineProduciton] = useState(
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


  return (
    <main id="main" className="main">

      <div className="pagetitle">
        <h1>Machine Reports</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
            <li className="breadcrumb-item">Machines</li>
            <li className="breadcrumb-item active">Machines Overview</li>
          </ol>
        </nav>
      </div>
      {/* <!-- End Page Title --> */}


      <section style={{ marginLeft: "110px" }} className="section">
        <div className="row">

        <div className="col-lg-10">
           
           <div className="card">

             <div className="card-body">
               <h5 style={{ textAlign: "center" }} className="card-title">Machine Statistics Report</h5>

               <div class="row mb-5">
                 <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} ><button type="button" class="btn btn-primary" onClick={() => navigate("/report-machine")}>View Report</button></div>

               </div>
             </div>
           </div>
         </div>

        </div>

        <div className="row">

        {/* Number of factories */}
          <div className="col-lg-5">
           
            <div className="card">

              <div className="card-body">
                <h5 style={{ textAlign: "center" }} className="card-title">Number of Factories</h5>

                <div class="row mb-5">
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}><button type="button" class="btn btn-success" onClick={() => navigate("/view-factory")}>{noOfFactories}</button></div>
                </div>
              </div>
            </div>
          </div>

          {/* Number of machines */}
          <div className="col-lg-5">
           
            <div className="card">

              <div className="card-body">
                <h5 style={{ textAlign: "center" }} className="card-title">Number of Machines</h5>

                <div class="row mb-5">
                  <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}><button type="button" class="btn btn-success" onClick={() => navigate("/view-machine")}>{noOfMachines}</button></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>


{/* --------------------------------------------------------------------- */}
      <section style={{ marginLeft: "110px" }}  className="section">
        <div className="row">
          <div className="col-lg-10">

            {/* Machine Running Hours */}
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Machine Runnig Hours Chart</h5>

                <Chart
                  options={machinesRunningHours.options}
                  series={machinesRunningHours.series}
                  type="bar"
                  width="800"
                />

              </div>
            </div>



            {/* Machine Production */}
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Machine Production Chart</h5>

                <Chart
                  options={machineProduction.options}
                  series={machineProduction.series}
                  type="bar"
                  width="800"
                />

              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}

export default OverviewFactory;