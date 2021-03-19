import React from 'react';
import ReactDOM from 'react-dom';


function Nav() {
    return (
<nav>
  
<div className="head-section">
  <div className="logo">
    
    <a href="#welcome-section">wale</a>
    <button className="toggle-button">
       
      <i className="fa fa-bars" aria-hidden="true"></i>
    </button>
  </div>

  <div className="links">
    <li><a href="#welcome-section">home</a></li>
    <li><a href="#projects">projects</a></li>
    <li><a href="#contact">contacts</a></li>
  </div>
</div>
</nav>
    );
}

export default Nav;