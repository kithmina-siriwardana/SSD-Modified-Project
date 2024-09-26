import React from 'react';
import Header from '../../../components/Header';
import CusEbill from '../../../components/dashboard/transactionManagement/cusEbill';
import Footer from '../../../components/Footer';
import Breadcrumb from '../../../components/Breadcrumb';

function customerEbill() {
    return (
        <div>
            <Header/>
            <Breadcrumb/>
            <CusEbill />
            <Footer /> 
            <a href="#" 
            className="back-to-top d-flex align-items-center justify-content-center">
                <i className="bi bi-arrow-up-short"></i>
            </a>
        </div>
    );   
}

export default customerEbill;