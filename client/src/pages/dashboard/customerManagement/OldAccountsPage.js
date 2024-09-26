import React from 'react';

import Header from '../../../components/dashboard/Header';
import OldAccountsComponent from '../../../components/dashboard/customerManagement/OldAccountsComponent'
import Sidebar from '../../../components/dashboard/Sidebar';
import Footer from '../../../components/dashboard/Footer';


function CustomersPage() {
    return (
        <div>
            <Header />
            <Sidebar />
            <OldAccountsComponent />
            <Footer />
            <a href="#" 
            className="back-to-top d-flex align-items-center justify-content-center">
                <i className="bi bi-arrow-up-short"></i>
            </a>
        </div>
    );   
}

export default CustomersPage;