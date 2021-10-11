import React, { createContext } from 'react';
import useFirebase from '../Hooks/useFirebase';
export const AuthContext = createContext();
const Authprovider = (props) => {
    const {children} = props
    const allContexts = useFirebase()
    return (
        <AuthContext.Provider value={allContexts}>
           {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;