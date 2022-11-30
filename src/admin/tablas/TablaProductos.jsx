import { useContext,useEffect,useState, useRef } from 'react'
import { AppContext } from '../../context/AppContext'
import './TablaProductos.css'
import icon_eye from '../../img/eye.svg'
import icon_trash from '../../img/trash.svg'
import icon_pencil from '../../img/pencil-square.svg'
import icon_plus from '../../img/plus-circle.svg'
import icon_dash from '../../img/dash-circle.svg'


import ModalRegistroProducto from '../modales/ModalRegistroProducto'
import { PeticionesApi } from '../../PeticionesApi/PeticionesApi'
import ModalVistaProducto from '../../admin/modales/ModalVistaProducto'
import iconEstrellaFalse from '../../img/star-regular.svg'
import iconEstrellaTrue from '../../img/star-solid.svg'



const TablaProductos = () => {   

  const {modal, setModal,modal1, setModal1,setProductos, productos,producto, productosFiltrados, categorias, usuario}=useContext(AppContext);
  const {cargarProductos,buscarProducto,eliminarProducto,destacarProducto,sumarCantidadProducto,restarCantidadProducto,cargarCategorias, filtrarProductosNombre,  filtrarProductosCategoria} = PeticionesApi();
 
  const busqueda=useRef(null);
  const categoria=useRef(null);

  useEffect(() => {
     cargarProductos()
     cargarCategorias()
  }, [])

  //funcion para abrir modal de registro de nuevo producto
  const handleAbrirModal=()=>{
    setModal(true)
  }
  //Funcion para mostrar la tarjeta del producto
  const handleAbrirProducto=async(id)=>{
    await buscarProducto(id)
    setModal1(true)
  }
  //funcion para eliminar un producto
  const handleEliminarProducto=async(id)=>{
    await eliminarProducto(id)
    await cargarProductos()
  }
  //funcion para editar un producto
  const handleEditarProducto=async(id)=>{
    //Seteamos producto editar en la variable global
    await buscarProducto(id)
    setModal(true)
  }
  //Cambiar estado de destacado
  const handleDestacar = async(id) =>{
    await destacarProducto(id)
    await cargarProductos()
  }
  //Sumar existencia a producto
  const handleSumar = async(id) =>{
    await sumarCantidadProducto(id);
    await cargarProductos()
  }
  //Restar existencia a producto
  const handleRestar = async(id) =>{
    await restarCantidadProducto(id);
    await cargarProductos()
  }
  const onchangeBusqueda=async()=>{
    //obtenemos el valor del input con useRef
    let caracter=busqueda.current.value;
    await filtrarProductosNombre(caracter)     
  }

  const onchangeBusquedaCategoria=async()=>{
    filtrarProductosCategoria(categoria.current.value);
  }


  return (
    <div className='contenido-tablaingresos-productos'>
    {modal1&& <ModalVistaProducto/>}  
    {modal&& <ModalRegistroProducto/>}
      <div className='input-nuevoingreso-productos'>
            <input
              type="text"
              placeholder="buscar"   
              ref={busqueda}
              onChange={onchangeBusqueda}           
            />
            <select
                ref={categoria}    
                onChange={onchangeBusquedaCategoria}                  
                >
                <option>Todas las categorías</option>
                {categorias.map(cat=>(
                    <option    
                        value={cat.nombre}
                    >{cat.nombre}</option>
                ))} 
            </select>
            <input
              type="submit"
              value="Nuevo Producto"
              onClick={handleAbrirModal}
              
            />
        </div>
      <div  className='tabla-ingresos-productos'>
      <div className='tabla'>      
            <table >
                <thead>
                    <tr>           
                        <th width="35%">Producto</th>
                        <th>Categoría</th>
                        <th>Precio</th>
                        <th>Cantidad</th>                                      
                        <th>Acción</th>  
                    </tr>
                </thead>

               
                <tbody className='cuerpo'>   
                      {productosFiltrados.map(producto => (
                        <tr>                
                          <td>{producto.nombre}</td>                          
                          <td>{producto.categoria}</td>                          
                          <td>{producto.precio}</td>
                          <td className='contenedor-elementos-cantidad'>
                            <button>
                                <img src={icon_dash} alt="logo restar" onClick={()=>handleRestar(producto._id)}/>
                            </button>
                            <span>{producto.cantidad}</span>
                            <button>
                                <img src={icon_plus} alt="logo sumar" onClick={()=>handleSumar(producto._id)}/>
                            </button>
                          </td>
                          <td>
                            <div className='accion'>
                                <button>
                                  <img src={icon_pencil} alt="logo editar" onClick={()=>handleEditarProducto(producto._id)}/>
                                </button>
                                <button>
                                  <img src={icon_trash} alt="logo eliminar" onClick={()=>handleEliminarProducto(producto._id)}/>
                                </button>
                                <button>
                                  <img src={icon_eye} alt="logo visualizacion" onClick={()=>handleAbrirProducto(producto._id)}/>
                                </button>
                                 {usuario.tipo==="administracion" && 
                                 <>
                                 {
                                  !producto.destacado &&
                                  <img src={iconEstrellaFalse} alt="" onClick={()=>handleDestacar(producto._id)}/>
                                }
                                {
                                  producto.destacado &&
                                  <img src={iconEstrellaTrue} alt="" onClick={()=>handleDestacar(producto._id)}/>
                                }
                                 </>
                                 
                                 }                             
                               
                            </div>
                          </td>
                        </tr>
                      ))}

                </tbody>              
            </table> 
           </div>          
        </div>
    </div>
  )
}
// comentario
export default TablaProductos
