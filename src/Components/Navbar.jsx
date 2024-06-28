import React from "react";
import Logo from "../assets/Images/sahyadriLogo.png";
import "bootstrap-icons/font/bootstrap-icons.css";
import SignInOptions from "./sign"; // Import SignInOptions from correct path
import Footer from "./Footer"
import AnchorLink from "react-anchor-link-smooth-scroll"
import cart from "./cart"
import { Link } from "react-router-dom";

const Navbar = () => {
  
  return (
    <div className="container-fluid px-5 header sticky-top">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-2 border-bottom border-dark">
        <a
          href="/"
          className="d-flex align-items-center col-md-3 mb-md-0 text-dark text-decoration-none"
        >
          <img src={Logo} alt="" />
        </a>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <a href="#" className="nav-link px-2 menu-color">
              Home
            </a>
          </li>

          <li className="nav-item">
            <Link className="nav-link px-2 menu-color" to="/cart">
              Cart
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link px-2 menu-color" to="/order">
              Orders
            </Link>
          </li>

          <li>
            <a href="#" className="nav-link px-2 menu-color">
              Contact
            </a>
          </li>
          <li>
            <a href="#" className="nav-link px-2 menu-color">
              Menu
            </a>
          </li>
          <li>
            <AnchorLink href="#foot" className="nav-link px-2 menu-color">
              Todays Special
            </AnchorLink>
          </li>
        </ul>

        <SignInOptions />
      </header>
    </div>
  );
};

export default Navbar;
