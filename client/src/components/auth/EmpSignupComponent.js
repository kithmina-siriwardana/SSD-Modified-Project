import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSignup } from "../../hooks/useEmpSignup";

function SignupComponent() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [dob, setDob] = useState('')
    const [role, setRole] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const {signup, error, isLoading} = useSignup()

    const handleSubmit = async(e) =>{
        e.preventDefault()
        await signup(name,dob,role,address, phone, email, password)
    }

    return (
        <div class="container">

      <section class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">


              <div class="card mb-3">

                <div class="card-body">

                  <div class="pt-4 pb-2">
                    <h5 class="card-title text-center pb-0 fs-4">Add New Employee</h5>
                  
                  </div>

                  <form onSubmit={handleSubmit} class="row g-3 needs-validation" novalidate>
				  {error && <p>*{error}</p>}
                    <div class="col-12">
                      <label for="yourName" class="form-label">Name</label>
                      <input type="text" name="name" class="form-control" id="yourName" 
					  onChange={(e) => setName(e.target.value)} value={name} />
                    </div>
					
                    <div class="col-12">
					<label for="yourDOB" class="form-label"> Date of Birth</label>
                      <input type="date" name="dob" class="form-control" id="dob" 
					  onChange={(e) => setDob(e.target.value)} value={dob} />
                    </div>
					
					<div className="col-12">
                  <label class="col-sm-2 col-form-label">Role</label>
                  <div class="col-sm-10">
                    <select class="form-select" aria-label="Default select example" onChange={(e) => setRole(e.target.value)} value={role} >
                      <option selected>select role</option>
                      <option value="Admin">Admin</option>
                      <option value="Manager">Manager</option>
                      <option value="Employee">Employee</option>
                    </select>
                  </div>
				</div>
        <div class="col-12">
                      <label for="yourName" class="form-label">Address</label>
                      <input type="text" name="name" class="form-control" id="yourName" 
					  onChange={(e) => setAddress(e.target.value)} value={address} />
                    </div>
                    <div class="col-12">
                      <label for="yourName" class="form-label">Phone</label>
                      <input type="text" name="name" class="form-control" id="yourName" 
					  onChange={(e) => setPhone(e.target.value)} value={phone} />
                    </div>
					
                    <div class="col-12">
                      <label for="yourEmail" class="form-label">Email</label>
                      <input type="email" name="email" class="form-control" id="yourEmail" 
					  onChange={(e) => setEmail(e.target.value)} value={email}/>
                      <div class="invalid-feedback">Please enter a valid Email adddress!</div>
                    </div>

                    

                    <div class="col-12">
                      <label for="yourPassword" class="form-label">Password</label>
                      <input type="password" name="password" class="form-control" id="yourPassword" 
					  onChange={(e) => setPassword(e.target.value)} value={password} />
                      <div class="invalid-feedback">Please enter your password!</div>
                    </div>

                    <div class="col-12">
                      <button disabled={isLoading} class="btn btn-primary w-100" type="submit">ADD</button>
                    </div>
                    
                  </form>

                </div>
              </div>

       

            </div>
          </div>
        </div>

      </section>

    </div>
    )
}

export default SignupComponent;