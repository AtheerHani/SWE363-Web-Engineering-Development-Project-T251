import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <img src="/logo.png" alt="HuJra Logo" className="logo" />
      </div>

      <nav className="nav-links">
        <a href="#">Find a space</a>
        <a href="#">Learn More</a>
      </nav>
    </header>
  );
};

export default Header;
