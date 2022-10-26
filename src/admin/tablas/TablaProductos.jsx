import { useContext,useEffect } from 'react'
import { AppContext } from '../../context/AppContext'
import './TablaProductos.css'
import icon_eye from '../../img/eye.svg'
import icon_trash from '../../img/trash.svg'
import icon_pencil from '../../img/pencil-square.svg'
import ModalRegistroProducto from '../modales/ModalRegistroProducto'
import { PeticionesApi } from '../../PeticionesApi/PeticionesApi'
import ModalDescripcion from '../../components/modales/ModalDescripcion'

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
    <div className='contenido-tablaingresos'>
    {modal1&& <ModalDescripcion/>}
    {modal&& <ModalRegistroProducto/>}

      <div className='input-nuevoingreso'>
        <input
          type="submit"
          value="Nuevo Producto"
          onClick={handleAbrirModal}
          
        />
        </div>
      <div  className='tabla-ingresos'>
            <table>
                <thead>
                    <tr>           
                        <th width="37%">Nombre</th>
                        <th>Precio</th>
                        <th>Cantidad</th>                                      
                        <th >Acción</th>
                    </tr>
                </thead>
                <tbody className='cuerpo'>   
                   
                     
                      {productos.map(producto => (
                        <tr>                
                          <td>{producto.nombre}</td>
                          <td>{producto.precio}</td>
                          <td>50</td>
                          <td>
                              <button>
                                <img src={icon_pencil} alt="logo" />
                              </button>
                              <button>
                                <img src={icon_trash} alt="logo" />
                              </button>
                              <button>
                                <img src={icon_eye} alt="logo" onClick={()=>handleAbrirProducto(producto._id)}/>
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
