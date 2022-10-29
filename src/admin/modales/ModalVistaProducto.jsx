import { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import './ModalVistaProducto.css'
import btn_close from '../../img/close.svg'

const ModalVistaProductos = () => {
  const {setModal1,producto}=useContext(AppContext);
  
  const handleCerrar=(e)=>{
    e.preventDefault()
    setModal1(false);      
  }

  return (
    <div className="contenedor-productoss">
        
        <div className="contenido-productoss">
          <img
            className='btn-close'
            alt='img_close'          
            src={btn_close}
            onClick={handleCerrar}
          />
          
          <div className='detalles'>
            <section className='imagen-productoss'>
              <img
                className='img-productoss'
                alt='img_producto'
                src={producto.imagen}
                style={{'width':'30rem','height':'33rem'}}
              />
            </section>
            <section className='caracteristicas-producto'>
              <h1 style={{'textTransform':'capitalize'}} className='titulo-pr'>{producto.nombre}</h1>
              <p className='price'>Precio: <span>${producto.precio}</span></p>  
              <p>Categoría: <span>$ {producto.categoria}</span></p>
              <p>Detalle del Producto</p>
              <p>
                <span>{producto.descripcion}</span>
              </p>
              <p>Cantidad: <span>{producto.cantidad}</span></p>                             
            </section>
            
          </div>
        </div>

    </div>
  )
}


export default ModalVistaProductos