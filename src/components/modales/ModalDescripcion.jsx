import { useContext, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import './ModalDescripcion.css'
import btn_close from '../../img/close.svg'
import icon_plus from '../../img/plus-circle.svg'
import icon_dash from '../../img/dash-circle.svg'

const ModalDescripcion = () => {
  const {setModal2, producto, setListaCompras, listaCompras}=useContext(AppContext);
  const [cantidad, setCantidad] = useState(1);
  const [informacionIndividualProducto, setInformacionIndividualProducto] = useState({
    id:producto._id,
    imagen:producto.imagen,
    nombre:producto.nombre,
    precioUnidad:producto.precio,
    cantidad:0,
    subtotal:0
    
  });
  
  const handleCerrar=(e)=>{
    e.preventDefault()
    setModal2(false);      
  }
  const handleAgregarProducto=()=>{
    informacionIndividualProducto.cantidad=cantidad
    let subtotalProducto=informacionIndividualProducto.precioUnidad*cantidad
    informacionIndividualProducto.subtotal=subtotalProducto
    listaCompras.push(informacionIndividualProducto)
    setListaCompras(listaCompras)
  }
  const sumarCantidadProducto=()=>{
    setCantidad(cantidad+1)
  }
  const restarCantidadProducto=()=>{
    if(cantidad>1){
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
                <p>Categoría: <span>Colibrí llavero</span></p>
                <p>Detalle del Producto</p>
                <p>
                  <span>
                    {producto.descripcion}
                  </span>
                </p>
                <p>Cantidad: </p>
                <div className='botones-cantidad'>
                  <button
                  onClick={restarCantidadProducto}
                  >
                      <img src={icon_dash} alt="logo restar" 
                        
                      />
                  </button>
                  <input type="text" value={cantidad} disabled/>
                  <button
                   onClick={sumarCantidadProducto}
                  >
                      <img src={icon_plus} alt="logo sumar" />
                  </button>
                </div>            
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
