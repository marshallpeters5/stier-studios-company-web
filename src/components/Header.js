import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation(); // Get the current location from React Router

  const isActive = (path) => {
    return location.pathname === path ? 'active' : ''; // Compare current path with link path
  };

  return (
    <header>
      <h1>S Tier Studios</h1>
      <nav>
        <ul>
        <Link className={`nav-link ${isActive('/') ? 'active' : ''}`} to="/">Home</Link>
<Link className={`nav-link ${isActive('/about') ? 'active' : ''}`} to="/about">About Us</Link>
<Link className={`nav-link ${isActive('/contact') ? 'active' : ''}`} to="/contact">Contact Us</Link>
<Link className={`nav-link ${isActive('/services') ? 'active' : ''}`} to="/services">Services</Link>

        </ul>
      </nav>
    </header>
  );
}

export default Header;
