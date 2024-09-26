import {React, useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import {useLogin} from '../../hooks/useEmpLogin'

function LoginComponent() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {login, error, isLoading} = useLogin()

    const handleSubmit = async(e) =>{
        e.preventDefault()
        await login(email, password)
    }

    return (
        <main>
    <div class="container">

      <section class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

              <div class="d-flex justify-content-center py-4">
                <a href="index.html" class="logo d-flex align-items-center w-auto">
                  <img src="assets/img/logo.png" alt=""/>
                  <span class="d-none d-lg-block">JIFFY</span>
                </a>
              </div>

              <div class="card mb-3">

                <div class="card-body">

                  <div class="pt-4 pb-2">
                    <h5 class="card-title text-center pb-0 fs-4">Login to Your Account</h5>
                    <p class="text-center small">Enter your username & password to login</p>
                  </div>

                  <form onSubmit={handleSubmit} class="row g-3 needs-validation" novalidate >
                  {error && <p>*{error}</p>}
                    <div class="col-12">
                      <label for="yourUsername" class="form-label">Username</label>
                      <div class="input-group has-validation">
                        <span class="input-group-text" id="inputGroupPrepend">@</span>
                        <input type="text" name="username" class="form-control" id="yourUsername" required value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        <div class="invalid-feedback">Please enter your username.</div>
                      </div>
                    </div>

                    <div class="col-12">
                      <label for="yourPassword" class="form-label">Password</label>
                      <input type="password" name="password" class="form-control" id="yourPassword" required value={password} onChange={(e)=>setPassword(e.target.value)}/>
                      <div class="invalid-feedback">Please enter your password!</div>
                    </div>

                    <div class="col-12">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="remember" value="true" id="rememberMe"/>
                        <label class="form-check-label" for="rememberMe">Remember me</label>
                      </div>
                    </div>
                    <div class="col-12">
                      <button  disabled={isLoading} class="btn btn-primary w-100" type="submit">Login</button>
                    </div>
                    <div class="col-12">
                      <p class="small mb-0">Don't have account?
                      <Link reloadDocument to="/signup"><a >Create an account</a></Link></p>
                    </div>
                  </form>

                </div>
              </div>

           

            </div>
          </div>
        </div>

      </section>

    </div>
  </main>
  )
}

export default LoginComponent;