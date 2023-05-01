import React from 'react';
import { Link } from 'react-router-dom';

const Catagory = ({catagory}) => {
   
    return (
        <div>
            <Link to={`categorynews/${catagory.id}`} className='text-decoration-none text-success ps-4'>{catagory.name}</Link>
        </div>
    );
};

export default Catagory;