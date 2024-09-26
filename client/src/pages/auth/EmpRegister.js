import { React, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from '../../components/dashboard/Header';
import Sidebar from '../../components/dashboard/Sidebar';
import Footer from '../../components/dashboard/Footer';
import AccessDenied from '../../components/dashboard/employeeManagement/AccessDenied';
import RegisterComponent from '../../components/auth/EmpSignupComponent';

function RegisterPage() {
    const [employee, setEmployee] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("employee");
        const initialValue = JSON.parse(saved);
        return initialValue || "";
    });
    function checkRole(){
        if(employee.role !="Admin"){
            console.log("admin not detected")
            //AccessDenidedRedirect()
            return false
        }
        return true
    }
    return (
        <div>
            <Header/>
            <Sidebar />
            {checkRole()?<RegisterComponent />:<AccessDenied/>}
          
        </div> 
    );
}

export default RegisterPage;