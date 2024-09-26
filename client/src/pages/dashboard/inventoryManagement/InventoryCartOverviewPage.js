import React from 'react';
import Footer from '../../../components/dashboard/Footer';
import InventoryCartContent from '../../../components/dashboard/inventoryManagement/InventoryCartContent';
import InventoryHeader from '../../../components/dashboard/inventoryManagement/InventoryHeader';
import InventorySidebar from '../../../components/dashboard/Sidebar';


const InventoryCartOverviewPage = () => {
    return(
        <React.Fragment>
            <InventoryHeader />
            <InventorySidebar />
            <InventoryCartContent />
            <Footer />
        </React.Fragment>
    );
}

export default InventoryCartOverviewPage;