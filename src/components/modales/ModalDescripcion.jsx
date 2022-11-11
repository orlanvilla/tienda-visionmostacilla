import { useContext, useState, useEffect } from 'react'
import { AppContext } from '../../context/AppContext'
import './ModalDescripcion.css'
import btn_close from '../../img/close.svg'
import icon_plus from '../../img/plus-lg-white.svg'
import icon_dash from '../../img/dash-white.svg'

const ModalDescripcion = () => {
  const {setModal2, producto, setListaCompras, listaCompras, setModal}=useContext(AppContext);
  const [cantidad, setCantidad] = useState(1);
  const [totalProductoUnitario, setTotalProductoUnitario] = useState(producto.precio);
  const [informacionIndividualProducto, setInformacionIndividualProducto] = useState({
    id:producto._id,
    imagen:producto.imagen,
    nombre:producto.nombre,
    precioUnidad:producto.precio,
    cantidad:0,
    subtotal:0,
    cantidadExistente:producto.cantidad    
  });
  
  const handleCerrar=(e)=>{
    e.preventDefault()
    setModal2(false);      
  }
  const handleAgregarProducto=()=>{
    const productoAux=listaCompras.find(p=>p.id===producto._id)
    if(productoAux===undefined){
      informacionIndividualProducto.cantidad=cantidad
      let subtotalProducto=informacionIndividualProducto.precioUnidad*cantidad
      informacionIndividualProducto.subtotal=subtotalProducto
      listaCompras.push(informacionIndividualProducto)
      setListaCompras(listaCompras)
      setModal2(false)
      setModal(true)
    }else{
      productoAux.cantidad=cantidad
      productoAux.subtotal=informacionIndividualProducto.precioUnidad*cantidad
      setModal2(false)
      setModal(true)
    }   
  }
  const sumarCantidadProducto=()=>{    
    const totalCalculado=producto.precio*(cantidad +1)
    setTotalProductoUnitario(totalCalculado)
    setCantidad(cantidad+1)
    }
  const restarCantidadProducto=()=>{
    if(cantidad>1){
      const totalCalculado=producto.precio*(cantidad -1)
      setTotalProductoUnitario(totalCalculado)
      setCantidad(cantidad-1)
    }else{
      alert("La cantidad minima debe ser una unidad")
    }    
  }
  
  return (
    <div className="contenedor-descripcion">
        
        <div className="contenido-descripcion">
          <img
            className='btn-close'
            alt='img_close'          
            src={btn_close}
            onClick={handleCerrar}
          />
            <div className='detalles'>
              <section className='imagen-descripcion'>
                <img
                  className='img-descripcion'
                  alt='img_descripcion'
                  src={producto.imagen}
                  style={{'width':'30rem','height':'33rem'}}
                />
              </section>
              <section className='caracteristicas-producto-dscrip'>
                <h1>{producto.nombre}</h1>
                <p className='price-2'>Precio: <span>${producto.precio}</span></p>
                <p>Unidades existentes: <span>{producto.cantidad}</span></p>
                <p>Categoría: <span>Colibrí llavero</span></p>
                <p>Detalle del Producto</p>
                <p>
                  <span>
                    {producto.descripcion}
                  </span>
                </p>
                <p>Cantidad a comprar: </p>
                <div className='botones-cantidad'>
                  <button
                  onClick={restarCantidadProducto}
                  >
                      <img src={icon_dash} alt="logo restar" 
                        
                      />
                  </button>
                  <input type="text" value={cantidad} disabled/>

                  {
                    cantidad<producto.cantidad ? 
                    <button
                   onClick={sumarCantidadProducto}                  >
                      <img src={icon_plus} alt="logo sumar" />
                  </button>
                  :
                  <button>
                      <img src={icon_plus} alt="logo sumar" style={{background:'red'}} />
                  </button>
                    
                  }
                 
                  <p>Total calculado: <span>{totalProductoUnitario}</span></p>
                </div>
                {cantidad>=producto.cantidad && <p style={{color:'red', fontSize:"12px"}}>Alcanzó el tope máximo de unidades existentes</p>}            
                <input
                  className='input-car'
                  type="submit"
                  value="Agregar al carrito"
                  onClick={handleAgregarProducto}
                />
              </section>
            </div>
        </div>

    </div>
  )
}


export default ModalDescripcion
