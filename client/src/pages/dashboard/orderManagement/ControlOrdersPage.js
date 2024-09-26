import React from 'react';
import { useEffect, useState } from 'react'

import Header from '../../../components/dashboard/Header';

import Sidebar from '../../../components/dashboard/Sidebar';
import Footer from '../../../components/dashboard/Footer';
import OrderDetails from '../../../components/dashboard/orderManagement/OrdersDetails';




function ControlOrdersPage(){
    

      

    return(
        <div>
            
            
            <Header />
           
            <Sidebar />
            <OrderDetails />
            
            
            
            <Footer />
            
            <a href="#"
            className="back-to-top d-flex align-items-center justify-content-center">
            <i className="bi bi-arrow-up-short"></i>
        </a>
    </div>
);   
}

export default ControlOrdersPage;