import React, { createContext } from 'react';

export const AuthContext = createContext()

const UserContext = ({children}) => {
    return (
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;