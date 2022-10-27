import { useContext } from 'react'
import './Producto.css'
import collar_colibri from '../../img/collar-colibri.jpeg'
import ModalDescripcion from '../modales/ModalDescripcion'
import { AppContext } from '../../context/AppContext'

const Producto = (props) => {

    const {nombre,descripcion,precio,imagen} = props
   
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
                        src={imagen}
                        alt='img-producto'
                    />
                </div>
                <div className='titulo'>
                    <label>{nombre}</label>
                </div> 
                <div className='subtitulo'>
                    <p>{descripcion}</p>
                    
                </div> 
                <div className='precio'>
                    <p>{precio}</p>
                    
                </div>           
            </div> 
            {modal && <ModalDescripcion/>}      
        </div>   
    </>
  )
}

export default Producto
