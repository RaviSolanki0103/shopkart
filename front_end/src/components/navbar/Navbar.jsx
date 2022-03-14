import React from "react";
import "./navbar.css";

export default function Navbar() {
  return (
    <nav className="main-navbar">
      <div className="navbar-icon"></div>
      <div className="navbar-search">
        <input type="search" />
      </div>
      <div className="navbar-menu">
        <ul>
          <li>Login</li>
          <li>cart</li>
        </ul>
      </div>
    </nav>
  );
}
