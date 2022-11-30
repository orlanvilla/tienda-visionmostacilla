import { useContext, useState, useEffect } from 'react'
import { AppContext } from '../../context/AppContext'
import './ModalRegistroEmpleado.css'
import icono_cerrar from '../../img/close.svg'
import { PeticionesApi } from '../../PeticionesApi/PeticionesApi'
 

const ModalRegistroEmpleado = () => {
    const {setModal, empleado, setEmpleado}=useContext(AppContext);
    const {registrarEmpleado, cargarEmpleados, editarEmpleado}=PeticionesApi();//*
    const [dataEmpleado, setDataEmpleado] = useState({
        cedula:empleado.cedula? empleado.cedula:"",
        nombre:empleado.nombre? empleado.nombre:"",
        email:empleado.email? empleado.email:"",
        telefono:empleado.telefono? empleado.telefono:"",
        direccion: empleado.direccion? empleado.direccion:""
    });
    const onchange=(e)=>{
        setDataEmpleado({
            ...dataEmpleado, 
            [e.target.name]:e.target.value
        }
    )}
    const guardarEmpleado=async()=>{
        // console.log(empleado)
        if(empleado.cedula){
            await editarEmpleado(empleado._id, dataEmpleado)
            console.log("actualizando")
        }else{
            await registrarEmpleado(dataEmpleado)
            console.log("registrando")
        }
        console.log(dataEmpleado)
        
        await cargarEmpleados()
        setModal(false)      
    }  
    const handleCerrarModalEmpleado=()=>{
        setModal(false)
        setEmpleado({})
        
    }
    useEffect(() => {
      console.log(dataEmpleado)
    }, []);
  return (
    <div className="contenedor-registro-empleado">
        <div className="formulario-registro-empleado">
            <img
                alt='icono-cerrar'
                src={icono_cerrar}
                onClick={handleCerrarModalEmpleado}
            />
            
             <h2>{!empleado.cedula? "Nuevo Empleado" : "Editar Empleado"}</h2>

             <label>Cédula</label>
             <input
                type="text"
                name='cedula'
                defaultValue={dataEmpleado.cedula}
                onChange={onchange}
             />
             <label>Nombre</label>
             <input
                type="text"
                name='nombre'
                defaultValue={dataEmpleado.nombre}
                onChange={onchange}
             />
             <label>Email</label>
             <input
                type="email"
                name='email'
                defaultValue={dataEmpleado.email}
                onChange={onchange}
             />
             <label>Teléfono</label>
             <input
                type="text"
                name='telefono'
                defaultValue={dataEmpleado.telefono}
                onChange={onchange}
             />            
            <label>dirección</label>
             <input
                type="text"
                name='direccion'
                defaultValue={dataEmpleado.direccion}
                onChange={onchange}
             />            
            <button
            onClick={guardarEmpleado}
            >{!empleado.cedula? "Registrar" : "Actualizar"}</button>
        </div>    
    </div>
  )
}

export default ModalRegistroEmpleado
