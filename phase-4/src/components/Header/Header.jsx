import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();

  const handleRentYourSpace = () => {
    // Navigate to signup or listing creation page
    navigate("/signup");
  };

  return (
    <header className="header">
      <div className="header-left">
        <img src="/assets/icons/logo.png" alt="Hujra Logo" className="logo" />
      </div>

      <nav className="nav-links">
        <a href="#">Find a space</a>
        <a href="#">Learn More</a>
      </nav>

      <div className="header-right">
        <button className="rent-button" onClick={handleRentYourSpace}>
          Rent Your Space
        </button>
      </div>
    </header>
  );
};

export default Header;
