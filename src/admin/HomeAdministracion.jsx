import { useState } from 'react'
import './HomeAdministracion.css' 
import logo_tienda from '../img/logo.png'
import Productos from './Productos';
import Ventas from './Ventas';
import Empleados from './Empleados';
const HomeAdministracion = () => {

    const [vista, setVista] = useState(<Productos/>);

    const mostrarVistaProductos=()=>setVista(<Productos/>)   
    const mostrarVistaVentas=()=>setVista(<Ventas/>)
    const mostrarVistaEmpleados=()=>setVista(<Empleados/>)

  return (
    <div className="contenedor-administracion">   
            
        <div className="menu-administracion">
            <section className='logo-container'>
                <img
                    alt='logo'
                    src={logo_tienda}
                />
            </section>
            <section className='btn-menu'>
                <button onClick={mostrarVistaProductos}>Productos</button>
                <button onClick={mostrarVistaVentas}>Ventas</button>
                <button onClick={mostrarVistaEmpleados}>Empleados</button>
                <button className='btn-saliradmin'>Salir</button>
            </section>           

        </div>
            <div className='contenido-administracion'>
                <div className='titulo-administracion'>
                    <h2>Administración Visión en Mostacilla</h2>
                </div>
                <div>
                    {vista}
                </div>

            </div>
      
      
    </div>
  )
}

export default HomeAdministracion
