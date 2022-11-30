import './Head.css'
import { useEffect } from 'react';
import icono_comprar from '../../img/buy.png'
import icono_whatsap from '../../img/whatsap.png'
import { FaUserAlt } from "react-icons/fa";
import { useState, useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { PeticionesApi } from '../../PeticionesApi/PeticionesApi';
import ModalSesionAdmin from '../modales/ModalSesionAdmin';
import ModalCarrito from '../modales/ModalCarrito';

const Head = () => {
    const [modalSesion, setModalSesion] = useState(false);
    const {modal, setModal, listaCompras, cantidadProductos}=useContext(AppContext)
    const {cargarUsuarios}=PeticionesApi()
    
    
    const handleAbrirAdmin=async(e)=>{
        await cargarUsuarios()
        e.preventDefault();
        setModalSesion(true)    
    }
    const handleCarritoComprar=()=>{
        setModal(true)
        
    }
  return (
    <div className='contenedor-head-false'>
    <div className="contenedor-head">
    
    {modal&& <ModalCarrito/>}

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
                    onClick={handleCarritoComprar}
                />
                {cantidadProductos>0 ? <p className='cantidad'>{cantidadProductos}</p>: null} 

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
    </div>
  )
}

export default Head
