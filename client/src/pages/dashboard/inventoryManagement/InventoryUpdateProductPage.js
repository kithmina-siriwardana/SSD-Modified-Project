import React from "react";
import UpdateProductContent from "../../../components/dashboard/inventoryManagement/UpdateProductContent";
import InventoryHeader from "../../../components/dashboard/inventoryManagement/InventoryHeader";
import InventorySideBar from "../../../components/dashboard/inventoryManagement/InventorySidebar";
import Footer from "../../../components/dashboard/Footer";


const InventoryUpdateProductPage = () => {
    return(
        <React.Fragment>
            <InventoryHeader />
            <InventorySideBar />
            <UpdateProductContent />
            <Footer />
        </React.Fragment>
    )
}

export default InventoryUpdateProductPage;