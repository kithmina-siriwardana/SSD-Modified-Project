import React from  'react';
import Footer from '../../../components/dashboard/Footer';
import InventoryHeader from '../../../components/dashboard/inventoryManagement/InventoryHeader';
import InventoryPendingOrders from '../../../components/dashboard/inventoryManagement/InventoryPendingOrders';
import InventorySidebar from '../../../components/dashboard/Sidebar';

const InventoryPendingOrdersPage = () => {
    return(
        <React.Fragment>
            <InventoryHeader />
            <InventorySidebar />
            <InventoryPendingOrders />
            <Footer />
        </React.Fragment>
    )
}

export default InventoryPendingOrdersPage;