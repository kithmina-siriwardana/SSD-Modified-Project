import React from 'react';


import AddCustomerPaymentMethod from '../../../components/dashboard/transactionManagement/AddCustomerPaymentMethod';


import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Breadcrumb from '../../../components/Breadcrumb'

function AddCustomerPayment() {


    
    return (
        <div>
            <Header />
            <Breadcrumb/>
            <AddCustomerPaymentMethod />
            <Footer />
           
            <a href="#" 
            className="back-to-top d-flex align-items-center justify-content-center">
                <i className="bi bi-arrow-up-short"></i>
            </a>
        </div>
    );   
}

export default AddCustomerPayment;