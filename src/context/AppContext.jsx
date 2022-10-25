
import {createContext, useState} from 'react'
export const AppContext=createContext();

 export const DataProvider = ({children}) => {
  const [modal, setModal] = useState(false);
  const [mensaje, setMensaje] = useState(false);
  const [producto,setProducto] =useState({});

 
  return (
    <AppContext.Provider value={{
        mensaje, setMensaje,
        modal, setModal,
        producto,setProducto
    }}    
    >{children}</AppContext.Provider>
  )};

