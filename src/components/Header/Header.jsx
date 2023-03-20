import React from "react";
import "./Header.css";
import logo from "../../images/logo.png";

const Header = () => {
  return (
    /*  <div className="header-container">
      <div className="header-logo">
        <img src={logo} alt="amazon logo" width={"20%"} />
      </div>
      <div className="header-link">
        <a href="">Order</a>
        <a href="">Order Review</a>
        <a href="">Manage Inventori</a>
      </div>
    </div> */
    <nav class="navbar">
      <div class="nav-header">
        <a href="#" class="nav-logo">
          Your Logo
        </a>
        <button class="nav-toggle" aria-label="Toggle Navigation">
          <span class="hamburger"></span>
        </button>
      </div>
      <ul class="nav-menu">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
