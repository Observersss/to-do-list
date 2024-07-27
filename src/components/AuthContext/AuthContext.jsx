import React, { createContext, useState } from 'react';

import {AuthContext} from "../context/index.js";

export const AuthProvider = ({ children,isAuth,setIsAuth }) => {

    return (
        <AuthContext.Provider value={{ isAuth, setIsAuth }}>
            {children}
        </AuthContext.Provider>
    );
};