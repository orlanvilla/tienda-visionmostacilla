
import {createContext, useState} from 'react'
export const AppContext=createContext();

 export const DataProvider = ({children}) => {
  const [modal, setModal] = useState(false);
  const [mensaje, setMensaje] = useState(false);
 
  return (
    <AppContext.Provider value={{
        mensaje, setMensaje,
        modal, setModal
    }}    
    >{children}</AppContext.Provider>
  )};

