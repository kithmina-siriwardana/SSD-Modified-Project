import React from 'react';

import Header from '../../../components/dashboard/Header';
import MachineStatsForm from '../../../components/dashboard/machine/MachineStatsForm';
import Sidebar from '../../../components/dashboard/Sidebar';
import Footer from '../../../components/dashboard/Footer';

function MachineStatsPage() {
    return (
        <div>
            <Header />
            <Sidebar />
            <MachineStatsForm />
            <Footer />
            <a href="#" 
            className="back-to-top d-flex align-items-center justify-content-center">
                <i className="bi bi-arrow-up-short"></i>
            </a>
        </div>
    );   
}

export default MachineStatsPage;