import { useState, useEffect } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const RawInsertForm = () => {

  //* Modal Popup
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false)
  };

  const handleShow = () => setShow(true);

  const [factory, setFactory] = useState([])
  const [rawMaterialName, setRawMaterialName] = useState([])

  const [fId, setFId] = useState('')
  const [rawMaterial, setRawMaterial] = useState('')
  const [currentDate, setCurrentDate] = useState('')
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
      handleShow()
    }
  }

  const fetchFactories = async () => {
    const response = await fetch('/api/factory')
    const json = await response.json()

    if (response.ok) {
      setFactory(json)
    }
  }

  const fetchRawMaterial = async () => {
    const response = await fetch('/api/inventoryRawMaterials')
    const json = await response.json()

    if (response.ok) {
      setRawMaterialName(json)
    }
  }

  useEffect(() => {
    fetchFactories()
    fetchRawMaterial()
  }, [])

  return (
    <main id="main" className="main">

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} centered>
        <Modal.Header closeButton>
          <Modal.Title>Data inserted Successfully</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="primary" onClick={() => { window.location.reload() }}>
            Okay
          </Button>
          
        </Modal.Footer>
      </Modal>

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

                      {rawMaterialName.map(rawMaterial => (
                        <option key={rawMaterial.raw_material_name} value={rawMaterial.raw_material_name}>{rawMaterial.raw_material_name}</option>
                      ))}

                      

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