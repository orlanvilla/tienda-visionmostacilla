import './Footer.css'
import youtube from '../../img/youtube.png'
import facebook from '../../img/facebook.png'
import instagram from '../../img/instagram.png'

const Footer = () => {
  return (
    <div className='contenedor-footer'>
        <div className='contenido-footer'>
            <div className='redes-footer'>
                <p>Síguenos en</p>
                <div className='redes'>
                    <a href="https://www.youtube.com/channel/UCgZYqmTtiVn9zyv1kojcNFw">
                    <img 
                    src={youtube}
                    alt="https://www.youtube.com/channel/UCgZYqmTtiVn9zyv1kojcNFw"
                    /> </a>

                    <a href="#">
                    <img 
                    src={facebook}
                    alt=""
                    /> </a>

                    <a href="#">
                    <img 
                    src={instagram}
                    alt=""
                    /> </a>
                </div>

            </div>
             <p>Visión en Mostacilla 2022 @Todos los derechos reservados</p>
        </div>
      
    </div>
  )
}

export default Footer
