import { useContext, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import './ModalRegistroCategorias.css'
import icono_cerrar from '../../img/close.svg'
import { PeticionesApi } from '../../PeticionesApi/PeticionesApi'
 

const ModalRegistroCategoria = () => {
    const {setModal,categoria,setCategoria}=useContext(AppContext);
    const {registrarCategoria,cargarCategorias,editarCategoria}=PeticionesApi();
    const [data, setData] = useState(new FormData())
    const [imagenTemporal, setImagenTemporal] = useState(false);


    const [dataCategoria, setDataCategoria] = useState({
        nombre:categoria.nombre? categoria.nombre:"",
        imagen:categoria.imagen? categoria.imagen:""
    });
    const onchange=(e)=>{
        setDataCategoria({
            ...dataCategoria, 
            [e.target.name]:e.target.value
        }
    )}
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
    const guardarCategoria=async()=>{
        //Validamos si esta guardando o editando
        if(categoria.nombre){
          await editarCategoria(categoria._id,dataCategoria) 
          setModal(false);
        }else{
            await registrarCategoria(dataCategoria,data)
        }
        await cargarCategorias()
        setCategoria({})
    }
    const handleCerrarModal = ()=>{
        setModal(false);
        setCategoria({})
    }

  return (
    <div className="contenedor-registro-categoria">
        <div className="formulario-registro-categoria">
            <img
                className='cerrar'
                alt='icono-cerrar'
                src={icono_cerrar}
                onClick={handleCerrarModal}
            />
             <h2>{categoria.nombre ? "Editar Categoria" :"Nueva categoria"}</h2>

             <label>Nombre</label>
             <input
                type="text"
                name='nombre'
                onChange={onchange}
                defaultValue={dataCategoria.nombre}
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
              {categoria.imagen &&                   
                  <img style={{'width':'100px','height':'100px'}} src={dataCategoria.imagen} alt="Imagen producto" />
              }
             <input
                type="submit"
                value={categoria.nombre ? "Editar": "Guardar"}
                onClick={guardarCategoria}
             />
        </div>    
    </div>
  )
}

export default ModalRegistroCategoria
