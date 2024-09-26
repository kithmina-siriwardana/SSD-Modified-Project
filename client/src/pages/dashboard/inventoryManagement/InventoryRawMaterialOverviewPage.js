import React from 'react';
import Footer from '../../../components/dashboard/Footer';
import InventoryHeader from '../../../components/dashboard/inventoryManagement/InventoryHeader';
import InventorySidebar from '../../../components/dashboard/Sidebar';
import RawMaterialOverviewContent from '../../../components/dashboard/inventoryManagement/RawMaterialOverviewContent';


const InventoryRawMaterialOverviewPage = () => {
    return(
        <React.Fragment>
            <InventoryHeader />
            <InventorySidebar />
            <RawMaterialOverviewContent />
            <Footer />
        </React.Fragment>
    )
}

export default InventoryRawMaterialOverviewPage;