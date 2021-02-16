import React from 'react'
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
    return (
        <nav className="header">
          
            <Link to="/">
            <img className="header__logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""/>
            </Link>
            
            
      
            <input type="text" className="header__searchInput" />
          
          

        </nav>
    )
}

export default Header
