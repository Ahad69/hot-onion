import React, { useEffect, useState } from 'react';
import LunFood from '../LunFood/LunFood';

const LunFoods = () => {
    const [lunches , setLunches]= useState([])
    useEffect(()=>{
        fetch('./lunch.json')
        .then(res=>res.json())
        .then(data => setLunches(data))
    },[])

    return (
        <div className="foods">
            {
                lunches.map(lunch=><LunFood
                key={lunch.id}
                lunch={lunch}
                >
                </LunFood>)
            }
        </div>
    );
};

export default LunFoods;