import { useState, useEffect } from "react";

const RawInsertForm = () => {
  const [factory, setFactory] = useState([])

  const [fId, setFId] = useState('')
  const [currentDate, setCurrentDate] = useState('')
  const [rawMaterial, setRawMaterial] = useState('')
  const [noOfRaws, setNoOfRaws] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const rawData = { fId, currentDate, rawMaterial, noOfRaws }

    console.log(fId, currentDate, rawMaterial, noOfRaws)

    const response = await fetch('/api/rawData', {
      method: 'POST',
      body: JSON.stringify(rawData),
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
      setCurrentDate('')
      setRawMaterial('')
      setNoOfRaws('')
      setError(null)
      console.log('New raw material data updated succefully.', json)
    }
  }

  const fetchFactories = async () => {
    const response = await fetch( '/api/factory')
    const json = await response.json()

    if (response.ok) {
      setFactory(json)
    }
  }

  useEffect(() => {
    fetchFactories()
  }, [])

  return (
    <main id="main" className="main">

      <div className="pagetitle">
        <h1>Factory Management</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
            <li className="breadcrumb-item">Factory</li>
            <li className="breadcrumb-item active">Raw Materials</li>
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
                <h5 className="card-title">Raw Materials Data Form</h5>

                {error &&
                  <div className="alert alert-danger alert-dismissible fade show" role="alert">
                    {error}
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                  </div>
                }

                {/* <!-- Vertical Form --> */}
                <form className="row g-3" onSubmit={handleSubmit}>

                  <div className="col-12">
                    <label class="col-12 col-form-label" >Select a factory:</label>
                      <select className="form-select" onChange={e => setFId(e.target.value)}>
                        <option value={"null"} selected>Select a factory</option>
                        {factory.map(factory => (
                          <option key={factory.fId} value={factory.fId}>{factory.fId}</option>
                        ))}

                      </select>
                  </div>

                  <br />

                  <div className="col-12">
                    <label class="col-12 col-form-label" >Select a raw material:</label>

                    <select class="form-select" onChange={e => setRawMaterial(e.target.value)}>
                      <option value="null" selected>Select a material</option>
                      <option value="Fertilizer">Fertilizer</option>
                      <option value="Urea">Urea</option>
                      <option value="Coconut Husk">Coconut Husk</option>
                      <option value="Polythene">Polythene</option>
                    </select>
                  </div>

                  <br />

                  <div className="col-12">
                    <label for="noRawMaterial" className="form-label">Number of Materials used:</label>
                    <input type="text" className="form-control" id="noRawMaterial"
                      onChange={(e) => setNoOfRaws(e.target.value)} value={noOfRaws} />
                  </div>

                  <label for="inputCurrentDate" className="form-label">Date:</label>
                  <input type="Date" className="form-control" id="inputCurrentDate"
                    onChange={(e) => setCurrentDate(e.target.value)} value={currentDate} />

                  <div className="text-center">
                    <button type="reset" className="btn btn-secondary" style={{ margin: "20px" }}>Reset</button>
                    <button type="submit" className="btn btn-primary">Submit</button>
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

export default RawInsertForm 