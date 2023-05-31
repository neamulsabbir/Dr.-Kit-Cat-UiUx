import React from 'react';
import './AvatarImage.css'
import avatar1 from '../../../../../../Asset/Image/avatar1.png'
import avatar2 from '../../../../../../Asset/Image/avatar2.png'
import avatar3 from '../../../../../../Asset/Image/avatar3.png'
import avatar4 from '../../../../../../Asset/Image/avatar4.png'

const AvatarImage = () => {
    const avatar = [
        {
            image : avatar1,
            css: "img-avatar1"
        },
        {
            image : avatar2,
            css: "img-avatar2"
        },
        {
            image : avatar3,
            css: "img-avatar3"
        },
        {
            image : avatar4,
            css: "img-avatar4"
        }
    ]
    return (
        <div className='avatar-container'>
            {
                avatar.map((img,index) => 
                    <div key={index} className={`avatar ${img?.css}`}>
                        <img className='avatar-image' src={img?.image} alt="" />
                    </div>)
            }
        </div>
    );
};

export default AvatarImage;