import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <footer className="footer">
        <div className="container text-center">
          <div className="footer-links">
            <a
              href="mailto:your-email@example.com"
              className="footer-icon footer-icon-spaced"
            >
              <img src="/images/mail.svg" alt="Email" />
            </a>
            <a href="tel:1234567890" className="footer-icon footer-icon-spaced">
              <img src="/images/phone.svg" alt="Phone" />
            </a>
            <a
              href="https://www.facebook.com/yourbusinesspage"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icon footer-icon-spaced"
            >
              <img src="/images/facebook.svg" alt="Facebook" />
            </a>
            <a
              href="https://www.linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/linkedin.svg" alt="LinkedIn" />
            </a>
          </div>
          <p className="mt-3">
            © {new Date().getFullYear()} S Tier Studios. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
