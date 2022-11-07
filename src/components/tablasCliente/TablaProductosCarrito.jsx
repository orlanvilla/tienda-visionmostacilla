import './TablaProductosCarrito.css'
import img_producto from '../../img/colibri-grande.jpeg'
import img_eliminar from '../../img/trash.svg'

const TablaProductosCarrito = () => {   
 
  return (
    <div className='contenedor-lista-carrito'>    
      <div  className='tabla-carrito'>
        <div className='tabla'>
            <table>
                  <thead>
                      <tr>           
                          <th width="30%">Producto</th>
                          <th>Precio Unidad</th>                                      
                          <th >Cantidad</th>
                          <th>Subtotal</th>
                          <th width="4%"></th>
                      </tr>
                  </thead>
                  <tbody>                   
                        <tr>                
                            <td>
                              <img
                                alt='img-producto'
                                src={img_producto}
                                style={{width:'7rem'}}
                              />
                              <p>Colibri</p>
                            </td>
                            <td>$ 25000</td>
                            <td>4</td>
                            <td>$ 100000</td>
                            <td >
                              <img
                                src={img_eliminar}
                                alt="icono-eliminar"
                              />
                            </td>
                        </tr>
                  </tbody>
                 
            </table> 
                <h3>total:<span> {" "} $1000000</span></h3>
        </div> 
          <div className='input-pagar'>
              <input
                type="submit"
                value="Pagar"
              />
          </div> 
                 
      </div>
    </div>
  )
}
// comentario
export default TablaProductosCarrito