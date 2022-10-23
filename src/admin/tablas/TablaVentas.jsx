
import './TablaVentas.css'

const TablaVentas = () => {   
    
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
                            <button>Modificar</button>
                            <button>Eliminar</button>
                            <button>Ver</button>
                          
                        </td>
                    </tr>

                </tbody>
            </table>           
        </div>
    </div>
  )
}
// comentario
export default TablaVentas
