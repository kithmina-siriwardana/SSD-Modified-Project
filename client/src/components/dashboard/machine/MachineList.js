import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Machine() {
  const navigate = useNavigate()
  const [machine, setMachines] = useState([])
  const [factories, setFactories] = useState([])
  const [factoryFilter, setFactoryFilter] = useState('')
 
  const fetchMachines = async ({factory}) => {
    const url = factory && factory !== "ALL" ? `/api/machine?factory=${factory}` : '/api/machine'
    const response = await fetch(url)
    const json = await response.json()

    if (response.ok) {
      setMachines(json)
    }
  }

  const fetchFactories = async () => {
    const response = await fetch( '/api/factory')
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
    fetchMachines({factory: factoryFilter})
  }, [factoryFilter])

  return (
    <main id="main" className="main">

      <div className="pagetitle">
        <h1>Machine Management</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
            <li className="breadcrumb-item">Machine</li>
            <li className="breadcrumb-item active">View Machine</li>
          </ol>
        </nav>
      </div>
      {/* <!-- End Page Title --> */}

      <section className="section">
        <div className="row">
          <div className="col-lg-12">

            <div className="card">
              <div className="card-body">
                <h5 className="card-title">All Machines</h5>

                <div class="row mb-3">
                  <label class="col-sm-2 col-form-label" >Select a factory:</label>
                  <br />

                  <div className="col-4">
                    <div className="input-group mb-3">

                      <select className="form-select" onChange={e => setFactoryFilter(e.target.value)}>
                        <option value={"ALL"} selected>All factories</option>
                        {factories.map(factory => (
                          <option key={factory.fId} value={factory.fId}>{factory.fId}</option>
                        ))}
                       
                      </select>
                      
                    </div>
                  </div>

                </div>

                {/* <!-- Default Table --> */}
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Machine ID</th>
                      <th scope="col">Product Created</th>
                      <th scope="col">Max. Running Hours per week</th>
                      <th scope="col">Factory ID</th>
                      <th scope="col">View</th>
                    </tr>
                  </thead>
                  <tbody>
                    {machine && machine.map((machine) => (
                      <tr key={machine._id}>
                        <th scope="row">{machine.mId}</th>
                        <td>{machine.product}</td>
                        <td>{machine.maxRunningHrs}</td>
                        <td>{machine.mFactory}</td>
                        <td><Link to={{ pathname: `/machine-details/${machine._id}` }}>View Machine Details</Link></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {/* <!-- End Default Table Example --> */}
              </div>
              
            </div>
            <button type="button" class="btn btn-outline-primary" onClick={() => navigate("/add-machine")}>Add New Machine</button>
          </div>
        </div>
      </section>

    </main>
  );
}


export default Machine;