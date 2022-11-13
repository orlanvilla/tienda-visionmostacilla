import { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import './TablaVentas.css'
import icon_eye from '../../img/eye.svg'
import icon_trash from '../../img/trash.svg'
import icon_pencil from '../../img/pencil-square.svg'
import ModalRegistroVenta from '../modales/ModalRegistroVenta'

const TablaVentas = () => {   
  const {modal, setModal,ventas}=useContext(AppContext);

  const handleAbrirModal=()=>{
    setModal(true)
  }
  return (
    <div className='contenido-tablaingresos-ventas'>
      {modal&& <ModalRegistroVenta/>}
      <div className='input-nuevoingreso-ventas'>
        <input
          type="submit"
          value="Nueva Venta"
          onClick={handleAbrirModal}
        />
        </div>
      <div  className='tabla-ingresos-ventas'>
        <div className='tabla'>
            <table>
                <thead>
                    <tr>           
                        
                        <th>Fecha</th>
                        <th>Hora</th>                                      
                        <th>Valor</th>
                        <th>Estado</th>
                        <th>Áccion</th>
                    </tr>
                </thead>
                <tbody className='cuerpo'>   
                   {
                    ventas.map(venta => (
                      <tr>                
                          <td>{venta.fecha}</td>
                          <td>{venta.hora}</td>
                          <td>{venta.valor}</td>
                          <td>{venta.estado}</td>
                          <td>
                          <div className='accion'>
                                <button>
                                  <img src={icon_eye} alt="logo visualizacion"/>
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
export default TablaVentas
