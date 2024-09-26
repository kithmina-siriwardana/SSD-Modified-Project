import React from 'react';
import Footer from '../../../components/dashboard/Footer';
import InventoryHeader from '../../../components/dashboard/inventoryManagement/InventoryHeader';
import InventorySidebar from '../../../components/dashboard/Sidebar';
import NewOrderContent from '../../../components/dashboard/inventoryManagement/NewOrderContent';

const InventoryNewOrderPage = () => {
    return(
        <React.Fragment>
            <InventoryHeader />
            <InventorySidebar />
            <NewOrderContent />
            <Footer />
        </React.Fragment>
    )
}

export default InventoryNewOrderPage;