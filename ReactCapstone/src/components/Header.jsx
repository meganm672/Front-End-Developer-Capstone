import React from 'react';
import NavLogo from "../assets/NavLogo.png"
import Nav from "./Nav"

const Header = () => {
    return (
        <div>
            <img 
            src={NavLogo}
            alt="little lemon logo"
            ></img>
            <Nav/>
        </div>
    );
};

export default Header;