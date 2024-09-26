import React from 'react';

import Header from '../../../components/dashboard/Header';
import Sidebar from '../../../components/dashboard/Sidebar';
import Footer from '../../../components/dashboard/Footer';
import Reports from '../../../components/dashboard/machineManagement/Reports';

function ReportsPage() {
    return (
        <div>
            <Header />
            <Sidebar />
            <Reports />
            <Footer />
            <a href="#"
                className="back-to-top d-flex align-items-center justify-content-center">
                <i className="bi bi-arrow-up-short"></i>
            </a>
        </div>
    );
}

export default ReportsPage;