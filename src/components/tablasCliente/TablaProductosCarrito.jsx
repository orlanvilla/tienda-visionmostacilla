import './TablaProductosCarrito.css'
import { useContext, useState, useEffect } from 'react'
import { AppContext } from '../../context/AppContext'
import { useNavigate } from 'react-router-dom'
import img_eliminar from '../../img/trash.svg'
import img_menos from '../../img/dash-white.svg'
import img_mas from '../../img/plus-lg-white.svg'
import Pagos from '../../pagos/Pagos'

const TablaProductosCarrito = () => {   

  const navigate=useNavigate();

  const{listaCompras, setListaCompras, setModal, setCantidadProductos,totalCompra, setTotalCompra}=useContext(AppContext)
  
  const [cambio, setCambio] = useState(false);
  const iterarProductosCantidad=()=>{
    let suma = 0
    listaCompras.forEach(p=>{    
      suma+=p.cantidad  
    })
    setCantidadProductos(suma) 
  }

  const calcularTotal=()=>{
    let valor=0
    listaCompras.forEach(producto=>{
        valor += producto.subtotal
    })
    setTotalCompra(valor)
    iterarProductosCantidad()
  }
  useEffect(() => {
    calcularTotal();
  }, [listaCompras, cambio]);

  const eliminarProductoCarrito=(id)=>{
     const listaFiltrada=listaCompras.filter(producto=>producto.id !== id)     
     setListaCompras(listaFiltrada)
     return listaFiltrada
  }
  const sumarCantidadProducto=(id)=>{
      const productoEditar=listaCompras.find(producto=>producto.id===id)        
      productoEditar.cantidad+=1    
      productoEditar.subtotal=productoEditar.precioUnidad * productoEditar.cantidad                 
      setCambio(!cambio)        
  }
  const restarCantidadProducto=(id)=>{
    const productoEditar=listaCompras.find(producto=>producto.id===id)
    productoEditar.cantidad-=1 
    if(productoEditar.cantidad===0){
      eliminarProductoCarrito(id)
      return
    }       
    productoEditar.subtotal=productoEditar.precioUnidad * productoEditar.cantidad  
    setCambio(!cambio) 
  }

  const handleSeguirComprando=()=>{
    setModal(false)
    window.scroll({
      top:380
    })
  }

  const handlePagar=()=>{
    setModal(false)
    navigate('/pagos')
  }

  return (
    <div className='contenedor-lista-carrito'>    
      <div  className='tabla-carrito'>
        <div className='titulo-car'>
          <h3>CARRITO DE COMPRAS</h3>
        </div>
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

                  {listaCompras.map(productoIndividual=>(
                    <tr>                
                            <td>
                              <img
                                alt='img-producto'
                                src={productoIndividual.imagen}
                                style={{width:'7rem'}}
                              />
                              <p>{productoIndividual.nombre}</p>
                            </td>
                            <td>{productoIndividual.precioUnidad}</td>
                            <td >
                              <div className='cantidad-car'>
                                <img src={img_menos} alt="menos" onClick={()=>restarCantidadProducto(productoIndividual.id)}/>
                                <span>{productoIndividual.cantidad}</span>
                                {productoIndividual.cantidad<productoIndividual.cantidadExistente? 

                                  <img src={img_mas} alt="mas" onClick={()=>sumarCantidadProducto(productoIndividual.id)} style={{background:"black"}}/>
                                  :
                                  <img src={img_mas} alt="mas"  style={{background:"red"}}/>
                                }                                
                              </div>                             
                            </td>  
                            <td>{productoIndividual.subtotal}</td>
                            <td >
                              <img
                                src={img_eliminar}
                                alt="icono-eliminar"
                                onClick={()=>eliminarProductoCarrito(productoIndividual.id)}
                              />
                            </td>
                        </tr>
                  ))}                 
                       
                  </tbody>
                 
            </table> 

        </div> 
          <div className='input-pagar'>
            <div className='input-pagar_left'>
            <h3>TOTAL:<span>${totalCompra} </span></h3>
            <input
                type="submit"
                value="Pagar"
                onClick={handlePagar}
              />
            </div>
            <div className='input-pagar_right'>
            <input 
                type="submit"
                value="Seguir comprando" 
                onClick={handleSeguirComprando}
              />
            </div>
          </div>                  
      </div>
    </div>
  )
}
// comentario
export default TablaProductosCarrito