import { useRef, useContext } from 'react'
import { AppContext } from '../../context/AppContext';
import './ModalSesionAdmin.css'
import { useNavigate } from 'react-router-dom';
import { PeticionesApi } from '../../PeticionesApi/PeticionesApi';
import Swal from 'sweetalert2';


const ModalSesionAdmin = ({setModalSesion}) => {

  const navigate=useNavigate();
  const {setLogueado}=useContext(AppContext)
  const {cargarVentas, cargarEmpleados, buscarUsuario} = PeticionesApi();

  const user=useRef(null);
  const pass=useRef(null);

  const iniciarSesion=async()=>{
     if(buscarUsuario(user.current.value, pass.current.value)){
       setLogueado(true)
       navigate("/admin")
       //Una vez se inicie sesion cargamos la informacion en el panel de administracion
       await cargarVentas()
       await cargarEmpleados()
     }else{
      Swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'Usuario o contraseña incorrecta',
        timer: 1500,
        showConfirmButton:false
      })
     }
  }

  return (
    <div className="contenedor-sesion">
        <div className='contenido-sesion'>
            <h3>Ingreso Administración</h3>
            
            <label>Usuario</label>
            <input
              type="text"
              ref={user}              
            />
            <label>Contraseña</label>
            <input
              ref={pass}
              type="password"
            />

            <div className='btn-sesion'>              
                <input
                  type="submit"
                  value='Ingresar'
                  onClick={iniciarSesion}
                />
                  <input
                  type="submit"
                  value='Cancelar'
                  onClick={()=>setModalSesion(false)}
                />
            </div>
          

        </div>      
    </div>
  )
}

export default ModalSesionAdmin
