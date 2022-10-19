import React, { createContext, useState } from 'react';
import { getAuth } from 'firebase/auth'
import app from '../FIrebase/firebase.init';


export const AuthContext = createContext()
const auth = getAuth(app)

const UserContext = ({ children }) => {
    const [user , setUser] = useState(null);
    const authInfo = { user }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;