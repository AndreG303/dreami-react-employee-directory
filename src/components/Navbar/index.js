import React from 'react';
import "./style.css";
import SearchSection from "../SearchSection/index"

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
       <div className="search-area col-4">
        <SearchSection />
    </div>
</nav>
    );
}
export default Navbar;