import { useContext, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import './ModalRegistroCategorias.css'
import icono_cerrar from '../../img/close.svg'
import { PeticionesApi } from '../../PeticionesApi/PeticionesApi'
 

const ModalRegistroCategoria = () => {
    const {setModal}=useContext(AppContext);
    const {registrarProducto}=PeticionesApi();//*
    const [dataCategoria, setDataCategoria] = useState({
        nombre:"",
        imagen:"",
        descripcion:"",
        caracteristicas:"",
        precio:""
    });
    const onchange=(e)=>{
        setDataCategoria({
            ...dataCategoria, 
            [e.target.name]:e.target.value
        }
    )}
    const guardarCategoria=async()=>{
        await registrarProducto(dataCategoria)
    }

  return (
    <div className="contenedor-registro-categoria">
        <div className="formulario-registro-categoria">
            <img
                alt='icono-cerrar'
                src={icono_cerrar}
                onClick={()=>setModal(false)}
            />
             <h2>Nueva categoria</h2>

             <label>Nombre</label>
             <input
                type="text"
                name='nombre'
                onChange={onchange}
             />
             <label>Imagen</label>
             <input
                type="file"
                name='imagen'
                onChange={onchange}
             />
             <input
                type="submit"
                value="Guardar"
                onClick={guardarCategoria}
             />
        </div>    
    </div>
  )
}

export default ModalRegistroCategoria
