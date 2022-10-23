import { useContext } from 'react'
import './Producto.css'
import collar_colibri from '../../img/collar-colibri.jpeg'
import ModalDescripcion from '../modales/ModalDescripcion'
import { AppContext } from '../../context/AppContext'

const Producto = () => {
   const {modal, setModal}=useContext(AppContext)

    const handleAbrir=()=>{
        setModal(true)
        return 
    }
  return (
    <>   
        <div className='contenedor-producto'>
            <div className='contenido-producto' onClick={handleAbrir}>  
                
                <div className='imagen-producto'>
                    <img                   
                        src={collar_colibri}
                        alt='img-producto'
                    />
                </div>
                <div className='titulo'>
                    <label>Collar Colibrí</label>
                </div> 
                <div className='subtitulo'>
                    <p>Collar en mostacilla checha + colibrí</p>
                    
                </div> 
                <div className='precio'>
                    <p>$ 120.000</p>
                    
                </div>           
            </div> 
            {modal && <ModalDescripcion/>}      
        </div>   
    </>
  )
}

export default Producto
