import React, { useState } from "react";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      {/* Top Bar */}
      <div className="top-header">
        {/* Left - Logo + Name */}
        <div className="logo-name">
          <img src="/images/logo.png" alt="Lawyer" className="logo" />
          <div className="center-name">
            <p>BCAA VISAKHAPATANAM ,A.P</p>
            <p>BCUO OF AP ADVOCATES</p>
          </div>
        </div>

        {/* Right - Contact Info */}
        <div className="contact-info1">
          <span>📞 +91 98765 43210</span>
          <span>✉️ advocate@example.com</span>
          <div className="social-icons1">
            <a href="#facebook">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#linkedin">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#instagram">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? "✖" : "☰"}
        </div>
      </div>

      {/* Bottom Nav Bar */}
      <nav className={`nav-bar ${menuOpen ? "active" : ""}`}>
        <a href="#hero" onClick={toggleMenu}>
          Home
        </a>
        <a href="#about" onClick={toggleMenu}>
          About
        </a>
        <a href="#services" onClick={toggleMenu}>
          Services
        </a>
        <a href="#contact" onClick={toggleMenu}>
          Contact
        </a>
      </nav>
    </header>
  );
}

export default Header;
