import React, { useState, useContext, Component } from 'react'
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import './HomeAdministracion.css' 
import logo_tienda from '../img/logo.png'
import Productos from './Productos';
import Ventas from './Ventas';
import Empleados from './Empleados';
import Categorias from './Categorias';
import { PeticionesApi } from '../PeticionesApi/PeticionesApi';

 
const HomeAdministracion = () => {
    const [vista, setVista] = useState(<Productos/>);
    const {cargarVentas} = PeticionesApi()
    const {setLogueado}=useContext(AppContext)
    const navigate=useNavigate();
    const botonp = document.querySelector('.btn-p');
    const botonv = document.querySelector('.btn-v');
    const botone = document.querySelector('.btn-e');
    const botonc = document.querySelector('.btn-c');
    const mostrarVistaProductos=()=>{
        setVista(<Productos/>)
        botonp.classList.toggle("botonp-activo",true)
        botonv.classList.toggle("botonp-activo",false)
        botonesBloqueUno()
    }  
    const mostrarVistaVentas= async ()=>{
        setVista(<Ventas/>)
        botonp.classList.toggle("botonp-activo",false)
        botonv.classList.toggle("botonp-activo",true)
        botonesBloqueUno()
        //Cargamos la informacion de ventas
        await cargarVentas()
    }
    const mostrarVistaEmpleados=()=>{
        setVista(<Empleados/>)
        botonesBloqueDos()
        botone.classList.toggle("botonp-activo",true)
        botonc.classList.toggle("botonp-activo",false)
    }
    const mostrarVistaCategorias=()=>{
        setVista(<Categorias/>)
        botonesBloqueDos()
        botone.classList.toggle("botonp-activo",false)
        botonc.classList.toggle("botonp-activo",true)
    }
    const botonesBloqueUno=()=>{
        botonp.classList.toggle("btn-p2",false)
        botone.classList.toggle("botonp-activo",false)
        botonc.classList.toggle("botonp-activo",false)
    }
    const botonesBloqueDos=()=>{
        botonp.classList.toggle("btn-p2",false)
        botonp.classList.toggle("botonp-activo",false)
        botonv.classList.toggle("botonp-activo",false)
    }
    const cerrarSesion=()=>{
        setLogueado(false)
        navigate("/home")
    }

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
                <button className='btn-p btn-p2' onClick={mostrarVistaProductos}>Productos</button>
                <button className='btn-v' onClick={mostrarVistaVentas}>Ventas</button>
                <button className='btn-e' onClick={mostrarVistaEmpleados}>Empleados</button>
                <button className='btn-c' onClick={mostrarVistaCategorias}>Categorias</button>
                <button 
                className='btn-saliradmin'
                onClick={cerrarSesion}
                >Salir</button>
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
