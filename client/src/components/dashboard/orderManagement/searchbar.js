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
            <div className="col-4">
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Search" value={searchTerm} onChange={e => { setSearchTerm(e.target.value) }} />
                    <button className="btn btn-outline-secondary" style={{ pointerEvents: "none", backgroundColor: "grey" }} type="submit"><i className="bi bi-search" style={{ color: "white" }}></i></button>
                </div>
            </div>
        </>

    )
}

export default SearchBar;