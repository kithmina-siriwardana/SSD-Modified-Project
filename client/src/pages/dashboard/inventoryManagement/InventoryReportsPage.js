import React from "react";
import Footer from "../../../components/dashboard/Footer";
import InventoryHeader from "../../../components/dashboard/inventoryManagement/InventoryHeader";
import InventoryReports from "../../../components/dashboard/inventoryManagement/InventoryReports";
import InventorySidebar from "../../../components/dashboard/Sidebar";

const InventoryReportsPage = () => {
    return(
        <React.Fragment>
            <InventoryHeader />
            <InventorySidebar />
            <InventoryReports />
            <Footer />
        </React.Fragment>
    )
}

export default InventoryReportsPage;