import { useContext, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import './ModalRegistroProducto.css'
import icono_cerrar from '../../img/close.svg'
import { PeticionesApi } from '../../PeticionesApi/PeticionesApi'
 
//funion
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
        //Manejo de los inputs-------------------
        setDataProducto({
            ...dataProducto, 
            [e.target.name]:e.target.value
        })
       
   }
   const onChange =(e)=>{
     //--- Escuchador especial para el input de la imagen
     const files = e.target.files;
     const data1 = new FormData();
     data1.append("file", files[0])
     data1.append("upload_preset", "Images")
     setData(data1)
   }
   
    const guardarProducto=async()=>{
        await registrarProducto(dataProducto,data)
        await cargarProductos()
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
                type="file"
                name='imagen'
                onChange={onChange}
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
