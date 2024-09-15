// NavBar.jsx

import { FaSearch } from "react-icons/fa";
import { PiShoppingCartFill } from "react-icons/pi";
import { NavLink } from "react-router-dom";
import './Navbar.scss';
import '../../App.css'

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbarContainer">
                <div className="firstLine">
                    <NavLink to={"/auth/loginpage"}>
                    <button className="navButtonLogin">登入</button>
                    </NavLink>
                    
                    <NavLink to={"/auth/registerpage"}>
                    <button className="navButtonRegister">註冊</button>
                    </NavLink>
                </div>
                <div className="secondLine">
                    <div className="left">
                        <NavLink to={"/"}>
                            <span className="logo">GEORGE.BAKERY</span>
                        </NavLink>
                    </div>
                    <div className="middle">
                        <input type="search" id="search" name="search" placeholder="請輸入關鍵字或商品名稱" />
                        <FaSearch id="FaSearch"/>
                    </div>
                    <div className="right">
                    <NavLink to={"/auth/registerpage"}>
                    <button className="btn-hover"><PiShoppingCartFill id="shoppingCartIcon"/> 購物車</button>
                    </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
