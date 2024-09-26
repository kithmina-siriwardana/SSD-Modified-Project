import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const FactoryAddForm = () => {
  const navigate = useNavigate();
  const [fId, setFId] = useState('')
  const [fName, setFName] = useState('')
  const [fLocation, setFLocation] = useState('')
  const [numOfMachines, setNumOfMachines] = useState('')
  const [numOfVehicles, setNumOfVehicles] = useState('')
  const [numOfEmployees, setNumOfEmployees] = useState('')
  const [createdDate, setCreatedDate] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const factory = { fId, fName, fLocation, numOfMachines, numOfVehicles, numOfEmployees, createdDate }

    const response = await fetch('/api/factory', {
      method: 'POST',
      body: JSON.stringify(factory),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
    }

    if (response.ok) {
      setFId('')
      setFName('')
      setFLocation('')
      setNumOfMachines('')
      setNumOfVehicles('')
      setNumOfEmployees('')
      setCreatedDate('')
      setError(null)
      console.log('New Factory was added succefully.', json)
      navigate("/view-factory");
    }
  }

  return (
    <main id="main" className="main">

      <div className="pagetitle">
        <h1>Factory Management</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="/dashboard">Home</a></li>
            <li className="breadcrumb-item">Factory</li>
            <li className="breadcrumb-item active">Add Factory</li>
          </ol>
        </nav>
      </div>

      <section className="section">
        <div className="row">
          <div className="col-lg-4">
          </div>
          <div className="col-lg-5">

            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Factory Insert Form</h5>


                {error &&
                  <div className="alert alert-danger alert-dismissible fade show" role="alert">
                    {error}
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                  </div>
                }




                {/* <!-- Vertical Form --> */}
                <form className="row g-3" onSubmit={handleSubmit}>

                  <div className="col-12">
                    <label for="inputFID" className="form-label">Factory ID</label>
                    <input type="text" className="form-control" id="inputFName"
                      onChange={(e) => setFId(e.target.value)} value={fId} />
                  </div>

                  <div className="col-12">
                    <label for="inputFName" className="form-label">Factory Name</label>
                    <input type="text" className="form-control" id="inputFName"
                      onChange={(e) => setFName(e.target.value)} value={fName} />
                  </div>

                  <div className="col-12">
                    <label for="inputFLocation" className="form-label">Factory Location</label>
                    <input type="text" className="form-control" id="inputFLocation"
                      onChange={(e) => setFLocation(e.target.value)} value={fLocation} />
                  </div>

                  <div className="col-12">
                    <label for="inputNumOfMachines" className="form-label">Number Of Machines</label>
                    <input type="Number" className="form-control" id="inputNumOfMachines"
                      onChange={(e) => setNumOfMachines(e.target.value)} value={numOfMachines} />
                  </div>

                  <div className="col-12">
                    <label for="inputNumOfEmployees" className="form-label">Number Of Employees</label>
                    <input type="Number" className="form-control" id="inputNumOfEmployees"
                      onChange={(e) => setNumOfEmployees(e.target.value)} value={numOfEmployees} />
                  </div>

                  <div className="col-12">
                    <label for="inputNumOfVehicles" className="form-label">Number Of Vehicles</label>
                    <input type="Number" className="form-control" id="inputNumOfVehicles"
                      onChange={(e) => setNumOfVehicles(e.target.value)} value={numOfVehicles} />
                  </div>

                  <div className="col-12">
                    <label for="inputCreateDate" className="form-label">Created Date</label>
                    <input type="Date" className="form-control" id="inputCreateDate"
                      onChange={(e) => setCreatedDate(e.target.value)} value={createdDate} />
                  </div>

                  <div className="text-center">
                    <button type="submit" className="btn btn-primary" style={{ margin: "20px" }}>Submit</button>
                    <button type="reset" className="btn btn-secondary">Reset</button>
                  </div>
                </form>
                {/* <!-- Vertical Form --> */}

              </div>
            </div>
          </div>
          <div className="col-lg-4">
          </div>
        </div>
      </section>

    </main>
  )
}

export default FactoryAddForm 