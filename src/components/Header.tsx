import React from "react";
import { Link } from "react-router-dom";
import SW from "..//img/SW.jpg";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <header>
  <div className="empty-space"></div>
  <div className="logo-container">
    <img src={SW} alt="Star Wars" className="logo"/>
  </div>
  <div className="auth-links">
    <Link to="/login">LOG IN</Link>
    <Link to="/signup">SIGN UP</Link>
  </div>
</header>

  );
};

export default Header;
