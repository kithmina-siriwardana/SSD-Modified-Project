import React from 'react';
import Footer from '../../../components/dashboard/Footer';
import InventoryHeader from '../../../components/dashboard/inventoryManagement/InventoryHeader';
import InventorySidebar from '../../../components/dashboard/Sidebar';
import InventoryRawMaterialsContent from '../../../components/dashboard/inventoryManagement/RawMaterialsContent';

import { useState, useEffect } from 'react';
import SearchBar from '../../../components/dashboard/inventoryManagement/SearchBar';

import {useRef} from 'react';

const InventoryRawMaterialsPage = () => {

    const[rawMaterials, setRawMaterials] = useState(null)

    const isMounted = useRef(false)
    const[filteredRawMaterials, setFilteredRawMaterials] = useState(null)
    const[searchTerm, setSearchTerm] = useState(null)

    useEffect(() => {
        const fetchRawMaterials = async () => {
          const response = await fetch('/api/inventoryRawMaterials')
          const json = await response.json()
    
          if(response.ok){
            //console.log(json)
            setRawMaterials(json)
            setFilteredRawMaterials(json)
          }
    
        }
    
        fetchRawMaterials()
    
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
                const filteredRawMaterials = data.filter(data => data.raw_material_name.match(regExp));
                setFilteredRawMaterials(filteredRawMaterials);
            }        
        }
        handleSearch(rawMaterials);

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
            <InventoryHeader />
            <InventorySidebar />

            <main id="main" className="main">

            <InventoryRawMaterialsContent rawMaterials={searchTerm=== "" ? rawMaterials : filteredRawMaterials}/>
            <SearchBar searchTerm={getSearchTerm}/>

            </main>

            <Footer />
        </React.Fragment>
    )
}

export default InventoryRawMaterialsPage;