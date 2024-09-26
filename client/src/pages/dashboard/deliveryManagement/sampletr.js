import React from 'react';

import Header from '../../../components/Header';
import Breadcrumb from '../../../components/Breadcrumb';
import Footer from '../../../components/Footer';
import Trackbodysample from '../../../components/dashboard/deliveryManagement/trcakbodysample';





function Sampletr() {
    return (
        <div>
            <Header/>
            <Breadcrumb/>
            <Trackbodysample/>
            <Footer/>
            <a href="#" 
            className="back-to-top d-flex align-items-center justify-content-center">
                <i className="bi bi-arrow-up-short"></i>
            </a>
        </div>
    );   
}

export default Sampletr;