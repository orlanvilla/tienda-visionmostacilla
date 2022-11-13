import { useRef, useContext } from 'react'
import { AppContext } from '../../context/AppContext';
import './ModalSesionAdmin.css'
import { useNavigate } from 'react-router-dom';
import { PeticionesApi } from '../../PeticionesApi/PeticionesApi';


const ModalSesionAdmin = ({setModalSesion}) => {

  const navigate=useNavigate();
  const {setLogueado}=useContext(AppContext)
  const {cargarVentas} = PeticionesApi();

  const user=useRef(null);
  const pass=useRef(null);

  const iniciarSesion=async()=>{
    if(user.current.value==="admin" && pass.current.value==="123"){
      setLogueado(true)
      navigate("/admin")
      //Una vez se inicie sesion cargamos la informacion en el panel de administracion
      await cargarVentas()
    }else{
      alert("Paila")
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
