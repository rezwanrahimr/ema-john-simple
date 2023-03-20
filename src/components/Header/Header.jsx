import React from "react";
import "./Header.css";
import logo from "../../images/logo.png";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-logo">
        <img src={logo} alt="amazon logo" width={"20%"} />
      </div>
      <div className="header-link">
        <a href="">Order</a>
        <a href="">Order Review</a>
        <a href="">Manage Inventori</a>
      </div>
    </div>
  );
};

export default Header;
