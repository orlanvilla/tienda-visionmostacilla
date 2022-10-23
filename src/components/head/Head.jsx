import './Head.css'
import icono_comprar from '../../img/buy.png'
import icono_whatsap from '../../img/whatsap.png'
import { FaUserAlt } from "react-icons/fa";
import { useState } from 'react';
import ModalSesionAdmin from '../modales/ModalSesionAdmin';

const Head = () => {
    const [modalSesion, setModalSesion] = useState(false);
    
    const handleAbrirAdmin=(e)=>{
        e.preventDefault();
        setModalSesion(true)    
    }
  return (
    <div className="contenedor-head">
        <div className="contenido-head">
            <section className="datos-head">
                <img
                    src={icono_whatsap}
                    alt="icono-whatsap"
                    
                    
                />
               <p>(+57) 310 360 2787</p>
            </section>
            <section className="buscar-head">
            <input
                    type="text"
                    placeholder="Buscar"
                />
            </section>
            <section className="carrito-ingresar">               
                <img
                    src={icono_comprar}
                    alt="icono-comprar"
                />
                <FaUserAlt 
                className='admin'
                onClick={handleAbrirAdmin}
                />
            </section>
        </div>   
        {modalSesion && <ModalSesionAdmin
                            setModalSesion={setModalSesion}
                                                       
        />}    
    </div>
  )
}

export default Head
