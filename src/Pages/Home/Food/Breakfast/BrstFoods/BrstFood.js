import React, { useEffect, useState } from 'react';
import Foods from '../BrstFood/Foods';
import './BrstFood.css'

const BrstFood = () => {
    const [breakfast , setBreakfast]= useState([])
    useEffect(()=>{
        fetch('./breakfast.json')
        .then(res=>res.json())
        .then(data => setBreakfast(data))
    },[])
    return (
        <div className="foods" >
            {
                breakfast.map(breakfast=><Foods
                key={breakfast.id}
                breakfast={breakfast}
                >
                </Foods>)
            }
        </div>
    );
};

export default BrstFood;