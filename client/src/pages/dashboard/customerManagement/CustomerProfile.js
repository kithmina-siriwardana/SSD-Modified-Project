import React from 'react';

import Header from '../../../components/dashboard/Header';
import CustomerProfile from '../../../components/dashboard/customerManagement/CustomerProfile';
import Sidebar from '../../../components/dashboard/Sidebar';
import Footer from '../../../components/dashboard/Footer';


function CustomerProfilePage() {
    return (
        <div>
            <Header />
            <Sidebar />
            <CustomerProfile />
            <Footer />
            <a href="#" 
            className="back-to-top d-flex align-items-center justify-content-center">
                <i className="bi bi-arrow-up-short"></i>
            </a>
        </div>
    );   
}

export default CustomerProfilePage;