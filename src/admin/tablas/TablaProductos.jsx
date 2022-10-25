
import './TablaProductos.css'
import icon_eye from '../../img/eye.svg'
import icon_trash from '../../img/trash.svg'
import icon_pencil from '../../img/pencil-square.svg'

const TablaProductos = () => {   
    
  return (
    <div className='contenido-tablaingresos'>
      <div className='input-nuevoingreso'>
        <input
          type="submit"
          value="Nuevo Producto"
          
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
