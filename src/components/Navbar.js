import React from "react";
import SearchBar from "./SearchBar";
import { Navbar } from "react-bootstrap";

function NavbarComp({ handleSearchChange }) {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <SearchBar handleSearchChange={handleSearchChange} />
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default NavbarComp;