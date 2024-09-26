import React from 'react';

import InventoryHeader from '../../../components/dashboard/inventoryManagement/InventoryHeader';
import InventorySidebar from '../../../components/dashboard/Sidebar';
import Footer from '../../../components/dashboard/Footer';

import DashboardTopContent from '../../../components/dashboard/inventoryManagement/DashboardTopContent';

const InventoryHomePage = () => {
    return(
        <React.Fragment>
            <InventoryHeader />
            <InventorySidebar />

            <DashboardTopContent />
    
            <Footer />
        </React.Fragment>
    )
}

export default InventoryHomePage;