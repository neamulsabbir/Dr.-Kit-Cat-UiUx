import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-logo">
          <h2>Dr. Kit Cat</h2>
          <h5>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim velit esse cillum dolore eu fugiat nulla pariatur.
          </h5>
        </div>
        <div className="useful">
          <h4>Useful links</h4>
          <p>FAQs</p>
          <p>Shop</p>
          <p>Privacy Policy</p>
          <p>Term of Use</p>
          <p>Site Maps</p>
        </div>
        <div className="explore-part">
          <h4>Explore</h4>
          <p>About Us</p>
          <p>Services</p>
          <p>Our Team</p>
          <p>Adopt Pet</p>
        </div>
        <div className="adopt-part">
          <h4>Adopt Pet</h4>
          <p>880 - 111 - 222 - 333</p>
          <p>Dhaka, bangladesh</p>
        </div>
      </div>
      <div className="footer-border"></div>
      <p className="copyright">Copyright 2023 | Plutolien.</p>
    </footer>
  );
};

export default Footer;
