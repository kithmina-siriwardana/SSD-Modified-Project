import React from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Breadcrumb from '../../../components/Breadcrumb';
import ShoppingCart from '../../../components/dashboard/orderManagement/ShoppingCart';



function ShoppingCartPage() {
    return (
        <div>
            <Header />
            <Breadcrumb/>
            <ShoppingCart />
            <Footer />
           
            <a href="#" 
            className="back-to-top d-flex align-items-center justify-content-center">
                <i className="bi bi-arrow-up-short"></i>
            </a>
        </div>
    ); 




    
}

export default ShoppingCartPage;
