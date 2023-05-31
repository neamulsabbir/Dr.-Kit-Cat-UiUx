import React from "react";
import injection from "../../../../../../Asset/Icons/ic_injection.png";
import cat from "../../../../../../Asset/Icons/ic_cat.png";
import doctor from "../../../../../../Asset/Icons/ic_doctor.png";
import hand from "../../../../../../Asset/Icons/ic_hand.png";

const Card = () => {
  const cards = [
    {
      title: "Vaccination",
      details: "Perfect one you will like it. It’s our promise.",
      img: injection,
    },
    {
      title: "Pet Grooming",
      details: "Perfect one you will like it. It’s our promise.",
      img: cat,
    },
    {
      title: "Veterinary",
      details: "Perfect one you will like it. It’s our promise.",
      img: doctor,
    },
    {
      title: "Vaccination",
      details: "Perfect one you will like it. It’s our promise.",
      img: hand,
    },
  ];
  return (
    <div className="card-section">
        {cards.map((card, index) => (
          <div
          key={index}
          className={`card-container ${
            index === 0
              ? "injec-text-decoration injec-background-color injec-image-bg"
              : index === 1 || 2
              ? "text-decoration background-color hand-image-bg"
              : null
          }`}
        >
          <div
          key={index}
            className={`${
              index === 0
                ? "injec-bg-size "
                : index === 1
                ? "pet-bg-size"
                : index === 2
                ? "doctor-bg-size"
                : index === 3
                ? "hand-bg-size"
                : null
            }`}
          >
            <img src={card?.img} alt="" />
          </div>
          <h5>{card?.title}</h5>
          <p>{card?.details}</p>
        </div>
        ))}
      </div>
    
  );
};

export default Card;
