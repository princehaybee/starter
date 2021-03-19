import React from 'react';
import ReactDOM from 'react-dom';

function Navbar() {
    return (
        <header>
        <div className="logo-div">
          <li><a href="#welcome-section"> </a></li>
        </div>
        <nav id="navbar">
          <li><a href="#welcome-section">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contacts</a></li>
        </nav>
      </header>
    );
}

export default Navbar;