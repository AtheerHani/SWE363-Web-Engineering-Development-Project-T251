import React, { useState, useRef, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import UserDropdown from "../UserDropdown/UserDropdown";
import "./HeaderLoggedIn.css";

const HeaderLoggedIn = () => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const handleRentYourSpace = () => {
    // If logged in, go directly to space creation step 1
    navigate("/space-creation/step-1");
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="header-logged-in">
      <div className="header-left">
        <Link to="/home">
          <img src="/assets/icons/logo.png" alt="Hujra Logo" className="logo" />
        </Link>
      </div>

      <nav className="nav-links">
        <Link to="/home">Find a space</Link>
        <a href="#">Learn More</a>
      </nav>

      <div className="header-right">
        <button className="rent-button" onClick={handleRentYourSpace}>
          Rent Your Space
        </button>

        {/* Combined Menu Button */}
        <div className="menu-container" ref={dropdownRef}>
          <button className="combined-menu-button" onClick={toggleDropdown}>
            {/* Hamburger Icon */}
            <svg
              className="hamburger-icon"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>

            {/* Profile Icon */}
            <div className="profile-icon-circle">
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
          </button>

          {showDropdown && (
            <UserDropdown onClose={() => setShowDropdown(false)} />
          )}
        </div>
      </div>
    </header>
  );
};

export default HeaderLoggedIn;
