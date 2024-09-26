import React from "react";
import Header from "../../../components/dashboard/Header";
import Sidebar from "../../../components/dashboard/Sidebar";

import OrderedProductsCount from "../../../components/dashboard/orderManagement/OrderedProductsReport";

import SoldProductsCountPieChart from "../../../components/dashboard/orderManagement/ProductsSoldCountReport";

function OrderedProductsReport(){

    return(
        <>
        
        <Header />
        <Sidebar />
        <main className="main" id="main">

        <OrderedProductsCount />
        </main>

        <main className="main" id="main">
        <SoldProductsCountPieChart />
        </main>
        
        
        </>
    )
}

export default OrderedProductsReport;