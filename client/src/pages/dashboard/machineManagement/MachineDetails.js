import React from 'react';

import Header from '../../../components/dashboard/Header';
import MachineDetails from '../../../components/dashboard/machineManagement/MachineDetails';
import Sidebar from '../../../components/dashboard/Sidebar';
import Footer from '../../../components/dashboard/Footer';


function MachineDetailsPage() {
    return (
        <div>
            <Header />
            <Sidebar />
            <MachineDetails />
            <Footer />
            <a href="#" 
            className="back-to-top d-flex align-items-center justify-content-center">
                <i className="bi bi-arrow-up-short"></i>
            </a>
        </div>
    );   
}

export default MachineDetailsPage;