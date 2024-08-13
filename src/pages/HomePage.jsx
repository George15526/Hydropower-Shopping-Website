// HomePage.jsx

import React from "react";
import { FaSearch } from "react-icons/fa";
import { PiShoppingCartFill } from "react-icons/pi";

function HomePage() {
    return (
        <div className="HomeBar">
            <div className="logo">
                <img src="images/GeorgeHydroLogo.png" width={"170px"} alt="GeorgeHydroLogo" />
            </div>
            <div className="searchBar">
                <input type="text" id="search" name="search" placeholder="請輸入關鍵字或商品編號" />
                <FaSearch id="FaSearch"/>
            </div>
            <div className="login">Login / Register</div>
            <div className="divider"> | </div>
            <div className="shoppingCart">ShoppingCart<PiShoppingCartFill id="shoppingCart"/></div>
        </div>
    )
}

export default HomePage;
