import React from 'react';
import SearchSection from "../SearchSection/index"

const styles = {
display:"flex",
justifyContent: "center"
}

function Navbar() {
    return (
        <nav style={styles} className="navbar navbar-expand-lg navbar-light bg-light">
       <div className="search-area col-4">
        <SearchSection />
    </div>
</nav>
    );
}
export default Navbar;