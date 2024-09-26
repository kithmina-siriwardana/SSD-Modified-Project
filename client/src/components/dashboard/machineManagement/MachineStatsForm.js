import { useState, useEffect } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const MachineStatsForm = () => {

  //* Modal Popup
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false)
  };

  const handleShow = () => setShow(true);


  const [factoryFilter, setFactoryFilter] = useState('')
  const [factories, setFactories] = useState([])
  const [machines, setMachines] = useState([])

  const [mId, setMId] = useState('')
  const [currentDate, setCurrentDate] = useState('')
  const [product, setProduct] = useState('')
  const [completedProducts, setCompletedProducts] = useState('')
  const [ranHrs, setRanHrs] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const machineStats = { mId, currentDate, product, completedProducts, ranHrs }
    console.log(mId, currentDate, product, completedProducts, ranHrs)

    const response = await fetch('/api/machineStats', {
      method: 'POST',
      body: JSON.stringify(machineStats),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
    }

    if (response.ok) {
      setMId('')
      setCurrentDate('')
      setProduct('')
      setCompletedProducts('')
      setRanHrs('')
      setError(null)
      console.log('New products updated succefully.', json)
      handleShow() 
    }

    // if (handleShow()) {
    //   window.location.reload();
    // }
  }

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
    if (mId && machines) {
      const currentMachine = machines.find(i => i.mId === mId)
      setProduct(currentMachine.product)
    }
  }, [mId])

  useEffect(() => {
    fetchFactories()
    fetchMachines()
  }, [])

  useEffect(() => {
    fetchMachines({ factory: factoryFilter })
  }, [factoryFilter])

  return (
    <main id="main" className="main">

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} centered>
        <Modal.Header closeButton>
          <Modal.Title>Data inserted Successfully</Modal.Title>
        </Modal.Header>
        {/* <Modal.Body>Are you sure want to set this order as Completed?</Modal.Body> */}
        <Modal.Footer>
          <Button variant="primary" onClick={() => {window.location.reload()}}>
            Okay
          </Button>
          {/* <Button variant="danger" onClick={(handleClose)}>
            No
          </Button> */}
        </Modal.Footer>
      </Modal>

      <div className="pagetitle">
        <h1>Factory Management</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
            <li className="breadcrumb-item">Machine</li>
            <li className="breadcrumb-item active">Machine Stats</li>
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
                <h5 className="card-title">Machine Status Insert Form</h5>

                {error &&
                  <div className="alert alert-danger alert-dismissible fade show" role="alert">
                    {error}
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                  </div>
                }

                {/* <!-- Vertical Form --> */}
                <form className="row g-3" onSubmit={handleSubmit}>

                  {/* SELECT FACTORY */}
                  <div className="col-12">
                    <label class="col-12 col-form-label" >Select a Factory:</label>

                    <div class="col-sm-10">

                      <select className="form-select" onChange={e => setFactoryFilter(e.target.value)}>
                        <option value={null} selected>Select a factory</option>
                        {factories.map(factory => (
                          <option key={factory.fId} value={factory.fId}>{factory.fId}</option>
                        ))}

                      </select>

                    </div>
                  </div>

                  <br />

                  {/* SELECT MACHINE */}
                  <div className="col-12">
                    <label class="col-12 col-form-label" >Select a Machine:</label>
                    <br />
                    <div class="col-sm-10">

                      <select className="form-select" onChange={e => setMId(e.target.value)}>
                        <option value={null} selected>Select a machine</option>
                        {machines.map(machine => (
                          <option key={machine.mId} value={machine.mId}>{machine.mId}</option>
                        ))}

                      </select>

                    </div>
                  </div>
                  <br />

                  {/* SELECT PRODUCT */}
                  <div className="col-12">
                    <label for="product" className="form-label">Product:</label>

                    {machines && product && <input type="text" disabled className="form-control" id="product"
                      value={product} />}

                  </div>


                  <div className="col-12">
                    <label for="ranHrs" className="form-label">Ran Hours for the Day:</label>
                    <input type="text" className="form-control" id="ranHrs"
                      onChange={(e) => setRanHrs(e.target.value)} value={ranHrs} />
                  </div>

                  <div className="col-12">
                    <label for="completedProducts" className="form-label">Number of Products Completed:</label>
                    <input type="text" className="form-control" id="completedProducts"
                      onChange={(e) => setCompletedProducts(e.target.value)} value={completedProducts} />
                  </div>

                  <div className="col-12">
                    <label for="inputCurrentDate" className="form-label">Date:</label>
                    <input type="Date" className="form-control" id="inputCurrentDate"
                      onChange={(e) => setCurrentDate(e.target.value)} value={currentDate} />
                  </div>

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

export default MachineStatsForm 