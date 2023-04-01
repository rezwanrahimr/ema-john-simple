import React from "react";
import "./Header.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-logo">
        <img src={logo} alt="amazon logo" width={"20%"} />
      </div>
      <div className="header-link">
        <Link to={"/about"}>About</Link>
        <Link to={"/order"}>Order</Link>
        <Link to={"/orderReview"}>Order Review</Link>
        <Link to={"/manageInventories"}>Manage Inventories</Link>
      </div>
    </div>
  );
};

export default Header;
