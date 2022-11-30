import { useContext } from 'react'
import './Producto.css'
import collar_colibri from '../../img/collar-colibri.jpeg'
import ModalDescripcion from '../modales/ModalDescripcion'
import { AppContext } from '../../context/AppContext'
import { PeticionesApi } from '../../PeticionesApi/PeticionesApi'
import agotado from "../../img/agotado.png"

const Producto = (props) => {

    const {buscarProducto} = PeticionesApi();
    const {id,nombre,descripcion,precio,imagen, cantidad} = props
   
   const {modal2, setModal2}=useContext(AppContext)

    const handleAbrir=async()=>{
        await buscarProducto(id)
        if(cantidad>0){
            setModal2(true)
        }
        
        return 
    }
    return (
        <>   
        {modal2 && <ModalDescripcion/>}      
        <div className='contenedor-producto'>
            <div className='contenido-producto' onClick={handleAbrir}>  
                <img
                className={cantidad > 0? "imagen-false": 'imagen-true' }
                src={agotado}
                alt= 'img-agotado'
                ></img>
                
                <div className='imagen-producto'>
                    <img                   
                        src={imagen}
                        alt='img-producto'
                    />
                </div>
                <div className='titulo'>
                    <label>{nombre}</label>
                </div> 
                {/* <div className='subtitulo'>
                    <p>{descripcion}</p>
                    
                </div>  */}
                <div className='precio'>
                    <p>$ {precio}</p>
                    
                </div>           
            </div> 
        </div>   
    </>
  )
}

export default Producto
