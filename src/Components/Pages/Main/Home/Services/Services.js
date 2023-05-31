import React from "react";
import "./Services.css";
import largePaw from "../../../../../Asset/Icons/ic_pet.png";
import Card from "./Card/Card";
import { Link } from "react-router-dom";
import Arrow from "./Arrow/Arrow";

const Services = () => {
  return (
    <div className="services-container">
      <div className="service-details">
        <div className="title-flex">
          <img src={largePaw} alt="" />
          <h2>Our Services</h2>
        </div>
        <p>
          Best pets are waiting for adoption. Find out the the perfect one you
          will like it. It’s our promise.
        </p>
      </div>
      <Card />
      <div className="btn-arrow">
        <div className="btn-container">
          <Link>Learn More</Link>
        </div>
        <div>
          <Arrow />
        </div>
      </div>
    </div>
  );
};

export default Services;
