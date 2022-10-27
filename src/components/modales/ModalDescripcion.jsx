import { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import './ModalDescripcion.css'
import btn_close from '../../img/close.svg'
import colibri_multicolor from '../../img/colibri-multicolor.jpeg'

const ModalDescripcion = () => {
  const {setModal1,producto}=useContext(AppContext);
  
  const handleCerrar=(e)=>{
    e.preventDefault()
    setModal1(false);      
  }

  return (
    <div className="contenedor-descripcion">
        
        <div className="contenido-descripcion">
          <img
            className='btn-close'
            alt='img_close'          
            src={btn_close}
            onClick={handleCerrar}
          />
          
          <div className='detalles'>
            <section className='imagen-descripcion'>
              <img
                className='img-descripcion'
                alt='img_descripcion'
                src={producto.imagen}
                style={{'width':'400px','height':'500px'}}
              />
            </section>
            <section className='caracteristicas-producto'>
            <h1>{producto.nombre}</h1>
            <p>Categoría: <span>Colibrí llavero</span></p>
            <p>Detalle del Producto</p>
              <p>
                 {producto.descripcion}
              </p>
              <p>Cantidad: </p>
              <input
                type='number'
              />
              <p>Precio unitario: <span>{producto.precio}</span></p>
            

              <input
                type="submit"
                value="Comprar"
              />

            </section>

          </div>






        </div>

    </div>
  )
}


export default ModalDescripcion
