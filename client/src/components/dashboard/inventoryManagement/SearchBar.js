import React, { useEffect, useState } from "react";

function SearchBar(props) {
    const [searchTerm, setSearchTerm] = useState("");
  
    const handleSearch = () => {
        props.searchTerm(searchTerm);
    }

    useEffect(() => {
        handleSearch();
    }, [searchTerm])


    return (
        <>
            <div className="col-2" style={{position: 'absolute', left: '1205.7px', bottom: '590.5px'}}>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" pattern="[a-z\d]*" placeholder="Search here..." value={searchTerm} onChange={e => { setSearchTerm(e.target.value) }} />
                    
                </div>
            </div>
        </>

    )
}

export default SearchBar;