import { React, useState } from "react";
import { Link } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin";
import { GoogleLogin } from "@react-oauth/google"; // Import Google OAuth component
import { jwtDecode } from "jwt-decode"; // For decoding the JWT token

function LoginComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();

  // Handle email/password login
  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  // Handle Google OAuth success
  const handleGoogleSuccess = (credentialResponse) => {
    const token = credentialResponse.credential;
    const userInfo = jwtDecode(token); // Decode JWT to get user info
    const { email, name } = userInfo;

    // Send token to backend for verification or account creation
    fetch("http://localhost:5050/api/users/auth/google/callback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token }),
    })
      .then((res) => res.json())
      .then((data) => {
        // Store the returned token/user data (you might store token in localStorage)
        localStorage.setItem("user", JSON.stringify(data));
        // Navigate user to account page
        window.location.href = "/account";
      })
      .catch((err) => console.error("Google login error:", err));
  };

  // Handle Google OAuth failure
  const handleGoogleError = (error) => {
    console.log("Google Sign-In Error:", error);
  };

  return (
    <div className="ltn__login-area pb-65">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title-area text-center">
              <h1 className="section-title">
                Sign In <br />
                To Your Account
              </h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="account-login-inner">
              <form
                onSubmit={handleSubmit}
                className="ltn__form-box contact-form-box"
              >
                {error && <p style={{ color: "red" }}>*{error}</p>}
                <input
                  type="text"
                  name="email"
                  placeholder="Email*"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password*"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="btn-wrapper mt-0">
                  <button
                    disabled={isLoading}
                    className="theme-btn-1 btn btn-block"
                    type="submit"
                  >
                    SIGN IN
                  </button>
                </div>
              </form>
              <div className="btn-wrapper mt-10">
                {/* Google Login Button */}
                <GoogleLogin
                  onSuccess={handleGoogleSuccess}
                  onError={handleGoogleError}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="account-create text-center pt-50">
              <h4>DON'T HAVE AN ACCOUNT?</h4>
              <div className="btn-wrapper">
                <Link reloadDocument to="/signup">
                  <a className="theme-btn-1 btn black-btn">CREATE ACCOUNT</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginComponent;
