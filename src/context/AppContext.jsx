import { createContext } from "react";

export const AppContext=createContext()
const currency=import.meta.env.VITE_CURRENCY
export const AppContextProvider=(props)=>{
  const value={
    currency
  }

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  )
}