import React from  'react';
import Footer from '../../../components/dashboard/Footer';
import InventoryHeader from '../../../components/dashboard/inventoryManagement/InventoryHeader';
import InventoryPastOrders from '../../../components/dashboard/inventoryManagement/InventoryPastOrders';
import InventorySidebar from '../../../components/dashboard/Sidebar';

const InventoryPastOrdersPage = () => {
    return(
        <React.Fragment>
            <InventoryHeader />
            <InventorySidebar />
            <InventoryPastOrders />
            <Footer />
        </React.Fragment>
    )
}

export default InventoryPastOrdersPage;