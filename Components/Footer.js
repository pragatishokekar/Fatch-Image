// src/components/Footer.js
import React from 'react';
// import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>&copy; 2024 Your Company Name. All rights reserved.</p>
      <div className="footer-links">
        <a href="#privacy">Privacy Policy</a>
        <a href="#terms">Terms of Service</a>
        <a href="#contact">Contact Us</a>
      </div>
    </div>
  );
};

export default Footer;