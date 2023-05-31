import React from "react";
import "./Facilities.css";
import cat from "../../../../../Asset/Image/yellow_cat.png";

const Facilities = () => {
  return (
    <div className="facilities-section">
      <div className="facilities-container">
      <div className="facilities-title">
        <h1>Facilities we provides</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
      </div>
      <div className="facilities-details">
        <div className="left-text">
          <div className="feed">
            <h4>Feed Training</h4>
            <p>Ut enim ad minim velit esse cillum dolore eu fugiat..</p>
          </div>
          <div className="health">
            <h4>Health test</h4>
            <p>tempor incididunt ut labore et dolore magna aliqua...</p>
          </div>
          <div className="vaccination">
            <h4>Vaccination</h4>
            <p>tempor incididunt ut labore et dolore magna aliqua...</p>
          </div>
        </div>
        <div className="image-area">
          <div className="right-upper-border"></div>
          <div className="left-upper-border"></div>
          <div className="right-bottom-border"></div>
          <div className="left-bottom-border"></div>
          <div className="left-upper-circle"></div>
          <div className="left-bottom-circle"></div>
          <div className="right-upper-circle"></div>
          <div className="right-bottom-circle"></div>
          <div className="facilities-cat">
            <img src={cat} alt="" />
          </div>
        </div>
        <div className="right-text">
          <div className="feed">
            <h4>Overnight Care</h4>
            <p>Ut enim ad minim velit esse cillum dolore eu fugiat..</p>
          </div>
          <div className="health">
            <h4>Medical Care</h4>
            <p>tempor incididunt ut labore et dolore magna aliqua...</p>
          </div>
          <div className="vaccination">
            <h4>Traning Facility</h4>
            <p>tempor incididunt ut labore et dolore magna aliqua...</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Facilities;
