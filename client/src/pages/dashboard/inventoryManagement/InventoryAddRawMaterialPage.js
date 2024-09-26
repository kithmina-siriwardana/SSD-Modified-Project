import React from 'react';
import Footer from '../../../components/dashboard/Footer';
import InventoryHeader from '../../../components/dashboard/inventoryManagement/InventoryHeader';
import InventorySidebar from '../../../components/dashboard/Sidebar';
import NewRawMaterialContent from '../../../components/dashboard/inventoryManagement/NewRawMaterialContent';

const InventoryAddRawMaterialPage = () => {
    return(
        <React.Fragment>
            <InventoryHeader />
            <InventorySidebar />
            <NewRawMaterialContent />
            <Footer />
            <a href="#" 
            className="back-to-top d-flex align-items-center justify-content-center">
                <i className="bi bi-arrow-up-short"></i>
            </a>
        </React.Fragment>
    );
}

export default InventoryAddRawMaterialPage;