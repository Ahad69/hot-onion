import React, { useEffect, useState } from 'react';
import DinFood from '../DinFood/DinFood';

const DinFoods = () => {
    const [dinners , setDinners]= useState([])
    useEffect(()=>{
        fetch('./dinner.json')
        .then(res=>res.json())
        .then(data => setDinners(data))
    },[])

    return (
        <div className="foods">
            {
                dinners.map(dinner=><DinFood
                key={dinner.id}
                dinner={dinner}
                >
                </DinFood>)
            }
        </div>
    );
};

export default DinFoods;