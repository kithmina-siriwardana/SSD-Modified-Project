import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'

const MachineStatsForm = () => {
  const [machines, setMachines] = useState([])
  const [factories, setFactories] = useState([])
  const [factoryFilter, setFactoryFilter] = useState('')
  const [machineFilter, setMachineFilter] = useState('')
  const [mId, setMId] = useState('')
  const [currentDate, setCurrentDate] = useState('')
  const [completedProducts, setCompletedProducts] = useState('')
  const [ranHrs, setRanHrs] = useState('')
  const [error, setError] = useState(null)

  const { id } = useParams()

  const [machineStats, setMachineStats] = useState(
    {
      mId: "",
      currentDate: "",
      completedProducts: "",
      ranHrs: "",
      __v: 0,
      _id: ""
    })

  useEffect(() => {
    const fetchMachine = async ({ factory }) => {
      const url = factory && factory !== "ALL" ? `/api/machine?factory=${factory}` : '/api/machine'
      const response = await fetch(url)
      const json = await response.json()

      if (response.ok) {

        setMachineStats(
          {
            mId: `${json["mId"]}`,
            currentDate: `${json["currentDate"]}`,
            completedProducts: `${json["completedProducts"]}`,
            ranHrs: `${json["ranHrs"]}`,
            __v: 0,
            _id: `${json["_id"]}`
          })
        setMId(json["mId"])
        setCurrentDate(json["currentDate"])
        setCompletedProducts(json["completedProducts"])
        setRanHrs(json["ranHrs"])
      } else {
        console.log("failed")
      }
    }

    fetchMachine()

  }, [setMachineStats])

  const fetchFactories = async () => {
    const response = await fetch( '/api/factory')
    const json = await response.json()

    if (response.ok) {
      setFactories(json)
    }
  }

  // const fetchProduct = async ({machine}) => {
  //   const url = machine && machine !== "ALL" ? `/api/machine?machine=${machine}` : '/api/machine'
  //   const response = await fetch(url)
  //   const json = await response.json()

  //   if (response.ok) {
  //     setMachines(json)
  //   }
  // }

  const fetchMachines = async ({ factory }) => {
    const url = factory && factory !== "ALL" ? `/api/machine?factory=${factory}` : '/api/machine'
    const response = await fetch(url)
    const json = await response.json()

    if (response.ok) {
      setMachines(json)
    }
  }

  useEffect(() => {
    fetchFactories()
    fetchMachines()
  }, [])

  useEffect(() => {
    fetchMachines({ factory: factoryFilter })
  }, [factoryFilter])

  // const handleSelect = (e) => {
  //   console.log(e);
  //   setProducts(e)
  // }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const machine = { mId, factories, currentDate, ranHrs, completedProducts }

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
      setFactories('')
      setCurrentDate('')
      setCompletedProducts('')
      setRanHrs('')
      setError(null)
      console.log('Record was added succefully.', json)
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
            <li className="breadcrumb-item active">Update Machine Status</li>
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
                <h5 className="card-title">Data insert Form</h5>


                {error &&
                  <div className="alert alert-danger alert-dismissible fade show" role="alert">
                    {error}
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                  </div>
                }

                {/* <!-- Vertical Form --> */}
                <form className="row g-3" onSubmit={handleSubmit}>

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

                  <div className="col-12">
                    <label class="col-12 col-form-label" >Select a Machine:</label>
                    <br />
                    <div class="col-sm-10">

                      <select className="form-select" onChange={e => setMachineFilter(e.target.value)}>
                        <option value={null} selected>Select a machine</option>
                        {machines.map(machine => (
                          <option key={machine.mId} value={machine.mId}>{machine.mId}</option>
                        ))}

                      </select>

                    </div>
                  </div>

                  <div className="col-12">
                  <label for="product" className="form-label">Product:</label>

                    {machines && machines.map((machine) => (
                      <input key={machine._id} type="text" className="form-control" id="product"
                       value={machine.product} disabled/>
                    ))}

                  </div>

                  <div className="col-12">
                    <label for="inputCurrentDate" className="form-label">Date:</label>
                    <input type="Date" className="form-control" id="inputCurrentDate"
                      onChange={(e) => setCurrentDate(e.target.value)} value={currentDate} />
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