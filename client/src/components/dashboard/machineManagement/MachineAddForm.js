import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

const MachineAddForm = () => {
  const [factories, setFactories] = useState([])
  const [productName, setProductName] = useState([])

  const navigate = useNavigate();
  const [mId, setMId] = useState('')
  const [mName, setMName] = useState('')
  const [maxRunningHrs, setMaxRunningHrs] = useState('')
  const [product, setProducts] = useState('Pots')
  const [mFactory, setMFactory] = useState('')
  const [installedDate, setInstalledDate] = useState('')
  const [error, setError] = useState(null)

  const fetchFactories = async () => {
    const response = await fetch('/api/factory')
    const json = await response.json()

    if (response.ok) {
      setFactories(json)
    }
  }

  const fetchProducts = async () => {
    const response = await fetch('/api/inventoryProducts')
    const json = await response.json()

    if (response.ok) {
      setProductName(json)
    }
  }

  useEffect(() => {
    fetchFactories()
    fetchProducts()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const machine = { mId, mName, maxRunningHrs, product, mFactory, installedDate }

    const response = await fetch('/api/machine', {
      method: 'POST',
      body: JSON.stringify(machine),
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
      setMName('')
      setMaxRunningHrs('')
      setProducts('')
      setMFactory('')
      setInstalledDate('')
      setError(null)
      console.log('New Machine was added succefully.', json)
      navigate("/view-machine");
    }
  }

  return (
    <main id="main" className="main">

      <div className="pagetitle">
        <h1>Machine Management</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
            <li className="breadcrumb-item">Machine</li>
            <li className="breadcrumb-item active">Add Machine</li>
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
                <h5 className="card-title">Machine Insert Form</h5>

                {error &&
                  <div className="alert alert-danger alert-dismissible fade show" role="alert">
                    {error}
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                  </div>
                }

                {/* <!-- Vertical Form --> */}
                <form className="row g-3" onSubmit={handleSubmit}>

                  <div class="col-12">
                    <label class="col-12 col-form-label" >Select a factory:</label>
                    <br />

                    <select className="form-select" onChange={e => setMFactory(e.target.value)}>
                      <option value={"null"} selected>Select a factory</option>
                      {factories.map(factory => (
                        <option key={factory.fId} value={factory.fId}>{factory.fId}</option>
                      ))}

                    </select>

                  </div>

                  <div className="col-12">
                    <label for="inputMID" className="form-label">Machine ID:</label>
                    <input type="text" className="form-control" id="inputMID"
                      onChange={(e) => setMId(e.target.value)} value={mId} />
                  </div>

                  <div className="col-12">
                    <label for="inputMaxRunningHrs" className="form-label">Maximum Running Hours per week:</label>
                    <input type="Number" className="form-control" id="inputMaxRunningHrs"
                      onChange={(e) => setMaxRunningHrs(e.target.value)} value={maxRunningHrs} />
                  </div>

                  <div className="col-12">
                    <div className="input-group mb-3">

                      <label class="col-12 col-form-label" >Product Created using the Machine:</label>
                      <br />

                      <select className="form-select" onChange={e => setProducts(e.target.value)}>
                        {/* <option value="Jiffy Pots" selected>Jiffy Pots</option>
                        <option value="Jiffy Growbags">Jiffy Growbags</option>
                        <option value="Jiffy Growblocks">Jiffy Growblocks</option>
                        <option value="Jiffy Pallets">Jiffy Pallets</option>
                        <option value="Jiffy Performa">Jiffy Performa</option>
                        <option value="Jiffy Substrates">Jiffy Substrates</option> */}

                        <option value={"null"} selected>Select a product</option>
                        {productName.map(product => (
                          <option key={product.product_name} value={product.product_name}>{product.product_name}</option>
                        ))}

                      </select>

                    </div>
                  </div>
 
                  <div className="col-12">
                    <label for="inputInstalledDate" className="form-label">Installed Date:</label>
                    <input type="Date" className="form-control" id="inputInstalledDate"
                      onChange={(e) => setInstalledDate(e.target.value)} value={installedDate} />
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

export default MachineAddForm 