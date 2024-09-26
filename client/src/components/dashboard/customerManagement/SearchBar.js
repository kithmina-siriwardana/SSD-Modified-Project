import React, { useEffect, useState } from "react";

function SearchBar(props) {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchCategory, setSearchCategory] = useState("name");

    const handleSearch = () => {
        props.searchCategory(searchCategory);
        props.searchTerm(searchTerm);
    }

    useEffect(() => {
        handleSearch();
    }, [searchTerm, searchCategory])


    return (
        <>
            <div className="col-4">
                <div className="input-group mb-3">
                    <input type="text" className="form-control" pattern="[a-z\d]*" placeholder="Search" value={searchTerm} onChange={e => { setSearchTerm(e.target.value) }} />
                    <select className="form-select" onChange={e => setSearchCategory(e.target.value)}>
                        <option value="name" defaultValue={"name"}>Name</option>
                        <option value="email">Email</option>
                    </select>
                    <button className="btn btn-outline-secondary" style={{ pointerEvents: "none", backgroundColor: "grey" }} type="submit"><i className="bi bi-search" style={{ color: "white" }}></i></button>
                </div>
            </div>
        </>

    )
}

export default SearchBar;