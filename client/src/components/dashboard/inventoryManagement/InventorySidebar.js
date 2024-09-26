import React from "react";
import { Link } from 'react-router-dom'

function InventorySidebar() {

    return (
        <aside id="sidebar" className="sidebar">

    <ul className="sidebar-nav" id="sidebar-nav">
   
      <li className="nav-item">
        <a className="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse" href="#">
          <i className="bi bi-layout-text-window-reverse"></i><span>Inventory Management</span><i className="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul id="tables-nav" className="nav-content collapse show " data-bs-parent="#sidebar-nav">
            <li className="nav-item">
            <Link  to="/inventory-homepage" className="nav-link collapsed" id="dashboardLink">
              <i className="bi bi-circle-fill"></i>
              <span>Dashboard</span>
            </Link>
          </li> 
            <li className="nav-item">
            <Link to="/inventory-products-page" className="nav-link collapsed" id="productsLink">
              <i className="bi bi-circle-fill"></i>Products
            </Link>
        </li>
          <li className="nav-item">
          <Link to ="/inventory-raw-materials-page" className="nav-link collapsed" >
            <i className="bi bi-circle-fill"></i>Raw Materials
          </Link>
        </li>
        

      <li className="nav-item">
      <Link to="#" className="nav-link collapsed">
        <i className="bi bi-circle-fill"></i>Orders
        </Link>

          <ul>
              <Link to="/inventory-new-order-page"> <li style={{fontSize: '12px', fontStyle: 'italic'}}><strong>New</strong></li></Link>
              <Link to="/inventory-pending-orders-page"> <li style={{fontSize: '12px', fontStyle: 'italic'}}><strong>Pending</strong></li></Link>
              <Link to="/inventory-past-orders-page"> <li style={{fontSize: '12px', fontStyle: 'italic'}}><strong>Past </strong></li></Link>
          </ul>

      </li>

      {/*
      /inventory-new-order-page
       */}
        
        <li className="nav-item">
        <Link to="/inventory-reports-page" className="nav-link collapsed">
        <i className="bi bi-circle-fill"></i>Reports
          </Link>
      </li>

        </ul>
      </li> 

     
    </ul>

  </aside>
    );
}

export default InventorySidebar;