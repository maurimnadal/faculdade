import { createContext,useState,useContext  } from  'react'

const  Context =createContext({})

export  function  useRoutePath(){
    return useContext(Context)
}

export function AuthProvider({children}:any){
    const [isLogged, setIsLogged] =useState(false)

    const login =  ()  => setIsLogged(true)
    const logout =  () => setIsLogged(false)

    return(
        <Context.Provider value={
            {isLogged, login,logout}
        }>
            {children}
        </Context.Provider>
    )
}