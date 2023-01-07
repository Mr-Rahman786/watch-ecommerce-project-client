import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'

export const AuthContext = createContext()
const auth = getAuth(app)

const Authprovider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }


    useEffect(() => {
    const unSubscribe=    onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
    })
        return () => {
            return unSubscribe();
        }
    },[])

    const authInfo = {
        user,
        loading,
        createUser,
        logIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;