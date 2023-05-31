import React from "react";
import "./Groomers.css";
import avatar1 from "../../../../../Asset/Image/avatar1.png";
import avatar2 from "../../../../../Asset/Image/avatar2.png";
import avatar3 from "../../../../../Asset/Image/avatar3.png";
import avatar4 from "../../../../../Asset/Image/avatar4.png";
import { Link } from "react-router-dom";

const Groomers = () => {
  const groomers = [
    {
      img: avatar1,
      name: "Adam Smith",
      title: "Veterinarian",
    },
    {
      img: avatar2,
      name: "Morgan Mark",
      title: "Trainer",
    },
    {
      img: avatar3,
      name: "Ana Fargun",
      title: "Veterinarian",
    },
    {
      img: avatar4,
      name: "Mouran Maz",
      title: "Care Taker",
    },
  ];
  return (
    <div className="groomers-section">
      <div className="groomers-style">
        <h1>Our Groomers</h1>
        <div className="groomers-container">
          {groomers.map((groomer,i) => (
            <div key={i} className="groomers-bg">
              <img src={groomer?.img} alt="" />
              <h4>{groomer?.name}</h4>
              <p>{groomer?.title}</p>
            </div>
          ))}
        </div>
        <Link>View Team</Link>
      </div>
    </div>
  );
};

export default Groomers;
