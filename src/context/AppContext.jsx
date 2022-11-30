
import {createContext, useState} from 'react'
export const AppContext=createContext();

 export const DataProvider = ({children}) => {
  const [modal, setModal] = useState(false);
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [mensaje, setMensaje] = useState(false);
  const [producto,setProducto] =useState({});
  const [logueado, setLogueado] = useState(false);
  const [productos,setProductos] =useState([]);
  const [productosDestacados,setProductosDestacados] =useState([]);
  const [productosFiltrados,setProductosFiltrados] =useState([]);  
  const [categorias,setCategorias] = useState([]);
  const [categoria,setCategoria] = useState({});
  const [listaCompras, setListaCompras] = useState([]); 
  const [cantidadProductos, setCantidadProductos] = useState(0);
  const [totalCompra, setTotalCompra] = useState(0);  
  const [ventas, setVentas] = useState([]);
  const [empleados, setEmpleados] = useState([]);
  const [empleado, setEmpleado] = useState({});
  const [usuarios, setUsuarios] = useState([]);
  const [usuario, setUsuario] = useState({});  
  return (
    <AppContext.Provider value={{
        mensaje, setMensaje,
        modal, setModal,
        modal2, setModal2,
        modal1, setModal1,
        producto,setProducto,
        productos,setProductos,
        logueado, setLogueado,
        productosDestacados,setProductosDestacados,
        categorias,setCategorias,
        categoria,setCategoria,
        productosFiltrados,setProductosFiltrados,
        listaCompras, setListaCompras,
        cantidadProductos, setCantidadProductos,
        totalCompra, setTotalCompra,
        ventas, setVentas,
        empleados, setEmpleados,
        usuarios, setUsuarios,
        usuario, setUsuario,
        empleado, setEmpleado
        
    }}    
    >{children}</AppContext.Provider>
  )};

