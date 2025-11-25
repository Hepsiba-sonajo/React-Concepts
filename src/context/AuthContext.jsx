import {  createContext, useContext, useState} from "react";



const AuthContext =  createContext ();

function AuthProvider({children}) {

    const [isLoggedIn, setIsLoggedIn] = useState(false)
  
    const login = () => setIsLoggedIn(true);
    const logout = () => setIsLoggedIn(false)


    return(

     <AuthContext.Provider value= {{isLoggedIn, login,logout}}>
         {children}
     </AuthContext.Provider>

    )
}


function useAuth() {
    return useContext(AuthContext)
}


export   {AuthProvider,useAuth } 