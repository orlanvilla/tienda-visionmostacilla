import { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import { PeticionesApi } from '../../PeticionesApi/PeticionesApi'
import './TablaEmpleados.css'
import icon_eye from '../../img/eye.svg'
import icon_trash from '../../img/trash.svg'
import icon_pencil from '../../img/pencil-square.svg'
import ModalRegistroEmpleado from '../modales/ModalRegistroEmpleado'


const TablaEmpleados = () => {   
  const {modal, setModal, empleados, empleado, setEmpleado}=useContext(AppContext);
  const {buscarEmpleado, eliminarEmpleado, cargarEmpleados}=PeticionesApi()

  const handleAbrirModal=()=>{
    setEmpleado({})
    setModal(true)
  }

const handleEditarEmpleado=(id)=>{
  
  buscarEmpleado(id)
  setModal(true)
}
const handleEliminarEmpleado=async(id)=>{
  await eliminarEmpleado(id)
  await cargarEmpleados();
  console.log(id)
}
  return (
    <div className='contenido-tablaingresos-empleados'>
      {modal&& <ModalRegistroEmpleado/>}
      <div className='input-nuevoingreso-empleados'>
        <input
          type="submit"
          value="Nuevo Empleado"
          onClick={handleAbrirModal}
        />
        </div>
      <div  className='tabla-ingresos'>
        <div className='tabla'>
            <table>
                <thead>
                    <tr>           
                        <th width="37%">Cédula</th>
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Teléfono</th>                                      
                        <th>Dirección</th>
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody className='cuerpo'>   
                   {empleados.map(e=>(
                    <tr>                
                        <td>{e.cedula}</td>
                        <td>{e.nombre}</td>
                        <td>{e.email}</td>
                        <td>{e.telefono}</td>
                        <td>{e.direccion}</td>
                        <td>
                          <div className="accion">
                          <button>
                              <img 
                              src={icon_pencil} 
                              alt="logo"
                              onClick={()=>handleEditarEmpleado(e._id)}
                               />
                            </button>
                            <button>
                              <img 
                                src={icon_trash} 
                                alt="logo"
                                onClick={()=>handleEliminarEmpleado(e._id)}
                                 />
                                
                            </button>
                            </div>                         
                        </td>
                    </tr>

                   ))}
                        

                </tbody>
            </table>
            </div>           
        </div>
    </div>
  )
}
// comentario
export default TablaEmpleados
