import React, {createContext, useState} from 'react';

export const UserLoginStatusContext = createContext();

export const UserLoginStatusContextProvider = ({children}) => {
    const [isLogin, setIsLogin] = useState(false);

    return (
        <UserLoginStatusContext.Provider value={[isLogin, setIsLogin]}>
            {children}
        </UserLoginStatusContext.Provider>
    );
};
