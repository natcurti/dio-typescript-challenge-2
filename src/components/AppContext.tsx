import { createContext, useEffect, useState } from 'react';
import { getAllLocalStorage } from '../services/storage';

interface IAppContext{
  isLoggedIn: boolean
  setIsLoggedIn: (isLoggedIn: boolean) => void
  storage: string | null 
}

export const AppContext = createContext({} as IAppContext);

export const AppContextProvider = ({children}: any) => {

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [storage] = useState<string | null>(getAllLocalStorage());

  useEffect(() => {
    if(storage){
      const {login} = JSON.parse(storage);
      setIsLoggedIn(login);
    }
  }, [storage])

  return (
    <AppContext.Provider value={{isLoggedIn, setIsLoggedIn, storage}}>
      {children}
    </AppContext.Provider>
  )
}