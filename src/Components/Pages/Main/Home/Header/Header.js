import React from "react";
import "./Header.css";
import blue_cat from "../../../../../Asset/Image/blue_cat.png";
import pink_cat from "../../../../../Asset/Image/pink_cat.png";
import star from "../../../../../Asset/Icons/ic_start.png";
import ic_ring from "../../../../../Asset/Icons/ic_ring.png";
import paw from "../../../../../Asset/Icons/ic_pet_small.png";
import largwePaw from "../../../../../Asset/Icons/ic_pet.png";
import { Link } from "react-router-dom";
import AvatarImage from "./AvatarImage/AvatarImage";

const Header = () => {
  const image = [
    {
      img: blue_cat,
      css: "blue-cat",
    },
    {
      img: pink_cat,
      css: "pink-cat",
    },
    {
      img: star,
      css: "star",
    },
    {
      img: ic_ring,
      css: "yellow-ring",
    },
    {
      img: largwePaw,
      css: "large-paw"
    }
  ];
  return (
    <div className="header-section">
      <div>
        {image.map((data,index) => (
          <div key={index}>
            <img className={`${data?.css}`} src={data?.img} alt="" />
          </div>
        ))}
      </div>
      <div>
        <div className="details-part">
          <h1>We take care of your pet and help them to grow</h1>
          <p>
            Best pets are waiting for adoption. Find out the the perfect one you
            will like it. It’s our promise.
          </p>
          <div className="header-btn">
            <Link className="contact-us">Contact us</Link>
            <AvatarImage />
          </div>
          <div className="care-container">
            <img src={paw} alt="" />
            <div>
              <h4>
                How to take care <br />
                <span>perfect one you will like it. It’s our promise.</span>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
