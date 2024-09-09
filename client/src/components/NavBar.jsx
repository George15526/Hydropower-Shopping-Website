// ./components/NavBar.jsx

import { FaSearch } from "react-icons/fa";
import { PiShoppingCartFill } from "react-icons/pi";
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <div className="HomeBar">
            <div className="logo">
                <NavLink to={"/"}><img src="../src/assets/GeorgeHydroLogo.png" width={"170px"} alt="GeorgeHydroLogo" /></NavLink>
            </div>
            <div className="searchBar">
                <input type="search" id="search" name="search" placeholder="請輸入關鍵字或商品編號" />
                <FaSearch id="FaSearch"/>
            </div>
            <div className="loginOrRegister">
                <NavLink to={"/auth/loginpage"}>登入</NavLink>
                <hr className="solid"></hr>
                <NavLink to={"/auth/registerpage"}>註冊</NavLink>
            </div>
            <div className="divider"> | </div>
            <div className="shoppingCart">購物車<PiShoppingCartFill id="shoppingCart"/></div>
        </div>
    )
}

export default NavBar;
