import React from 'react';

import Header from '../../../components/dashboard/Header';
import AccessDenied from '../../../components/dashboard/employeeManagement/AccessDenied';
import Sidebar from '../../../components/dashboard/Sidebar';
 import Footer from '../../../components/dashboard/Footer';


function AccessDenidedPage() {
    return (
        <div>
            <Header />
            <Sidebar />
            <AccessDenied/>
            <Footer />
            <a href="#" 
            className="back-to-top d-flex align-items-center justify-content-center">
                <i className="bi bi-arrow-up-short"></i>
            </a>
            

        </div>
    );   
}

export default AccessDenidedPage;