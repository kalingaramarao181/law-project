import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Brand / About */}
        <div className="footer-section about">
          <h2>Legal Firm</h2>
          <p>
            Providing trusted legal services in Criminal, Civil, Corporate, and Family law. 
            Justice and client satisfaction are our priority.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#policy">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>Email: info@legalfirm.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Location: Vizag, India</p>
          <div className="social-icons">
            <a href="#Facebook"><FaFacebook /></a>
            <a href="#Twitter"><FaTwitter /></a>
            <a href="#Linkedin"><FaLinkedin /></a>
            <a href="#Instagram"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Legal Firm | All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
