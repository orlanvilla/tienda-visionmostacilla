
import {createContext, useState} from 'react'
export const AppContext=createContext();

 export const DataProvider = ({children}) => {
  const [modal, setModal] = useState(false);
  const [modal1, setModal1] = useState(false);
  const [mensaje, setMensaje] = useState(false);
  const [producto,setProducto] =useState({});
  const [logueado, setLogueado] = useState(false);
  
  const [productos,setProductos] =useState([]);
  
  return (
    <AppContext.Provider value={{
        mensaje, setMensaje,
        modal, setModal,
        modal1, setModal1,
        producto,setProducto,
        productos,setProductos,
        logueado, setLogueado
        
    }}    
    >{children}</AppContext.Provider>
  )};

