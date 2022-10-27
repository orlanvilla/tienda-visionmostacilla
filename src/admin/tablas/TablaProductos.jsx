import { useContext,useEffect,useState } from 'react'
import { AppContext } from '../../context/AppContext'
import './TablaProductos.css'
import icon_eye from '../../img/eye.svg'
import icon_trash from '../../img/trash.svg'
import icon_pencil from '../../img/pencil-square.svg'
import ModalRegistroProducto from '../modales/ModalRegistroProducto'
import { PeticionesApi } from '../../PeticionesApi/PeticionesApi'
import ModalDescripcion from '../../components/modales/ModalDescripcion'
import iconEstrellaFalse from '../../img/star-regular.svg'
import iconEstrellaTrue from '../../img/star-solid.svg'


const TablaProductos = () => {   

  const {modal, setModal,modal1, setModal1,productos,producto}=useContext(AppContext);
  const {cargarProductos,buscarProducto,eliminarProducto,destacarProducto} = PeticionesApi();
 

  useEffect(() => {
     cargarProductos()
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
  return (
    <div className='contenido-tablaingresos-productos'>
    {modal1&& <ModalDescripcion/>}  
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
                        <th>Acción</th>
                        <th>Destacar</th>
                    </tr>
                </thead>
                <tbody className='cuerpo'>   
                   
                     
                      {productos.map(producto => (
                        <tr>                
                          <td>{producto.nombre}</td>
                          <td>{producto.precio}</td>
                          <td>{producto.destacado}</td>
                          <td>
                              <button>
                                <img src={icon_pencil} alt="logo" onClick={()=>handleEditarProducto(producto._id)}/>
                              </button>
                              <button>
                                <img src={icon_trash} alt="logo" onClick={()=>handleEliminarProducto(producto._id)}/>
                              </button>
                              <button>
                                <img src={icon_eye} alt="logo" onClick={()=>handleAbrirProducto(producto._id)}/>
                              </button>
                          </td>
                          {
                            producto.cantidad === 0 &&
                          <td>
                            <img src={iconEstrellaFalse} alt="" onClick={()=>handleDestacar(producto._id)}/>
                          </td>
                          }

                          {
                            producto.cantidad === 1 &&
                          <td>
                            <img src={iconEstrellaTrue} alt="" onClick={()=>handleDestacar(producto._id)}/>
                          </td>
                          }
                        </tr>
                      ))}

                </tbody>
            </table>           
        </div>
    </div>
  )
}
// comentario
export default TablaProductos
