import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleNavbarToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  const closeNavbar = () => {
    setNavbarOpen(false);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <header className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/" onClick={closeNavbar}>
          S Tier Studios
        </Link>
        <button
          className={`navbar-toggler ${navbarOpen ? "collapsed" : ""}`}
          type="button"
          onClick={handleNavbarToggle}
          aria-expanded={navbarOpen}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${navbarOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className={`nav-item ${isActive("/") ? "active" : ""}`}>
              <Link className="nav-link" to="/" onClick={closeNavbar}>
                Home
              </Link>
            </li>
            <li className={`nav-item ${isActive("/about") ? "active" : ""}`}>
              <Link className="nav-link" to="/about" onClick={closeNavbar}>
                About Us
              </Link>
            </li>
            <li className={`nav-item ${isActive("/services") ? "active" : ""}`}>
              <Link className="nav-link" to="/services" onClick={closeNavbar}>
                Services
              </Link>
            </li>
            </ul>
            <ul className="navbar-nav ml-auto">
            <li className="nav-item d-lg-none">
            <hr class="hr hr-blurry" />
            </li>
            {/* Phone Number Link */}
            <li className="nav-item">
              <a
                className="nav-link d-lg-none" // Only visible on mobile (lg screen size and smaller)
                href="tel:1234567890"
                onClick={closeNavbar}
              >
                <i className="bi bi-telephone-fill"></i>Phone
              </a>
            </li>
            {/* Email Link */}
            <li className="nav-item">
              <a
                className="nav-link d-lg-none" // Only visible on mobile (lg screen size and smaller)
                href="mailto:info@example.com"
                onClick={closeNavbar}
              >
                <i className="bi bi-envelope-fill"></i>Email
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
