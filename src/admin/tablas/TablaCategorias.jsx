import { useContext,useEffect } from 'react'
import { AppContext } from '../../context/AppContext'
import './TablaCategoria.css'
import icon_trash from '../../img/trash.svg'
import icon_pencil from '../../img/pencil-square.svg'
import ModalRegistroEmpleado from '../modales/ModalRegistroCategorias'
import { PeticionesApi } from '../../PeticionesApi/PeticionesApi'

const TablaEmpleados = () => {   
  const {modal, setModal,categorias}=useContext(AppContext);
  const {cargarCategorias,eliminarCategoria,buscarCategoria,editarCategoria} = PeticionesApi();

  useEffect(() => {
    cargarCategorias()
  },[])

  const handleAbrirModal=()=>{
    setModal(true)
  }
  const handleEliminarCategoria=async(id)=>{
    await eliminarCategoria(id);
    await cargarCategorias();
  }
  const handleEditarCategoria=async(id)=>{
    await buscarCategoria(id);
    setModal(true)
  }

  return (
    <div className='contenido-tablaingresos-empleados'>
      {modal&& <ModalRegistroEmpleado/>}
      <div className='input-nuevoingreso-empleados'>
        <input
          type="submit"
          value="Nueva Categoria"
          onClick={handleAbrirModal}
        />
        </div>
      <div  className='tabla-ingresos'>
        <div className='tabla'>
            <table>
                <thead>
                    <tr>           
                        <th width="37%">Nombre</th>
                        <th>Icono</th>                                      
                        <th >Acción</th>
                    </tr>
                </thead>
                <tbody className='cuerpo'>

                     {
                      categorias.map(categoria => (
                        <tr>                
                            <td>{categoria.nombre}</td>
                            <td><img style={{'width':'100px'}} src={categoria.imagen} alt="" /></td>
                            <td>
                              <div className='accion'>
                                <button>
                                  <img src={icon_pencil} alt="logo" onClick={()=>handleEditarCategoria(categoria._id)}/>
                                </button>
                                <button>
                                  <img src={icon_trash} alt="logo" onClick={()=>handleEliminarCategoria(categoria._id)}/>
                                </button> 
                              </div>                        
                            </td>
                        </tr>

                      ))
                     }   

                </tbody>
            </table> 
            </div>          
        </div>
    </div>
  )
}
// comentario
export default TablaEmpleados