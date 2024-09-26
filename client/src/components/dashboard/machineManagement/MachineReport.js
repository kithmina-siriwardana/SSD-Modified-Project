import { useEffect, useState } from 'react'
import html2canvas from 'html2canvas'
import jspdf from 'jspdf'

function MachineReport() {

  const exportMachinePDF = () => {
    const input = document.getElementById("print")
    html2canvas(input, { logging: true, letterRendering: 1, useCORS: true }).then(canvas => {
      const imgWidth = 208;
      const imgHeight = canvas.height * imgWidth / canvas.width;
      const imgData = canvas.toDataURL('img/png');
      const pdf = new jspdf('p', 'mm', 'a4');
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save("MachineReport.pdf");
    })
  }

  const [machine, setMachines] = useState([])
  const [factories, setFactories] = useState([])
  const [factoryFilter, setFactoryFilter] = useState('')

  const fetchMachines = async ({ factory }) => {
    const url = factory && factory !== "ALL" ? `/api/machine?factory=${factory}` : '/api/machine'
    const response = await fetch(url)
    const json = await response.json()

    if (response.ok) {
      setMachines(json)
    }
  }

  const fetchFactories = async () => {
    const response = await fetch('/api/factory')
    const json = await response.json()

    if (response.ok) {
      setFactories(json)
    }
  }

  useEffect(() => {
    fetchFactories()
    fetchMachines()
  }, [])

  useEffect(() => {
    fetchMachines({ factory: factoryFilter })
  }, [factoryFilter])

  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return (
    <>
      <div id="print" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div  className="col-12">
          <div className="row" style={{ margin: "60px 0 30px" }}>
            <div className="col-12">
              <img src="https://i.ibb.co/c6HQzff/jiffy-logo.png" style={{ width: "20%", height: "auto", margin: "20px 0 20px 0" }} alt="jiffy-logo" />

              <span style={{ margin: "0 0 0 50%", fontWeight: "800" }}>Generated Date : {`${day} - ${month} - ${year}`} </span>

              <h1 style={{ margin: "20px 0 0 0", textAlign: "center", fontWeight: "600" }}>Machine Statistics Report</h1>
            </div>
          </div>
          <div className="row" >
            <div className="col-12">

              <table className="table col-md-6" style={{ marginLeft: "auto", marginRight: "auto" }}>
                <thead className="table-secondary" style={{ textAlign: "center" }}>
                  <tr>
                    <th style={{ width: "20%" }} scope="col">Machine ID</th>
                    <th style={{ width: "20%" }} scope="col">Product</th>
                    <th style={{ width: "20%" }} scope="col">Total Productions</th>
                    <th style={{ width: "20%" }} scope="col">Total Ran Hours</th>
                    <th style={{ width: "20%" }} scope="col">Factory ID</th>

                  </tr>
                </thead>
                <tbody className="table-light">
                  {machine && machine.map((machine) => (
                    <tr key={machine._id}>
                      <th scope="row" style={{ textAlign: "center" }}>{machine.mId}</th>
                      <td style={{ textAlign: "center" }}>{machine.product}</td>
                      <td style={{ textAlign: "center" }}>{machine.totalProductions}</td>
                      <td style={{ textAlign: "center" }}>{machine.totalRunningHrs}</td>
                      <td style={{ textAlign: "center" }}>{machine.mFactory}</td>
                    </tr>
                  ))}
                </tbody>

              </table>
            </div>
          </div>
          
        </div>
      </div>
      <button type="button" class="btn btn-primary" onClick={() => exportMachinePDF()} >Download PDF</button>
    </>

  )

}


export default MachineReport;


