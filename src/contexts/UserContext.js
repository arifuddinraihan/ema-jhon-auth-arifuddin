import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import app from '../FIrebase/firebase.init';


export const AuthContext = createContext()
const auth = getAuth(app)

const UserContext = ({ children }) => {
    const [user, setUser] = useState(null);
    // create user Auth
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // signIn Auth
    const userSignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    // signOut auth
    const logOut = () => {
        return signOut(auth)
    }

    // to get current login user
    // we used useEffect and settle the state-change in a function
    // we used this function for let monitor the user and when he logged out function also be removable
    useEffect(() => {
        const unSubscribe = onAuthStateChanged( auth, currentUser => {
            console.log( "current user ", currentUser)
            setUser(currentUser)
        });

        return () => unSubscribe()
    }, [])

    const authInfo = { user, createUser, userSignIn, logOut }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;