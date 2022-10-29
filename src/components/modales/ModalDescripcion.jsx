import { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import './ModalDescripcion.css'
import btn_close from '../../img/close.svg'
import icon_plus from '../../img/plus-circle.svg'
import icon_dash from '../../img/dash-circle.svg'

const ModalDescripcion = () => {
  const {setModal2,producto}=useContext(AppContext);
  
  const handleCerrar=(e)=>{
    e.preventDefault()
    setModal2(false);      
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
                  style={{'width':'30rem','height':'33rem'}}
                />
              </section>
              <section className='caracteristicas-producto-dscrip'>
                <h1>{producto.nombre}</h1>
                <p className='price-2'>Precio: <span>${producto.precio}</span></p>
                <p>Categoría: <span>Colibrí llavero</span></p>
                <p>Detalle del Producto</p>
                <p>
                  <span>
                    {producto.descripcion}
                  </span>
                </p>
                <p>Cantidad: </p>
                <div className='botones-cantidad'>
                  <button>
                      <img src={icon_dash} alt="logo restar" />
                  </button>
                  <input type="text" defaultValue={1} value='2' disabled/>
                  <button>
                      <img src={icon_plus} alt="logo sumar" />
                  </button>
                </div>            
                <input
                  className='input-car'
                  type="submit"
                  value="Agregar al carrito"
                />

              </section>

            </div>
        </div>

    </div>
  )
}


export default ModalDescripcion
