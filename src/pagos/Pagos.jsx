import './Pagos.css'
import './Pagos-entrega.css'

const Pagos = () => {
  return (
    <div className='contenedor-pago'>
      <div className='contenedor-pago_contenido'>

        <section className='datos-personales'>  
          <div className='datos-personales_formulario'>
            <h5 className='datos-personales_title'>Datos personales</h5>
            <div className="datos-personales_tabla">
              <p className="datos-personales_tabla_parrafo">
                Solicitamos únicamente la información esencial para la finalización de la compra.
              </p>

              <div className='datos-personales_tabla_email direccion'>
                 <label htmlFor="input-email">Email</label>
                 <input type="text" id='input-email'/>
              </div>
              <div className='datos-personales_tabla_Nombre direccion'>
                 <label htmlFor="input-nombre">Nombre</label>
                 <input type="text" id='input-nombre'/>
              </div>
              <div className='datos-personales_tabla_Apellidos direccion'>
                 <label htmlFor="input-apellidos">Apellidos</label>
                 <input type="text" id='input-apellidos'/>
              </div>
              <div className='datos-personales_tabla_cc direccion'>
                 <label htmlFor="input-cc">Cedula de ciudadania</label>
                 <input type="text" id='input-cc'/>
              </div>
              <div className='datos-personales_tabla_movil direccion'>
                 <label htmlFor="input-movil">Movil</label>
                 <input type="text" id='input-movil'/>
              </div>
              <input 
                type="submit" 
                value="Continuar"
                className='datos-personales_tabla_boton'
              />             
            </div>
          </div>
        </section>

        <section className='datos-entrega'>
          <div className='datos-entrega_formulario'>
            <h5 className='datos-entrega_title'>Datos de Entrega</h5>
            <div className="datos-entrega_tabla">

              <div className="datos-entrega_tabla_departamento direccion">
                <label htmlFor="departamento">Departamento</label>
                <input type="text" id='departamento'/>
              </div>
              <div className="datos-entrega_tabla_municipio direccion">
                <label htmlFor="municipio">Municipio</label>
                <input type="text" id='municipio'/>
              </div>
              <div className="datos-entrega_tabla_calle direccion">
                <label htmlFor="calle">Calle</label>
                <input type="text" id='calle'/>
              </div>
              <div className="datos-entrega_tabla_piso direccion">
                <label htmlFor="piso">Piso o Apartamento</label>
                <input type="text" id='piso'/>
              </div>
              <div className="datos-entrega_tabla_barrio direccion">
                <label htmlFor="barrio">Barrio</label>
                <input type="text" id='barrio'/>
              </div>
              <div className="datos-entrega_tabla_nombre-recibir direccion">
                <label htmlFor="nombre-recibir">Nombre de la persona que vaa recibir</label>
                <input type="text" id='nombre-recibir'/>
              </div>
              <input 
                type="submit" 
                value="Continuar"
                className='datos-personales_tabla_boton'
              />

            </div>
          </div>
        </section>

      </div>
      <div className='contenedor-pago_resumen'>

      </div>
      <footer>
  
      </footer>
    </div>
  )
}

export default Pagos
