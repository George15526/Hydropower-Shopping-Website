import { FaSearch } from "react-icons/fa";
import { PiShoppingCartFill } from "react-icons/pi";
import { BsPersonCircle } from "react-icons/bs";
import { IoIosNotifications } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container, Button } from 'react-bootstrap';  // 引入 react-bootstrap 組件
import './Navbar.scss';
import '../../App.css';

function NavBar() {
    return (
        <Navbar expand="lg" className="navbar">
            <Container className="navbarContainer">
                <Navbar.Brand as={NavLink} to={"/"} className="logoArea">
                    <span className="logo">GEORGE.BAKERY</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="ms-auto btnArea">
                        <Nav.Link as={NavLink} to={"/auth/search"} className="navLink">
                            <Button className="btn"  title="搜尋"><FaSearch id="searchIcon" className="icon" /></Button>
                        </Nav.Link>
                        <Nav.Link as={NavLink} to={"/auth/notifications"} className="navLink">
                            <Button className="btn" title="通知"><IoIosNotifications id="notifIcon" className="icon" /></Button>
                        </Nav.Link>
                        <Nav.Link as={NavLink} to={"/auth/shoppingCart"} className="navLink">
                            <Button className="btn" title="購物車"><PiShoppingCartFill id="shoppingCartIcon" className="icon" /></Button>
                        </Nav.Link>
                        <Nav.Link as={NavLink} to={"/auth/register"} className="navLink">
                            <Button className="btn" title="會員中心"><BsPersonCircle id="profileIcon" className="icon" /></Button>
                        </Nav.Link>
                        <div className="usernameContainer">
                            <p className="username">訪客</p>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
