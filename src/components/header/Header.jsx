import './Header.css' 
import logo_tienda from '../../img/logo.png'
import Slider from '../slider/Slider'

const Header = () => {

 
  return (
    <div className="contenedor-header">
        <div className="contenido-header">
             <section className='logo'>                
                <img
                    src={logo_tienda}
                    alt="logo-tienda"
                />
                <h2>Visión en Mostacilla <span>Tienda de Artesanías</span></h2>
             </section>
             <section className='seccion-navproductos'>
                        <nav className='navegador'>
                            <a href="#">Productos</a>
                            <a href='#'>Promociones</a>
                            <a href='#'>Nuevos</a>
                            <a href='#'>Mas vendido</a>
                        </nav>
       
                    <section className='productos-aleatorio'>
                        <Slider/>
                        
                    </section>
             </section>
        </div>      
    </div>
  )
}

export default Header
