
import Producto from '../producto/Producto'
import './SeccionProductos.css'
import { AppContext } from '../../context/AppContext'
import { useContext } from 'react'

const SeccionProductos = () => {

  const { productos } = useContext(AppContext)
  return (
    <div className='contenedor-productos'>
     <h3>Todos los productos</h3>
      <div className='contenido-productos'>
          {
            productos.map(producto => (
              <Producto nombre={producto.nombre} 
                        descripcion={producto.descripcion} 
                        precio={producto.precio} 
                        imagen={producto.imagen}/>
            ))
          }
          
      </div>
        
    </div>
  )
}

export default SeccionProductos

