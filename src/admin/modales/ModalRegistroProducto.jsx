import { useContext, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import './ModalRegistroProducto.css'
import icono_cerrar from '../../img/close.svg'
import { PeticionesApi } from '../../peticionesApi/PeticionesApi'

const ModalRegistroProducto = () => {
    const {setModal}=useContext(AppContext);
    const {registrarProducto}=PeticionesApi();
    const [dataProducto, setDataProducto] = useState({
        nombre:"",
        imagen:"",
        descripcion:"",
        caracteristicas:"",
        precio:""
    });
    const onchange=(e)=>{
        setDataProducto({
            ...dataProducto, 
            [e.target.name]:e.target.value
        }
    )}
    const guardarProducto=async()=>{
        await registrarProducto(dataProducto)
    }
  



  return (
    <div className="contenedor-registro-producto">
        <div className="formulario-registro-producto">
            <img
                alt='icono-cerrar'
                src={icono_cerrar}
                onClick={()=>setModal(false)}
            />
             <h2>Nuevo Producto</h2>

             <label>Nombre</label>
             <input
                type="text"
                name='nombre'
                onChange={onchange}
             />
             <label>Imagen</label>
             <input
                type="text"
                name='imagen'
                onChange={onchange}
             />
             <label>Descripción</label>
            <textarea 
                name='descripcion'
                onChange={onchange}
            />
             <label>Características</label>
            <textarea
                name='caracteristicas'
                onChange={onchange}
            />
            <label>Precio</label>
             <input
                type="number"
                name='precio'
                onChange={onchange}
             />
             <input
                type="submit"
                value="Guardar"
                onClick={guardarProducto}
             />
        </div>    
    </div>
  )
}

export default ModalRegistroProducto
