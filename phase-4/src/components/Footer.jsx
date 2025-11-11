import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>COMPANY</h4>
          <a href="#">About Us</a>
          <a href="#">Legal Information</a>
          <a href="#">Contact Us</a>
          <a href="#">Blogs</a>
        </div>

        <div className="footer-section">
          <h4>HELP CENTER</h4>
          <a href="#">Find a Space</a>
          <a href="#">Why Us?</a>
          <a href="#">FAQs</a>
          <a href="#">Rental Guides</a>
        </div>

        <div className="footer-section">
          <h4>CONTACT INFO</h4>
          <p>Phone: 1234567890</p>
          <p>Email: company@email.com</p>
          <p>Location: KFUPM, Dhahran, SA</p>
          <div className="social-icons">
            <a href="#">📘</a>
            <a href="#">📷</a>
            <a href="#">💼</a>
            <a href="#">🐦</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Hujra | All rights reserved</p>
        <p>Your Space, Their Solution!</p>
      </div>
    </footer>
  );
};

export default Footer;
