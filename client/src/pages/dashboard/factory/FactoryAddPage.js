import React from 'react';

import Header from '../../../components/dashboard/Header';
import FactoryAddForm from '../../../components/dashboard/factory/FactoryAddForm';
import Sidebar from '../../../components/dashboard/Sidebar';
import Footer from '../../../components/dashboard/Footer';


function FactoryPage() {
    return (
        <div>
            <Header />
            <Sidebar />
            <FactoryAddForm />
            <Footer />
            <a href="#" 
            className="back-to-top d-flex align-items-center justify-content-center">
                <i className="bi bi-arrow-up-short"></i>
            </a>
        </div>
    );   
}

export default FactoryPage;