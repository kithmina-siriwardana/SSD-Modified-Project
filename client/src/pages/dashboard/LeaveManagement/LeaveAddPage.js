import React from 'react';

import Header from '../../../components/dashboard/Header';
import LeaveAddForm from '../../../components/dashboard/leaveManagement/LeaveAddForm';
import Sidebar from '../../../components/dashboard/Sidebar';
import Footer from '../../../components/dashboard/Footer';


function LeavesAddPage() {
    return (
        <div>
            <Header />
            <Sidebar />
            <LeaveAddForm />
            <Footer />
            <a href="#" 
            className="back-to-top d-flex align-items-center justify-content-center">
                <i className="bi bi-arrow-up-short"></i>
            </a>
        </div>
    );   
}

export default LeavesAddPage;