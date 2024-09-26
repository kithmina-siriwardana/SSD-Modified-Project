import React from 'react';
import Breadcrumb from '../../../components/Breadcrumb';
import CustomerProductOverviewContent from '../../../components/dashboard/inventoryManagement/CustomerProductOverviewContent';
import Footer from '../../../components/Footer';

const CustomerProductOverviewPage = () => {
    return(
        <React.Fragment>
            <Breadcrumb />
            <CustomerProductOverviewContent />
            <Footer />
            <a href="#" 
            className="back-to-top d-flex align-items-center justify-content-center">
                <i className="bi bi-arrow-up-short"></i>
            </a>
        </React.Fragment>
    )
}

export default CustomerProductOverviewPage;