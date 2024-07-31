import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const useUserContext = () =>{
    return useContext(UserContext);
}


export const UserProvider = ({children}) => {

    const [users, setUsers] = useState([]);
    const [darkMode, setDarkMode] = useState(false);

    return(
        <UserContext.Provider value={{users, setUsers, darkMode, setDarkMode}}>
            {children}
        </UserContext.Provider>
    )
 }