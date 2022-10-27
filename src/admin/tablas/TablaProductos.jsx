import { useContext,useEffect } from 'react'
import { AppContext } from '../../context/AppContext'
import './TablaProductos.css'
import icon_eye from '../../img/eye.svg'
import icon_trash from '../../img/trash.svg'
import icon_pencil from '../../img/pencil-square.svg'
import icon_plus from '../../img/plus-circle.svg'
import icon_dash from '../../img/dash-circle.svg'


import ModalRegistroProducto from '../modales/ModalRegistroProducto'
import { PeticionesApi } from '../../PeticionesApi/PeticionesApi'
import ModalVistaProducto from '../../admin/modales/ModalVistaProducto'

const TablaProductos = () => {   
  const {modal, setModal,modal1, setModal1,productos}=useContext(AppContext);
  const {cargarProductos,buscarProducto} = PeticionesApi();

  useEffect(() => {
     cargarProductos()
  }, [])
  
  const handleAbrirModal=()=>{
    setModal(true)
  }
  const handleAbrirProducto=async(id)=>{
    await buscarProducto(id)
    setModal1(true)
  }
    
  return (
    <div className='contenido-tablaingresos-productos'>
    {modal1&& <ModalVistaProducto/>}  
    {modal&& <ModalRegistroProducto/>}
      <div className='input-nuevoingreso-productos'>
        <input
          type="submit"
          value="Nuevo Producto"
          onClick={handleAbrirModal}
          
        />
        </div>
      <div  className='tabla-ingresos-productos'>
            <table>
                <thead>
                    <tr>           
                        <th width="37%">Nombre</th>
                        <th>Precio</th>
                        <th>Cantidad</th>                                      
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody className='cuerpo'>   
                   
                     
                      {productos.map(producto => (
                        <tr>                
                          <td>{producto.nombre}</td>
                          <td>{producto.precio}</td>
                          <td className='contenedor-elementos-cantidad'>
                              <span>50</span>
                              <div className='botones-cantidad'>
                                <button>
                                <img src={icon_dash} alt="logo restar" />
                                </button>
                                <button>
                                <img src={icon_plus} alt="logo sumar" />
                                </button>
                              </div>
  
                          </td>
                          <td className='contenedor-elementos-Accion'>
                              <button>
                                <img src={icon_pencil} alt="logo editar" />
                              </button>
                              <button>
                                <img src={icon_trash} alt="logo eliminar" />
                              </button>
                              <button>
                                <img src={icon_eye} alt="logo visualizacion" onClick={()=>handleAbrirProducto(producto._id)}/>
                              </button>
                          </td>
                        </tr>
                      ))}

                </tbody>
            </table>           
        </div>
    </div>
  )
}
// comentario
export default TablaProductos
