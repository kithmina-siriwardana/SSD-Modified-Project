import React from 'react';

import Header from '../../../components/dashboard/Header';
import Leaves from '../../../components/dashboard/leaveManagement/Leaves';
import Sidebar from '../../../components/dashboard/Sidebar';
import Footer from '../../../components/dashboard/Footer';


function LeavesPage() {
    return (
        <div>
            <Header />
            <Sidebar />
            <Leaves />
            <Footer />
            <a href="#" 
            className="back-to-top d-flex align-items-center justify-content-center">
                <i className="bi bi-arrow-up-short"></i>
            </a>
        </div>
    );   
}

export default LeavesPage;