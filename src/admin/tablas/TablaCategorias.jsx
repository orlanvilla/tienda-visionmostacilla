import { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import './TablaCategoria.css'
import icon_trash from '../../img/trash.svg'
import icon_pencil from '../../img/pencil-square.svg'
import ModalRegistroEmpleado from '../modales/ModalRegistroCategorias'

const TablaEmpleados = () => {   
  const {modal, setModal}=useContext(AppContext);

  const handleAbrirModal=()=>{
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
            <table>
                <thead>
                    <tr>           
                        <th width="37%">Nombre</th>
                        <th>Icono</th>                                      
                        <th >Acción</th>
                    </tr>
                </thead>
                <tbody className='cuerpo'>   
                        <tr>                
                        <td>Colibrí mediano</td>
                        <td>$ 20.000</td>
                        <td>
                          <div className='accion'>
                            <button>
                              <img src={icon_pencil} alt="logo" onClick={()=>handleAbrirModal()}/>
                            </button>
                            <button>
                               <img src={icon_trash} alt="logo" />
                            </button> 
                           </div>                        
                        </td>
                    </tr>

                </tbody>
            </table>           
        </div>
    </div>
  )
}
// comentario
export default TablaEmpleados