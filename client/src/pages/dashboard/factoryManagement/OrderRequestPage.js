import React from 'react';

import Header from '../../../components/dashboard/Header';
import OrderRequest from '../../../components/dashboard/factoryManagement/OrderRequest';
import Sidebar from '../../../components/dashboard/Sidebar';
import Footer from '../../../components/dashboard/Footer';


function OrderRequestPage() {
    return (
        <div>
            <Header />
            <Sidebar />
            <OrderRequest />
            <Footer />
            <a href="#" 
            className="back-to-top d-flex align-items-center justify-content-center">
                <i className="bi bi-arrow-up-short"></i>
            </a>
        </div>
    );   
}

export default OrderRequestPage;