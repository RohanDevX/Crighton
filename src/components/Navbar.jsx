import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img 
            src="https://cdn.prod.website-files.com/6176a864abe8b65b106b98b3/617957f96c23676ea1577f04_CtnLogoWhite.svg" 
            alt="CRIGHTON" 
          />
        </div>

        <ul className="navbar-links">
          <li><a href="/" className="active">HOME</a></li>
          <li className="slash">/</li>
          <li><a href="/the-man">THE MAN</a></li>
          <li className="slash">/</li>
          <li><a href="/the-machine">THE MACHINE</a></li>
          <li className="slash">/</li>
          <li><a href="/press">PRESS</a></li>
          <li className="slash">/</li>
          <li><a href="/contact">CONTACT</a></li>
        </ul>

        <div 
          className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="mobile-menu">
            <div className="mobile-menu-content">
              <ul className="mobile-menu-links">
                <li><a href="/" className={window.location.pathname === "/" ? "active" : ""}onClick={() => setIsMobileMenuOpen(false)}>  HOME</a></li>
                <li><a href="/the-man" className={window.location.pathname === "/the-man" ? "active" : ""}onClick={() => setIsMobileMenuOpen(false)}>  THE MAN</a></li>
                <li><a href="/the-machine" className={window.location.pathname === "/the-machine" ? "active" : ""}onClick={() => setIsMobileMenuOpen(false)}>  THE MACHINE</a></li>
                <li><a href="/press" className={window.location.pathname === "/press" ? "active" : ""}onClick={() => setIsMobileMenuOpen(false)}>  PRESS</a></li>
                <li><a href="/contact" className={window.location.pathname === "/contact" ? "active" : ""}onClick={() => setIsMobileMenuOpen(false)}>  CONTACT</a></li>
                <li><a href="/owners" className={window.location.pathname === "/owners" ? "active" : ""}onClick={() => setIsMobileMenuOpen(false)}>  OWNERS</a></li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;