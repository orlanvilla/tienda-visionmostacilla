
import './ModalCarrito.css'
import icono_cerrar from '../../img/close.svg'
import { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import TablaProductosCarrito from '../tablasCliente/TablaProductosCarrito'


const ModalCarrito = () => {
  const {setModal}=useContext(AppContext);
  return (
    <div className='contenedor-modal'>
      <div className='lista-modal'>
          <img
            className='icono-cerrar'
            alt='icono-cerrar'
            src={icono_cerrar}
            onClick={()=>setModal(false)}
          />
          <TablaProductosCarrito/>       
      </div>      
    </div>
  )
}

export default ModalCarrito
