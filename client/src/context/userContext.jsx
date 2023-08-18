import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({})

export function UserContextProvider({children}){
    const [user,setUser] = useState(null)
    useEffect(()=>{
        if (!user) {
            axios.get('/profile').then(({data})=>{
                setUser(data)
            })
        }
    },[])
    const contextValue = {
        user: user,
        setUser: setUser
    };
    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    )
}
