
import React from 'react';
import Link from 'next/link';
import './Header.css' // Make sure this path is correct


const Header = () => {
  return (
    <div className="header-container">
      <h2>Logo</h2>
      <div className="H-4">
        <Link href="/About">About</Link>
        <Link href="/Course">Course</Link>
        <Link href="/Product">Product</Link>
      </div>
      <Footer />
    </div>
  );
};

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

export default Header;

 