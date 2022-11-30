
import Producto from '../producto/Producto'
import './SeccionProductos.css'
import { AppContext } from '../../context/AppContext'
import { useContext } from 'react'


const SeccionProductos = () => {

  const { productosFiltrados,categoria,setCategoria,productos,setProductosFiltrados } = useContext(AppContext)
 

  const handleMostrarTodos = (e) => {
    setProductosFiltrados(productos)
    e.preventDefault()
    setCategoria({})
  }



  return (
    <div className='contenedor-productos'>
     <h3>{categoria.nombre ? categoria.nombre : 'Todos los productos'}</h3>
     <button onClick={handleMostrarTodos}>Mostrar Todos</button>
      <div className='contenido-productos'>
          {
            productosFiltrados.map(producto => {
              if(producto.cantidad>0){
                  return (
                          <Producto nombre={producto.nombre} 
                                    descripcion={producto.descripcion} 
                                    precio={producto.precio} 
                                    imagen={producto.imagen}
                                    id={producto._id}
                                    cantidad={producto.cantidad}
                                    />
                          )

              }else{
                return (
                          <Producto nombre={producto.nombre} 
                                    descripcion={producto.descripcion} 
                                    precio={producto.precio} 
                                    imagen={producto.imagen}
                                    id={producto._id}
                                    cantidad={producto.cantidad}
                                    />
                          )
              }
               
            } )
          }
          
      </div>
        
    </div>
  )
}

export default SeccionProductos

