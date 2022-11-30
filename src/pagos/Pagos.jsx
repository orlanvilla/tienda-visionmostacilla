import './Pagos.css'
import './Pagos-entrega.css'
import './MediaQrTablet.css'
import './MediaQrCell.css'
import { useState, useRef,useContext } from 'react'
import candado from '../img/lock.svg'
import logo from '../img/logo.png'
import telefono from '../img/telephone.svg'
import Departamentos from '../utils/Departamentos.json'
import youtubee from '../../src/img/youtube.png'
import facebookk from '../../src/img/facebook.png'
import instagramm from '../../src/img/instagram.png'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom';
import { PeticionesApi } from '../PeticionesApi/PeticionesApi'

const Pagos = () => {

  const {listaCompras,totalCompra,setModal, setListaCompras, setCantidadProductos} = useContext(AppContext)
  const {pagarCompra} = PeticionesApi()
  const departamentoAux=useRef(null)
  const municipioAux=useRef(null)
  const [modalCarrito, setmodalCarrito] = useState(false)

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
  const [municipios, setMunicipios] = useState([]);
  const onchangeDatosEntrega=(e)=>{
    setDatosEntrega({
      ...datosEntrega, 
      [e.target.name]:e.target.value
    })
  }
  const validarDatosEntrega=()=>{   
    datosEntrega.departamento=departamentoAux.current.value;
    datosEntrega.municipio=municipioAux.current.value;
    console.log(datosEntrega) 
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
  const cargarMunicipios=()=>{
    setMunicipios(Departamentos.find(d=>d.departamento===departamentoAux.current.value).municipios) 
  }  
  const navigate=useNavigate();

  const returnHome = () =>{
    navigate("/home")
    setListaCompras([])
    setCantidadProductos(0)
  }

  const volverAlCarrito=()=>{
    navigate("/home")
    setModal(true)
  }

  
  const handlePagarCompra = async()=>{ 

    const date = new Date();
    let fecha = date.toLocaleDateString();
    let hora = date.toLocaleTimeString();

    let data = {
      productos:listaCompras,
      valor:totalCompra,
      fecha:fecha,
      hora:hora,
      informacionCliente:datosPersonales,
      informacionEntrega:datosEntrega,
      estado:'No entregado'
    }
    await pagarCompra(data)
    
  }

  return (
    <div className='contenedor-pago'>
  
      <div className='head-pago'>
          <div className='head-pago_seg-telf'>
            <img src={candado} alt="icono de candado" className='select-off'/>
            <span className='select-off'>Pagos 100% seguro</span>
          </div>
          <div className='head-pago_logo' onClick={returnHome}>
          <img src={logo} alt="logo de la pagina" />
          </div>
          <div className='head-pago_seg-telf head-pago_seg-telf-2'>
            <img src={telefono} alt="icono de telefono" className='select-off'/>
            <span>(+57) 310 360 2787</span>
          </div>
      </div>
      <div className='contenedor-pago_contenido'>
     
        <div className='contenedor-pago_contenido-2'>

        {
          habilitarPago && habilitarDatosEntrega ? 
          <button style={{background:"green", color:"white", width:"150px", border:"none",padding:"1rem 2rem", cursor:"pointer",borderRadius:"0.5rem" , right:"0"}} onClick={handlePagarCompra}>Pagar</button>
          : null
        }
          <section className='datos-personales'>  
            <div className='datos-personales_formulario'>
              <h5 className='datos-personales_title select-off'>Datos personales</h5>
              {habilitarDatosEntrega? 
              <div className='datos-personales_form-editar'>
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
                  className='datos-personales_tabla_boton boton_primary'
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
              <h5 className='datos-entrega_title select-off'>Datos de Entrega</h5>
              {habilitarPago?
                <div>
                  <p>Departamento: <span>{datosEntrega.departamento}</span></p>
                  <p>Municipio: <span>{datosEntrega.municipio}</span></p>
                  <p>Calle: <span>{datosEntrega.calle}</span></p>
                  <p>apartamento: <span>{datosEntrega.apartamento}</span></p>
                  <p>Barrio: <span>{datosEntrega.barrio}</span></p>
                  <p>Nombre quien Recibe: <span>{datosEntrega.nombreRecibir}</span></p>
                  <input
                  className='datos-entrega_formulario_boton'
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
    
    <select
      ref={departamentoAux}
      onClick={cargarMunicipios}
      >
        <option>--Seleccionar Departamento--</option>
          {Departamentos.map(d=>(
            <option
            value={d.departamento}
            >{d.departamento}</option>
          ))}      
    </select>
      
  </div>
  <div className="datos-entrega_tabla_municipio direccion">
    <label htmlFor="municipio">Municipio</label>
    <select
    ref={municipioAux}
    >
      <option>--Seleccione Municipio</option>
      {municipios.map(m=>(
        <option
        value={m}
        >{m}</option>
      ))}      
    </select>
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
    className='datos-personales_tabla_boton boton-entrega'
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
        <div className='contenedor-pago_contenido-right'>
          <section className='datos-resumen'>
              <h5 className='datos-resumen_title select-off'>Resumen de compra</h5>
              <div className="datos-resumen_productos">
                {/*Esto lo importe del componente tablacarritocompras*/}
                <div  className='tabla-carrito'>
                  <div className='tabla-carrito_resumen'>
                    <table>
                          <thead>
                              <tr>           
                                  <th width="30%">Producto</th>
                                  <th>Precio Unidad</th>  
                                  <th>Cantidad</th>                                    
                                  <th>Subtotal</th>
                                  
                              </tr>
                          </thead>
                          <tbody>  

                          {listaCompras.map(productoIndividual=>(
                            <tr>                
                                    <td>
                                      <img
                                        alt='img-producto'
                                        src={productoIndividual.imagen}
                                        style={{width:'7rem'}}
                                      />
                                      <p>{productoIndividual.nombre}</p>
                                    </td>
                                    <td>{productoIndividual.precioUnidad}</td>
                                    <td>{productoIndividual.cantidad}</td>
                                    <td>{productoIndividual.subtotal}</td>
                                    
                                </tr>
                          ))}                 
                              
                          </tbody>
                        
                    </table> 
                  </div>
                </div>
                {/**-------------------------------------------------- */}

              </div>
              <input 
                type="submit"
                className='datos-resumen_input'
                value="volver a carrito"
                onClick={volverAlCarrito}
              />
           
              <div className='datos-resumen_total' >
                  <p className='select-off'>Total</p>
                  <span>${totalCompra}</span>
              </div>
          </section>
        </div>  
      </div>
       


      <div className='footer-pago' >
        <div className='redes-footer'>
            <p className='redes-footer_p select-off'>Síguenos en</p>
              <div className='redes'>
                <a href="https://www.youtube.com/channel/UCgZYqmTtiVn9zyv1kojcNFw">
                  <img 
                  src={youtubee}
                  alt="https://www.youtube.com/channel/UCgZYqmTtiVn9zyv1kojcNFw"
                  /> 
                </a>
                <a href="#">
                  <img 
                    src={facebookk}
                    alt=""
                    /> 
                </a>
                <a href="#">
                  <img 
                  src={instagramm}
                  alt=""
                  /> 
                </a>
              </div>
          </div>
          <p className='redes-footer_p2 select-off'>Visión en Mostacilla 2022 @Todos los derechos reservados</p>
      </div>
    </div>
  )
}

export default Pagos