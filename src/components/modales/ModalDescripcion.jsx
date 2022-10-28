import { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import './ModalDescripcion.css'
import '../../admin/modales/ModalVistaProducto.css'
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
                alt='img_descripcion'
                src={producto.imagen}
                style={{'width':'30rem','height':'33rem'}}
              />
            </section>
            <section className='caracteristicas-producto'>
              <h1 className='h-1'>{producto.nombre}</h1>
              <p className='p-p'>Categoría: <span>Colibrí llavero</span></p>
              <p className='p-p'>Detalle del Producto</p>
              <p className='p-p'>
                 {producto.descripcion}
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
              <p>Precio unitario: <span>{producto.precio}</span></p>            
              <input
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
