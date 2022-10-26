import { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import './TablaProductos.css'
import icon_eye from '../../img/eye.svg'
import icon_trash from '../../img/trash.svg'
import icon_pencil from '../../img/pencil-square.svg'
import ModalRegistroProducto from '../modales/ModalRegistroProducto'

const TablaProductos = () => {   
  const {modal, setModal}=useContext(AppContext);

  const handleAbrirModal=()=>{
    setModal(true)
  }
    
  return (
    <div className='contenido-tablaingresos-productos'>
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
                        <th >Acción</th>
                    </tr>
                </thead>
                <tbody className='cuerpo'>   
                   
                        <tr>                
                        <td>Colibrí mediano</td>
                        <td>$ 20.000</td>
                        <td>50</td>
                        <td>
                            <button>
                              <img src={icon_pencil} alt="logo" />
                            </button>
                            <button>
                              <img src={icon_trash} alt="logo" />
                            </button>
                            <button>
                              <img src={icon_eye} alt="logo" />
                            </button>
                        </td>
                    </tr>

                </tbody>
            </table>           
        </div>
    </div>
  )
}
// comentario
export default TablaProductos
