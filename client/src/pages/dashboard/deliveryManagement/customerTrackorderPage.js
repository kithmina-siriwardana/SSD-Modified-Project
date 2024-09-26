import React from 'react';

import Header from '../../../components/HeaderHome';
import Bodycontent from '../../../components/dashboard/deliveryManagement/trackorderbody';
// import Footer from '../../../components/dashboard/Footer';



function CustomerTrackorderPage() {
    return (
        <div>
            
            <Bodycontent/>
            
            <a href="#" 
            className="back-to-top d-flex align-items-center justify-content-center">
                <i className="bi bi-arrow-up-short"></i>
            </a>
        </div>
    );   
}

export default CustomerTrackorderPage;