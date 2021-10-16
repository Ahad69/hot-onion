import React from 'react';
import { useParams } from 'react-router';


const SingleFood = () => {
    const {id} = useParams()
    return (
        <div>
            <h1>hi {id}</h1>
        </div>
    );
};

export default  SingleFood;