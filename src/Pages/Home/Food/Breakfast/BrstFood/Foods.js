import React from 'react';
import { Link } from 'react-router-dom';
import './Foods.css'


const Foods = ({breakfast}) => {
    const {title ,id, description, img , price}  = breakfast;
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

export default Foods;