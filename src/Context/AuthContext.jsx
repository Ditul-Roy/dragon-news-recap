import React, { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import app from '../firebase/firebase_config';
import { useEffect } from 'react';
import { useState } from 'react';

export const UserContext = createContext(null);

const auth = getAuth(app)

const AuthContext = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const loggedOut = () =>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log('the current user is', currentUser);
            setUser(currentUser);
        });
        return () =>{
            unsubscribe;
        }
    },[])

    const AuthInfo = {
        user,
        createUser,
        loginUser,
        loggedOut
    }

    return (
       <UserContext.Provider value={AuthInfo}>
        {children}
       </UserContext.Provider>
    );
};

export default AuthContext;