// NavBar.jsx

import { FaSearch } from "react-icons/fa";
import { PiShoppingCartFill } from "react-icons/pi";
import { BsPersonCircle } from "react-icons/bs";
import { IoIosNotifications } from "react-icons/io";
import { NavLink } from "react-router-dom";
import './Navbar.scss';
import '../../App.css'

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbarContainer">
                
                <div className="firstLine">
                    <div className="left">
                        <NavLink to={"/"}>
                            <span className="logo">GEORGE.BAKERY</span>
                        </NavLink>
                    </div>
                    <div className="right">
                        <NavLink to={"/auth/notifications"}>
                        <button className="btn-hover" title="搜尋"><FaSearch id="searchIcon" /></button>
                        </NavLink>
                        <NavLink to={"/auth/notifications"}>
                        <button className="btn-hover" title="通知"><IoIosNotifications id="notifIcon" /></button>
                        </NavLink>
                        <NavLink to={"/auth/shoppingCart"}>
                        <button className="btn-hover" title="購物車"><PiShoppingCartFill id="shoppingCartIcon" /></button>
                        </NavLink>
                        <NavLink to={"/auth/loginpage"}>
                        <button className="btn-hover" title="會員中心"><BsPersonCircle id="profileIcon" /></button>
                        </NavLink>
                        <div>
                            <p className="username">訪客</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
