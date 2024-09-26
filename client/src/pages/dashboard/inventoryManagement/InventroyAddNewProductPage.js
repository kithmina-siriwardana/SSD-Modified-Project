import React from 'react';
import InventoryHeader from '../../../components/dashboard/inventoryManagement/InventoryHeader';
import InventorySidebar from '../../../components/dashboard/inventoryManagement/InventorySidebar';
import Footer from '../../../components/dashboard/Footer';
import NewProductContent from '../../../components/dashboard/inventoryManagement/NewProductContent';

const InventoryAddNewProductPage = () => {
    return(
        <React.Fragment>
            <InventoryHeader />
            <InventorySidebar />
            <NewProductContent />
            <Footer />
        </React.Fragment>
    )
}

export default InventoryAddNewProductPage;