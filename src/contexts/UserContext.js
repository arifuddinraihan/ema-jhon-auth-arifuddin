import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import app from '../FIrebase/firebase.init';


export const AuthContext = createContext()
const auth = getAuth(app)

const UserContext = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);
    // create user Auth
    const createUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // signIn Auth
    const userSignIn = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // signOut auth
    const logOut = () => {
        setLoader(true)
        return signOut(auth)
    }

    // to get current login user
    // we used useEffect and settle the state-change in a function
    // we used this function for let monitor the user and when he logged out function also be removable
    useEffect(() => {
        const unSubscribe = onAuthStateChanged( auth, currentUser => {
            console.log( "current user ", currentUser)
            setUser(currentUser)
            setLoader(false)
        });

        return () => unSubscribe()
    }, [])

    const authInfo = { user, loader, createUser, userSignIn, logOut }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;