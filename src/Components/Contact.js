import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      
      <div className="contact-container">
        {/* Contact Info */}
        

        {/* Contact Form */}
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>

        <div className="contact-info">
          <div className="info-box">
            <FaEnvelope className="info-icon" />
            <h3>Email</h3>
            <p>yourmail@example.com</p>
          </div>
          <div className="info-box">
            <FaPhoneAlt className="info-icon" />
            <h3>Phone</h3>
            <p>+91 98765 43210</p>
          </div>
          <div className="info-box">
            <FaMapMarkerAlt className="info-icon" />
            <h3>Location</h3>
            <p>Hyderabad, India</p>
          </div>

          {/* Social Links */}
          
        </div>
        <div className="social-links">
            <a href="#Facebook"><FaFacebook /></a>
            <a href="#Linkedin"><FaLinkedin /></a>
            <a href="#Twitter"><FaTwitter /></a>
          </div>
      </div>
    </section>
  );
}

export default Contact;
