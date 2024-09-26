import React from 'react';
import Breadcrumb from '../../../components/Breadcrumb';
import CustomerProductsContent from '../../../components/dashboard/inventoryManagement/CustomerProductsContent';
import Footer from '../../../components/Footer';

import {useState, useEffect, useRef} from 'react';
import SearchBar from '../../../components/dashboard/inventoryManagement/SearchBar';

const CustomerProductsPage = () => {

    const[products, setProducts] = useState(null)

    const isMounted = useRef(false)
    const[filteredProducts, setFilteredProducts] = useState(null)
    const[searchTerm, setSearchTerm] = useState(null)

    useEffect(() => {
        const fetchProducts = async () => {
          const response = await fetch('/api/inventoryProducts')
          const json = await response.json()
    
          if(response.ok){
            //console.log(json)
            setProducts(json)
            setFilteredProducts(json)
          }
    
        }
    
        fetchProducts()
    
      }, [])



/**************************************************************************************************************/


useEffect(() => {

    if (isMounted.current) {
        const handleSearch = (data) => {
            
            let term;

            if(searchTerm!==null){
                term = searchTerm.replace(/[^a-zA-Z0-9_ \d]/, '');
            }

            //const term = searchTerm;

            const regExp = new RegExp(term, "i");
            //*If search category is company name
            
            if(data) {
                const filteredProducts = data.filter(data => data.product_name.match(regExp));
                setFilteredProducts(filteredProducts);
            }        
        }
        handleSearch(products);

    }
    else {
        isMounted.current = true;
    }
}, [searchTerm]);



//* Get search term from Search Bar Component
const getSearchTerm = (data) => {
    setSearchTerm(data)
    console.log(searchTerm)
}


/**************************************************************************************************************/


    return(
        <React.Fragment>
            <Breadcrumb />

            

            <CustomerProductsContent products={searchTerm === "" ? products : filteredProducts} />
            
            {/* <SearchBar searchTerm={getSearchTerm}/> */}
            <Footer />
           
            <a href="#" 
            className="back-to-top d-flex align-items-center justify-content-center">
                <i className="bi bi-arrow-up-short"></i>

               
            </a>
        </React.Fragment>
    )
}

export default CustomerProductsPage;