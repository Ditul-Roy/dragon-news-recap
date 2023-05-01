import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../Context/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRooute = ({children}) => {
    const {user} = useContext(UserContext);
    const location = useLocation();
    console.log(location);
    if(user){
        return children;
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default PrivetRooute;