import './TablaProductosCarrito.css'
import { useContext, useState, useEffect } from 'react'
import { AppContext } from '../../context/AppContext'
import img_eliminar from '../../img/trash.svg'
import img_menos from '../../img/dash-circle.svg'
import img_mas from '../../img/plus-circle.svg'

const TablaProductosCarrito = () => {   
  const{listaCompras, setListaCompras, setModal}=useContext(AppContext)
  const [totalCompra, setTotalCompra] = useState(0);  
  const [cambio, setCambio] = useState(false);
 

  const calcularTotal=()=>{
    let valor=0
    listaCompras.forEach(producto=>{
        valor += producto.subtotal
    })
    setTotalCompra(valor)
  }
  useEffect(() => {
    calcularTotal();
  }, [listaCompras, cambio]);

  const eliminarProductoCarrito=(id)=>{
     const listaFiltrada=listaCompras.filter(producto=>producto.id !== id)     
     setListaCompras(listaFiltrada)
     //calcularTotal();
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
      top:440
    })

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
                                  <img src={img_mas} alt="mas" onClick={()=>sumarCantidadProducto(productoIndividual.id)}/>
                                  :
                                  null
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
                <h3>total:<span> {totalCompra} </span></h3>
        </div> 
          <div className='input-pagar'>
              <input 
                type="submit"
                value="Seguir comprando" 
                onClick={handleSeguirComprando}
              />
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