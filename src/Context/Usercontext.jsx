import {  createContext,  useState } from "react";


export const userContext =  createContext();


const UserProvider =  ( {children}) => {
    const [name , setName ]   = useState("Ajjayya")
    const  [age , setAge] = useState(25)
    return (
        <userContext.Provider  value={{name,age}}>
        {children}

        </userContext.Provider>

    )

}

export default UserProvider;