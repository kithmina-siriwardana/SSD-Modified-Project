import React from 'react';

import Header from '../../../components/dashboard/Header';
import FinancialOverview from '../../../components/dashboard/transactionManagement/financialOverview';
import Sidebar from '../../../components/dashboard/Sidebar';
import Footer from '../../../components/dashboard/Footer';


function supplierPayment() {
    return (
        <div>
            <Header />
            <Sidebar />
            <main className="main" id="main">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                    <li class="breadcrumb-item">Financial Management</li>
                    <li class="breadcrumb-item">Order</li>
                </ol>
           <FinancialOverview/>
           </main>
            <Footer />
            <a href="#" 
            className="back-to-top d-flex align-items-center justify-content-center">
                <i className="bi bi-arrow-up-short"></i>
            </a>
        </div>
    );   
}

export default supplierPayment;