import { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import './ModalDescripcion.css'
import btn_close from '../../img/close.svg'
import colibri_multicolor from '../../img/colibri-multicolor.jpeg'

const ModalDescripcion = () => {
  const {setModal}=useContext(AppContext);
  
  const handleCerrar=(e)=>{
    e.preventDefault()
    setModal(false);      
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
                src={colibri_multicolor}
              />
            </section>
            <section className='caracteristicas-producto'>
            <h1>Colibrí Multicolor</h1>
            <p>Categoría: <span>Colibrí llavero</span></p>
            <p>Detalle del Producto</p>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vestibulum erat imperdiet, blandit tellus at, porta purus. 
              </p>
              <p>Cantidad: </p>
              <input
                type='number'
              />
              <p>Precio unitario: <span>$ 100000</span></p>
              <p>Precio Total: <span>$ 123232312</span></p>

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
