import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();

  const handleRentYourSpace = () => {
    // If not logged in, go to login with rent space intent
    navigate("/login", { state: { fromRentYourSpace: true } });
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

      <button className="btn-rent-space" onClick={handleRentYourSpace}>
        Rent Your Space
      </button>
    </header>
  );
};

export default Header;
