import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AuthContextProvider } from "./context/AuthContext";
import { EmployeeAuthContextProvider } from "./context/EmpAuthContext";
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById("root"));
const clientId = '290106904765-vke1mpl5c8ui4iushpte4f6ft5oe4drf.apps.googleusercontent.com';
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <EmployeeAuthContextProvider>
        <GoogleOAuthProvider clientId={clientId}>
          <App />
        </GoogleOAuthProvider>
      </EmployeeAuthContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
