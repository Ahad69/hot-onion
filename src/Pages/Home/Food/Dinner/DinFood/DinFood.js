import React from 'react';
import { Link } from 'react-router-dom';

const DinFood = ({dinner}) => {
    const {title ,id , description, img , price}  = dinner;
    return (
        <div className="container food">
        <Link to={ `/foods/${id}`}>
        <img width="300px"  src={img} alt="" />
        <h5>{title}</h5>
        <p>{description}</p>
        <h1>${price}</h1></Link>
    </div>
    );
};

export default DinFood;