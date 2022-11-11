import './Pagos.css'
import './Pagos-entrega.css'
import { useState } from 'react'

const Pagos = () => {

  //Datos personales
  const [datosPersonales, setDatosPersonales] = useState({
    email:"",
    nombres:"",
    apellidos:"",
    cedula:"",
    telefono:""
  });
  const [habilitarDatosEntrega, setHabilitarDatosEntrega] = useState(false);

  const onchangeDatosPersonales=(e)=>{
    setDatosPersonales({
      ...datosPersonales, 
      [e.target.name]:e.target.value
    })
  }
  const validarDatosPersonales=()=>{
    const {email, nombres, apellidos, cedula, telefono}=datosPersonales
    if(email==="" || nombres ==="" || apellidos === "" || cedula === "" || telefono === ""){
      alert("Todos los campos son obligatorios")  
      setHabilitarDatosEntrega(false)    
    }else{
      setHabilitarDatosEntrega(true)     
    }    
  }
  const editarDatosPersonales=()=>{
    setHabilitarDatosEntrega(false)
  }


  // Entrega -----------------------------------------------------------------------
  const [datosEntrega, setDatosEntrega] = useState({
    departamento:"",
    municipio:"",
    calle:"",
    apartamento:"",
    barrio:"",
    nombreRecibir:""
  });
  const [habilitarPago, setHabilitarPago] = useState(false);

  const onchangeDatosEntrega=(e)=>{
    setDatosEntrega({
      ...datosEntrega, 
      [e.target.name]:e.target.value
    })
  }
  const validarDatosEntrega=()=>{
    const {departamento, municipio, calle, apartamento, barrio, nombreRecibir}=datosEntrega
    if(departamento==="" || municipio ==="" || nombreRecibir === ""){
      alert("Estos campos son obligatorios")  
      setHabilitarPago(false)    
    }else{
      setHabilitarPago(true)
    }    
  }
  const editarDatosEntrega=()=>{
    setHabilitarPago(false)
  }

  return (
    <div className='contenedor-pago'>
      <div className='contenedor-pago_contenido'>

        <section className='datos-personales'>  
          <div className='datos-personales_formulario'>
            <h5 className='datos-personales_title'>Datos personales</h5>
            {habilitarDatosEntrega? 
              <div>
              <p>Nombres y apellidos: <span>{datosPersonales.nombres} {datosPersonales.apellidos}</span></p>
              <p>Email: <span>{datosPersonales.email}</span></p>
              <p>Teléfono: <span>{datosPersonales.telefono}</span></p>
              <input
                type="submit"
                value="editar"
                onClick={editarDatosPersonales}
              />
            </div>
            :
            null            
            }
            {!habilitarDatosEntrega?
              <div className="datos-personales_tabla">
              <p className="datos-personales_tabla_parrafo">
                Solicitamos únicamente la información esencial para la finalización de la compra.
              </p>
              <div className='datos-personales_tabla_email direccion'>
                 <label htmlFor="input-email">Email</label>
                 <input 
                 type="text"
                 id='input-email'
                 name='email'
                 value={datosPersonales.email}
                 onChange={onchangeDatosPersonales}
                />
              </div>
              <div className='datos-personales_tabla_Nombre direccion'>
                 <label htmlFor="input-nombre">Nombre</label>
                 <input 
                 type="text" 
                 id='input-nombre'
                 name='nombres'
                 value={datosPersonales.nombres}
                 onChange={onchangeDatosPersonales}
                 />
              </div>
              <div className='datos-personales_tabla_Apellidos direccion'>
                 <label htmlFor="input-apellidos">Apellidos</label>
                 <input 
                 type="text" 
                 id='input-apellidos'
                 name='apellidos'
                 value={datosPersonales.apellidos}
                 onChange={onchangeDatosPersonales}
                 />
              </div>
              <div className='datos-personales_tabla_cc direccion'>
                 <label htmlFor="input-cc">Cedula de ciudadania</label>
                 <input 
                 type="text" 
                 id='input-cc'
                 name='cedula'
                 value={datosPersonales.cedula}
                 onChange={onchangeDatosPersonales}
                 />
              </div>
              <div className='datos-personales_tabla_movil direccion'>
                 <label htmlFor="input-movil">Movil</label>
                 <input 
                 type="text" 
                 id='input-movil'
                 name='telefono'
                 value={datosPersonales.telefono}
                 onChange={onchangeDatosPersonales}
                 />
              </div>
              <input 
                type="submit" 
                value="Continuar"
                className='datos-personales_tabla_boton'
                onClick={validarDatosPersonales}
              />             
            </div>
            :
            null            
            }            
          
          </div>
        </section>
        {habilitarDatosEntrega? 
          <section className='datos-entrega'>
          <div className='datos-entrega_formulario'>
            <h5 className='datos-entrega_title'>Datos de Entrega</h5>
            {habilitarPago?
              <div>
                <p>Departamento: <span>{datosEntrega.departamento}</span></p>
                <p>Municipio: <span>{datosEntrega.municipio}</span></p>
                <p>Calle: <span>{datosEntrega.calle}</span></p>
                <p>apartamento: <span>{datosEntrega.apartamento}</span></p>
                <p>Barrio: <span>{datosEntrega.barrio}</span></p>
                <p>Nombre quien Recibe: <span>{datosEntrega.nombreRecibir}</span></p>
                <input
                type="submit"
                value="editar"
                onClick={editarDatosEntrega}
              />
            </div>
            :
            null            
            } 
            {!habilitarPago?
              <div className="datos-entrega_tabla">

<div className="datos-entrega_tabla_departamento direccion">
  <label htmlFor="departamento">Departamento</label>
  <input 
  type="text" 
  id='departamento'
  name='departamento'
  onChange={onchangeDatosEntrega}
  value={datosEntrega.departamento}
  />
  
</div>
<div className="datos-entrega_tabla_municipio direccion">
  <label htmlFor="municipio">Municipio</label>
  <input 
  type="text" 
  id='municipio'
  name='municipio'
  onChange={onchangeDatosEntrega}
  value={datosEntrega.municipio}
  />
</div>
<div className="datos-entrega_tabla_calle direccion">
  <label htmlFor="calle">Calle</label>
  <input 
  type="text" 
  id='calle'
  name='calle'
  onChange={onchangeDatosEntrega}
  value={datosEntrega.calle}
  />
</div>
<div className="datos-entrega_tabla_piso direccion">
  <label htmlFor="piso">Piso o Apartamento</label>
  <input 
  type="text" 
  id='piso'
  name='apartamento'
  onChange={onchangeDatosEntrega}
  value={datosEntrega.apartamento}
  />
  
</div>
<div className="datos-entrega_tabla_barrio direccion">
  <label htmlFor="barrio">Barrio</label>
  <input 
  type="text" 
  id='barrio'
  name='barrio'
  onChange={onchangeDatosEntrega}
  value={datosEntrega.barrio}
  />
</div>
<div className="datos-entrega_tabla_nombre-recibir direccion">
  <label htmlFor="nombre-recibir">Nombre de la persona que vaa recibir</label>
  <input 
  type="text" 
  id='nombre-recibir'
  name='nombreRecibir'
  onChange={onchangeDatosEntrega}
  value={datosEntrega.nombreRecibir}
  />
  
</div>
<input 
  type="submit" 
  value="Continuar"
  className='datos-personales_tabla_boton'
  onClick={validarDatosEntrega}
/>

              </div>
              :
              null
            }            
          </div>
        </section>
        :
        null       
        }
        </div>
      <div className='contenedor-pago_resumen'>

      </div>
      <footer>
  
      </footer>
    </div>
  )
}

export default Pagos
