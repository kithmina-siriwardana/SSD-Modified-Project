import React from 'react';
import {useNavigate } from 'react-router-dom';
import { useState } from 'react'


import Header from '../../../components/dashboard/Header';
import EmployeeList from '../../../components/dashboard/employeeManagement/EmployeeList';
import Sidebar from '../../../components/dashboard/Sidebar';
import Footer from '../../../components/dashboard/Footer';
import AccessDenied from '../../../components/dashboard/employeeManagement/AccessDenied';


function CustomersPage() {
    
    const navigate = useNavigate()

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
            <Header />
            <Sidebar />
            {checkRole()?<EmployeeList />:<AccessDenied/>}
            <Footer />
            <a href="#" 
            className="back-to-top d-flex align-items-center justify-content-center">
                <i className="bi bi-arrow-up-short"></i>
            </a>
        </div>
    );   
}

export default CustomersPage;