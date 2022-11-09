
import './ModalCarrito.css'
import icono_cerrar from '../../img/close.svg'
import { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import TablaProductosCarrito from '../tablasCliente/TablaProductosCarrito'


const ModalCarrito = () => {
  const {setModal}=useContext(AppContext);

  const handleCerrar=()=>{
    setModal(false)
    window.scroll({
      top:0
    })

  }

 
  return (
    <div className='contenedor-modal'>
      <div className='lista-modal'>
          <img
            className='icono-cerrar'
            alt='icono-cerrar'
            src={icono_cerrar}
            onClick={handleCerrar}
          />
          <TablaProductosCarrito/>       
      </div>      
    </div>
  )
}

export default ModalCarrito
