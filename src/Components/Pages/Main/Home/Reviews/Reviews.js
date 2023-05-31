import React from "react";
import "./Reviews.css";
import avatar2 from "../../../../../Asset/Image/avatar2.png";

const Reviews = () => {
  const reviews = [
    {
      title: "Adopted",
      number: "2500+",
    },
    {
      css: "border",
    },
    {
      title: "Customers",
      number: "1850+",
    },
    {
      css: "border",
    },
    {
      title: "Testimonials",
      number: "1300+",
    },
  ];
  return (
    <div className="reviews-section">
      <div className="reviews">
        {reviews.map((review,i) => (
          <div key={i} className="reviews-item">
            <p>{review?.title}</p>
            <h1>{review?.number}</h1>
            <div className={`${review?.css}`}></div>
          </div>
        ))}
      </div>
      <div className="comment">
        <p>
          Lorem ipsum dolor sit amet, consectetur ipcing elit, sed do eiusmod
          tempor incididu ut labore et quis nostrud sed do eius .....
        </p>

        <div className="man-info">
          <div>
            <div className="comment-border"></div>
            <p>Daniel Kahneman</p>
          </div>
          <img src={avatar2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
