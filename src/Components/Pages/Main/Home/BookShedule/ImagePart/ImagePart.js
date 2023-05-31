import React from "react";
import "./ImagePart.css";
import doctor from "../../../../../../Asset/Image/doctor.png";
import dot from "../../../../../../Asset/Icons/ic_dot_yellow.png";
import greenPlus from "../../../../../../Asset/Icons/ic_plus.png";
import orangePlus from "../../../../../../Asset/Icons/ic_plus_orange.png";
import yellowShape from "../../../../../../Asset/Icons/ic_shape_yellow.png";

const ImagePart = () => {
  const images = [
    {
      img: dot,
      css: "dot-icon"
    },
    {
      img: greenPlus,
      css: "green-plus-icon"
    },
    {
      img: doctor,
      css: "circle"
    },
    {
      img: orangePlus,
      css: "orange-plus-icon"
    },
    {
      img: yellowShape,
      css: "shape-icon"
    }
  ];
  return (
    <div>
        {
            images.map((image,i) => 
                <div key={i} className={`${image?.css}`}>
                    <img src={image?.img} alt="" />
                </div>
                )
        }
    </div>
  )
};

export default ImagePart;
