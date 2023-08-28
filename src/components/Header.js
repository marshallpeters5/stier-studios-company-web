import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleNavbarToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  const copyEmailToClipboard = () => {
    const dummyTextArea = document.createElement("textarea");
    dummyTextArea.value = "info@stierstudios.com";
    document.body.appendChild(dummyTextArea);
    dummyTextArea.select();
    document.execCommand("copy");
    document.body.removeChild(dummyTextArea);

    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const closeNavbar = () => {
    setNavbarOpen(false);
  };

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
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={closeNavbar}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" onClick={closeNavbar}>
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services" onClick={closeNavbar}>
                Services
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item d-lg-none">
              <hr className="hr hr-blurry" />
            </li>
            <li>
              <p className="d-lg-none">Contact Us</p>
            </li>
            {/* Phone Number Link */}
            <li className="nav-item">
              <a
                className="nav-link d-lg-none" // Only visible on mobile (lg screen size and smaller)
                href="tel:5132556136"
                onClick={closeNavbar}
              >
                <i className="bi bi-telephone-fill"></i>+1 513-255-6136
              </a>
            </li>
            <div
              className="nav-link d-lg-none text-center"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <li className="nav-item">
                <p
                  className={`nav-link d-lg-none ${
                    copied ? "copied" : ""
                  } text-center `}
                  onClick={(e) => {
                    e.preventDefault();
                    copyEmailToClipboard();
                  }}
                >
                  <i className="bi bi-envelope-fill text-center"></i>
                  info@stierstudios.com
                  {copied && (
                    <span
                      className="copied-message m-1"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        fontStyle: "italic",
                      }}
                    >
                      Copied to clipboard!
                    </span>
                  )}
                </p>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
