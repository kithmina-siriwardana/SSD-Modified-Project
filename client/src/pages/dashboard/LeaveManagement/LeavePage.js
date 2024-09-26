import React from 'react';

import Header from '../../../components/dashboard/Header';
import Leave from '../../../components/dashboard/leaveManagement/Leave';
import Sidebar from '../../../components/dashboard/Sidebar';
import Footer from '../../../components/dashboard/Footer';


function LeavePage() {
    return (
        <div>
            <Header />
            <Sidebar />
            <Leave />
            <Footer />
            <a href="#" 
            className="back-to-top d-flex align-items-center justify-content-center">
                <i className="bi bi-arrow-up-short"></i>
            </a>
        </div>
    );   
}

export default LeavePage;