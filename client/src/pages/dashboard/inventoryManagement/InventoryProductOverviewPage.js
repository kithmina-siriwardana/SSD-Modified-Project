import React from 'react';
import InventoryHeader from '../../../components/dashboard/inventoryManagement/InventoryHeader';
import InventorySidebar from '../../../components/dashboard/Sidebar';
import Footer from '../../../components/dashboard/Footer';
import ProductOverviewContent from '../../../components/dashboard/inventoryManagement/ProductOverviewContent';

const InventoryProductOverviewPage = () => {
    return(
        <React.Fragment>
            <InventoryHeader />
            <InventorySidebar />
            <ProductOverviewContent />
            <Footer />
        </React.Fragment>
    )
}

export default InventoryProductOverviewPage;