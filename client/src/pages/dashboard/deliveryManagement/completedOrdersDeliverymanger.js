import React, { useEffect, useState } from 'react';

import Header from '../../../components/dashboard/deliveryManagement/deliverymangerheader';
import Sidebar from '../../../components/dashboard/Sidebar';
import Footer from '../../../components/dashboard/Footer';

import Deliveriescompleted from '../../../components/dashboard/deliveryManagement/DeliveryListforCompleted';

import SearchBar from '../../../components/dashboard/deliveryManagement/searchbar';



function CompletedOrdersDeliverymanager() {
    

    const[deliveries,setDeliveries] = useState(null);
    const [searchTerm, setSearchTerm] = useState(null);
    const [searchCategory, setSearchCategory] = useState("");
    const [error, setError] = useState(null);
    


        useEffect(() => {
            const handleSearch = () => {
                const fetchDeliveries = async () => {
                    //* If value for search term is entered
    
                    if (searchCategory === "cusName") {
                        const response = await fetch(`/api/orders/search/name/${searchTerm}`);
                        const json = await response.json();
                        if (response.ok) {
                            setDeliveries(json)
                        } else {
                            setError(json.error);
                            console.log(error);
                        }
                    }
                    else if (searchCategory === "address") {
                        const response = await fetch(`api/orders/search/address/${searchTerm}`);
                        const json = await response.json();
                        if (response.ok) {
                            setDeliveries(json)
                        } else {
                            setError(json.error);
                            console.log(error);
                        }
                    }
                };
    
                //* If search term is empty
                const fetchAllDeliveries = async () => {
                    const response = await fetch("/api/orders/deliveryStatus/completed");
                    const json = await response.json();
    
                    if (response.ok) {
                        setDeliveries(json);
                    } else {
                        setError(json.error);
                        console.log(error);
                    }
                };
    
                if (searchTerm === "") {
                    fetchAllDeliveries();
                } else {
                    fetchDeliveries();
                }
            }
    
            handleSearch();
    
        }, [searchCategory,searchTerm, error]);




      //* Get search term from Search Bar Component
    const getSearchTerm = (data) => {
        setSearchTerm(data)
    }

    //* Get search categpory from Search Bar Component
    const getSearchCategory = (data)=>{
        setSearchCategory(data);
        console.log(data);
    }

    return (
        <div>
            <Header />
            
            <Sidebar />
            <main className="main" id="main">
            
            <div className='row'>

            <SearchBar 
                searchTerm={getSearchTerm}
                searchCategory = {getSearchCategory}
                />
            </div>

            <Deliveriescompleted orders={deliveries}/>
            
</main>
            <Footer />
            <a href="#" 
            className="back-to-top d-flex align-items-center justify-content-center">
                <i className="bi bi-arrow-up-short"></i>
            </a>
        </div>
    );   
}

export default CompletedOrdersDeliverymanager;