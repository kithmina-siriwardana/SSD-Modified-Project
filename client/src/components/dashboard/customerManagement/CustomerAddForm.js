import { useState } from "react";

const CustomerAddForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const user = { name, email, address, phone, password }

    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
    }

    if (response.ok) {
      setName('')
      setEmail('')
      setAddress('')
      setPhone('')
      setPassword('')
      setError(null)
      console.log('new user added', json)
    }
  }

  return (
    <main id="main" className="main">

      <div className="pagetitle">
        <h1>Add New Customer</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">Home</li>
            <li className="breadcrumb-item active">Add New Customer</li>
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
                <h5 className="card-title">Add New Customer</h5>


                {error &&
                  <div className="alert alert-danger alert-dismissible fade show" role="alert">
                    {error}
                    <button type="button" className="btn" data-bs-dismiss="alert" aria-label="Close"></button>
                  </div>
                }

                {/* <!-- Vertical Form --> */}
                <form className="row g-3" onSubmit={handleSubmit}>
                  <div className="col-12">
                    <label for="inputName" className="form-label">Name</label>
                    <input type="text" className="form-control" id="inputName"
                      onChange={(e) => setName(e.target.value)} value={name} />
                  </div>
                  <div className="col-12">
                    <label for="inputEmail" className="form-label">Email</label>
                    <input type="email" className="form-control" id="inputEmail"
                      onChange={(e) => setEmail(e.target.value)} value={email} />
                  </div>
                  <div className="col-12">
                    <label for="inputPhone" className="form-label">Phone</label>
                    <input type="text" className="form-control" id="inputPhone"
                      onChange={(e) => setPhone(e.target.value)} value={phone} />
                  </div>
                  <div className="col-12">
                    <label for="inputAddress" className="form-label">Address</label>
                    <input type="text" className="form-control" id="inputAddress"
                      onChange={(e) => setAddress(e.target.value)} value={address} />
                  </div>
                  <div className="col-12">
                    <label for="inputPassword" className="form-label">Password</label>
                    <input type="password" className="form-control" id="inputPassword"
                      onChange={(e) => setPassword(e.target.value)} value={password} />
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn btn-primary">Add Customer</button>
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

export default CustomerAddForm 