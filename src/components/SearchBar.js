import React from "react";

function SearchBar({ handleSearchChange }) {
    return (
        <div className="searchbar">
            <form className="form-inline">
                <input
                    className="form-control"
                    type="search"
                    placeholder="Search for an employee"
                    aria-label="Search for an employee"
                    onChange={e => handleSearchChange(e)}
                />
            </form>
        </div>
    );
}
export default SearchBar;