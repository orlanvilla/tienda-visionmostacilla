import { useContext, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import './ModalRegistroProducto.css'
import icono_cerrar from '../../img/close.svg'
import { PeticionesApi } from '../../PeticionesApi/PeticionesApi'
 
//funion
const ModalRegistroProducto = () => {
    const {setModal,producto,setProducto}=useContext(AppContext);
    const {registrarProducto,cargarProductos,editarProducto}=PeticionesApi();
    const [data, setData] = useState(new FormData())
    const [imagenTemporal, setImagenTemporal] = useState(false);

    const [dataProducto, setDataProducto] = useState({
        nombre:producto.nombre? producto.nombre:"",
        imagen:producto.imagen? producto.imagen:"",
        descripcion:producto.descripcion? producto.descripcion:"",
        caracteristicas:producto.cantidad? producto.caracteristicas:"",
        precio:producto.precio? producto.precio:"",
        cantidad:producto.cantidad? producto.cantidad:"",
        destacado:producto.destacado? producto.destacado:false,
    });
    const onchange=(e)=>{
        //Manejo de los inputs-------------------
        setDataProducto({
            ...dataProducto, 
            [e.target.name]:e.target.value
        })
   }
   //ESTO ES SOLO PARA EL INPUT IMAGEN
   const onChange =(e)=>{
     //--- Escuchador especial para el input de la imagen
     const files = e.target.files;
     const data1 = new FormData();
     data1.append("file", files[0])
     //Clave: upload_preset <----> Valor:Images
     data1.append("upload_preset", "Images")
     setData(data1)

     //Trabajamos la previsualización de la imagen a guardar------------------
    let file = document.getElementById("imgDer").files[0];  
    const reader = new FileReader();
    reader.addEventListener('load', (event) => {
        document.getElementById("imgPreview").src = event.target.result;
    });
    reader.readAsDataURL(file);
    setImagenTemporal(true)
    //-----------------------------------------------------------------------
   }
   
    const guardarProducto=async()=>{

        //Validamos si vamos a tener una operacion de registro o actualizacion
        if(producto.nombre){
           await editarProducto(producto._id,dataProducto)
        }else{
            await registrarProducto(dataProducto,data)
        }
        await cargarProductos()
        setProducto({})
    }
    
    const cerrarModalRegistroProducto=(e)=>{
        e.preventDefault();
        setModal(false)
        setProducto({});
    }

  return (
    <div className="contenedor-registro-producto">
        <div className="formulario-registro-producto">
            <img className='cerrar'
                alt='icono-cerrar'
                src={icono_cerrar}
                onClick={cerrarModalRegistroProducto}
            />
             <h2>Nuevo Producto</h2>

             <label>Nombre</label>
             <input
                type="text"
                name='nombre'
                onChange={onchange}
                defaultValue={dataProducto.nombre}
             />
             <label>Imagen</label>
        
                <input
                    type="file"
                    name='imagen'
                    onChange={onChange}
                    id="imgDer"
                 
                />
                {imagenTemporal && 
                    <img src="" style={{'width':'100px','height':'100px'}} alt="imagen"  id="imgPreview"/>
                }
                {producto.imagen &&                   
                    <img style={{'width':'100px','height':'100px'}} src={dataProducto.imagen} alt="Imagen producto" />
                }
         
             <label>Descripción</label>
            <textarea 
                name='descripcion'
                onChange={onchange}
                defaultValue={dataProducto.descripcion}
            />
             <label>Características</label>
            <textarea
                name='caracteristicas'
                onChange={onchange}
                defaultValue={dataProducto.caracteristicas}
            />
            <label>Precio</label>
             <input
                type="number"
                name='precio'
                onChange={onchange}
                defaultValue={dataProducto.precio}
             />
               <label>Cantidad</label>
             <input
                type="number"
                name='cantidad'
                onChange={onchange}
                defaultValue={dataProducto.cantidad}
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
