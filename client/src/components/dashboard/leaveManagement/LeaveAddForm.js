import { useState } from "react";
import { useNavigate } from 'react-router-dom'

const LeaveAddForm = () => {
  const [description, setDescription] = useState('')
  const navigate = useNavigate();
  const [empName, setEmpName] = useState('')
  const [empID, setEmpID] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [type, setType] = useState('')
  const [error, setError] = useState(null)
  const[err,setErr]= useState(false)
//Form sumbit event
  const handleSubmit = async (e) => {
    e.preventDefault()

    const leave = { empID,empName,description, startDate,endDate, type }

    const response = await fetch('/api/leaves', {
      method: 'POST',
      body: JSON.stringify(leave),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
    }
    if(description.length==0|| startDate.length==0 || endDate.length==0 || type.length==0){
      setErr(true)
    }

    if (response.ok) {
      setEmpID('')
      setEmpName('')
      setDescription('')
      setDescription('')
      setStartDate('')
      setEndDate('')
      setType('')
      setError(null)
      console.log('new leave added', json)
      alert('Sucssesfully created')
      navigate("/leaves");
     
    }
  }

  return (
    <main id="main" className="main">

      <div className="pagetitle">
        <h1>Apply for Leave</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
            <li className="breadcrumb-item">Leaves</li>
            <li className="breadcrumb-item active">Apply for Leave</li>
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
                <h5 className="card-title">Apply Leave Form</h5>


                {error &&
                  <div className="alert alert-danger alert-dismissible fade show" role="alert">
                    {error}
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                  </div>
                }




                {/* <!-- Vertical Form --> */}
              
                <form className="row g-3" onSubmit={handleSubmit}>
                  <div className="col-12">
                    <label for="inputName" className="form-label">Description</label>
                    <input type="text" className="form-control" id="inputName"
                      onChange={(e) => setDescription(e.target.value)} value={description} />
                      {err&&description.length<=0?
                      <div style={{color:'red'}}><b>*Can't keep empty*</b></div>:""}
                  </div>
                  <div className="col-12">
                    <label for="inputName" className="form-label">Start Date</label>
                    <input type="date" className="form-control" id="inputName"
                      onChange={(e) => setStartDate(e.target.value)} value={startDate} />
                      {err&&startDate.length<=0?
                      <div style={{color:'red'}} ><b>*Can't keep empty*</b></div>:""}
                  </div>
                  <div className="col-12">
                    <label for="inputName" className="form-label">End Date</label>
                    <input type="date" className="form-control" id="inputName"
                      onChange={(e) => setEndDate(e.target.value)} value={endDate} />
                      {err&&endDate.length<=0?
                      <div style={{color:'red'}} ><b>*Can't keep empty*</b></div>:""}
                  </div>
                  <div className="col-12">
                    <label for="inputEmail" className="form-label">Type</label>
                    <input type="text" className="form-control" id="inputleave"
                      onChange={(e) => setType(e.target.value)} value={type} />
                      {err&&type.length<=0?
                      <div style={{color:'red'}} ><b>*Can't keep empty*</b></div>:""}
                  </div>
                  <div className="text-center">
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

export default LeaveAddForm 