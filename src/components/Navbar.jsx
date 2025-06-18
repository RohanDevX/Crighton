import React from 'react';
import './Navbar.css';

const Navbar = () => {
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
          <li className="slash">/</li>
          <li><a href="/owners">OWNERS</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
