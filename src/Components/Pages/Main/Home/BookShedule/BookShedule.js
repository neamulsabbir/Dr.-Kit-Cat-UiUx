import React from "react";
import "./BookShedule.css";
import rightSign from "../../../../../Asset/Icons/rightsign.png";
import phnIcon from "../../../../../Asset/Icons/ic_phone.png";
import { Link } from "react-router-dom";
import ImagePart from "./ImagePart/ImagePart";

const BookShedule = () => {
  const sign = [
    {
      img: rightSign,
      title: "Vaccination Service",
    },
    {
      img: rightSign,
      title: "Veterinary Service",
      css: "second-sign",
    },
  ];
  return (
    <div className="book-section">
      <div className="book-container">
        <div className="book-text">
          <h1>Lets book a call and stay connected</h1>
          <div className="sign-area">
            {sign.map((data, i) => (
              <div key={i} className={`sign ${data?.css}`}>
                <img src={data?.img} alt="" />
                <p>{data?.title}</p>
              </div>
            ))}
          </div>
          <p className="book-detail">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <div className="call-area">
            <div className="book-btn">
              <Link>Book a Schedule</Link>
            </div>
            <div className="call">
              <img src={phnIcon} alt="" />
              <p>Emergency Call</p>
            </div>
          </div>
        </div>
        <ImagePart />
      </div>
    </div>
  );
};

export default BookShedule;
