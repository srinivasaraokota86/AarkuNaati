    import React from "react";
import "../CSS/Footer.css";
    import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
function Footer() {
      return (
                <footer className="footer">
           <div className="footer-container">
                    <div className="footer-column">
                      <h2>ArakuNaati</h2>
                      <p>Explore fresh fruits and healthy recipes. Join our community!</p>
                    </div>
          
                    <div className="footer-column">
                      <h3>Contact Us</h3>
                      <p>Email: info@arakunaati.com</p>
                      <p>Phone: +91 8142624421</p>
          
                      <div className="footer-social">
                        <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
                        <a href="#"><FaFacebookF /></a>
                        <a href="#"><FaTwitter /></a>
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaLinkedinIn /></a>
                      </div>
                    </div>
                  </div>
          
                  <div className="footer-bottom">
                    &copy; {new Date().getFullYear()} ArakuNaati. All rights reserved.
                  </div>
                </footer>
      );
}
export default Footer;
