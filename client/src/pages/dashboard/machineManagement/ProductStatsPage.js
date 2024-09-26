import React from 'react';

import Header from '../../../components/dashboard/Header';
import ProductStats from '../../../components/dashboard/machineManagement/ProductStats';
import Sidebar from '../../../components/dashboard/Sidebar';
import Footer from '../../../components/dashboard/Footer';

function ProductStatsPage() {
    return (
        <div>
            <Header />
            <Sidebar />
            <ProductStats />
            <Footer />
            <a href="#" 
            className="back-to-top d-flex align-items-center justify-content-center">
                <i className="bi bi-arrow-up-short"></i>
            </a>
        </div>
    );   
}

export default ProductStatsPage;