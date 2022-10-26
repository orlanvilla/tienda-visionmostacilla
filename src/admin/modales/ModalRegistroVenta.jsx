import { useContext, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import './ModalRegistroVenta.css'
import icono_cerrar from '../../img/close.svg'
import { PeticionesApi } from '../../PeticionesApi/PeticionesApi'
 
const ModalRegistroEmpleado = () => {
    const {setModal}=useContext(AppContext);
    const {registrarProducto}=PeticionesApi();//*
    const [dataEmpleado, setDataEmpleado] = useState({
        nombre:"",
        imagen:"",
        descripcion:"",
        caracteristicas:"",
        precio:""
    });
    const onchange=(e)=>{
        setDataEmpleado({
            ...dataEmpleado, 
            [e.target.name]:e.target.value
        }
    )}
    const guardarEmpleado=async()=>{
        await registrarProducto(dataEmpleado)
    }


  return (
    <div className="contenedor-registro-empleado">
        <div className="formulario-registro-empleado">
            <img
                alt='icono-cerrar'
                src={icono_cerrar}
                onClick={()=>setModal(false)}
            />
             <h2>Nueva Venta</h2>

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
                onClick={guardarEmpleado}
             />
        </div>    
    </div>
  )
}

export default ModalRegistroEmpleado