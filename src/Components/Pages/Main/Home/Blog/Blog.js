import React from "react";
import "./Blog.css";
import { Link } from "react-router-dom";
import cat from "../../../../../Asset/Image/meaw.png";
import LeftArrowIcon from "../../../../../SvgIcon/LeftArrowIcon";
import RigthArrowIcon from "../../../../../SvgIcon/RigthArrowIcon";

const Blog = () => {
  return (
    <div className="blog-section">
      <div className="blog-container">
        <div className="blog-left-details">
          <h1>DaCode Blog</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <div className="blog-btn">
            <Link>Learn More</Link>
          </div>
        </div>
        <div className="blog-right-details">
          <div className="cat-area">
            <img src={cat} alt="" />
          </div>
          <div className="details-area">
            <h4>Why Your SaaS Business should use WordPress</h4>
            <p>
              A content management system like WordPress can help you build a
              highly engaging website for your SaaS business, with little to no
              effort
            </p>
            <div className="arrow-icon">
              <div className="left-arrow">
                <LeftArrowIcon></LeftArrowIcon>
              </div>
              <div className="right-arrow">
                <RigthArrowIcon></RigthArrowIcon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
