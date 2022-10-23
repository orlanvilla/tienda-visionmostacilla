import Producto from '../producto/Producto'
import './SeccionProductos.css'

const SeccionProductos = () => {
  return (
    <div className='contenedor-productos'>
     <h3>Todos los productos</h3>
      <div className='contenido-productos'>
          <Producto/>
          <Producto/>
          <Producto/>
          <Producto/>
          <Producto/>
          <Producto/>
          <Producto/>
          <Producto/>
          
      </div>
        
    </div>
  )
}

export default SeccionProductos

