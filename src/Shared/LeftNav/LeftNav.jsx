import React, { useEffect, useState } from 'react';
import Catagory from '../../Pages/Home/Catagory/Catagory';

const LeftNav = () => {
    const [catagories, setCatagories] = useState([])
    useEffect(()=>{
        fetch('https://the-news-server-recap.vercel.app/catagories')
        .then(res => res.json())
        .then(data=>setCatagories(data))
    },[])
    return (
        <div>
            <h3>Dragon news</h3>
            {
                catagories.map(catagory =><Catagory
                key={catagory.id}
                catagory={catagory}
                ></Catagory>)
            }
        </div>
    );
};

export default LeftNav;