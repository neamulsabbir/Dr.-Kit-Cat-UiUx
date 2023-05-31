import React from 'react';
import './Arrow.css'
import orangeArrow from "../../../../../../Asset/Icons/ic_arrow_orange.png";
import yellowArrow from "../../../../../../Asset/Icons/ic_arrow_yellow.png";
import greenArrow from "../../../../../../Asset/Icons/ic_arrow_green.png";

const Arrow = () => {
    const arrows = [
        {
            img: orangeArrow
        },
        {
            img: yellowArrow
        },
        {
            img: greenArrow
        }
    ]
    return (
        <div className='arrow-container'>
            {
                arrows.map((arrow,i) => 
                    <div key={i} className='arrow-style'>
                        <img src={arrow?.img} alt="" />
                    </div>
                    )
            }
        </div>
    );
};

export default Arrow;