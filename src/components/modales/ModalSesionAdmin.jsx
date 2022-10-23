import './ModalSesionAdmin.css'
const ModalSesionAdmin = ({setModalSesion}) => {
  return (
    <div className="contenedor-sesion">
        <div className='contenido-sesion'>
            <h3>Ingreso Administración</h3>
            
            <label>Usuario</label>
            <input
              type="text"
            />
            <label>Contraseña</label>
            <input
              type="password"
            />

            <div className='btn-sesion'>              
                <input
                  type="submit"
                  value='Ingresar'
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
