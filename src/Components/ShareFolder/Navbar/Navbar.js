import React from "react";
import './Navbar.css'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav-section">
      <div className="nav-container">
      <div>
        <h4>Dr. Kit Cat</h4>
      </div>
      <div className="nav-items">
        <p>Home</p>
        <p>About</p>
        <p>Services</p>
        <p>Facilities</p>
      </div>
      <div className="signup-btn">
        <Link >Sign up</Link>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
