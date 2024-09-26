import React from 'react';

import Header from '../../../components/dashboard/Header';
import RawInsertForm from '../../../components/dashboard/factory/RawInsertForm';
import Sidebar from '../../../components/dashboard/Sidebar';
import Footer from '../../../components/dashboard/Footer';

function RawInsert() {
    return (
        <div>
            <Header />
            <Sidebar />
            <RawInsertForm />
            <Footer />
            <a href="#" 
            className="back-to-top d-flex align-items-center justify-content-center">
                <i className="bi bi-arrow-up-short"></i>
            </a>
        </div>
    );   
}

export default RawInsert;