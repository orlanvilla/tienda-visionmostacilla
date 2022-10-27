import { useRef, useEffect,useContext} from 'react'
import './Slider.css'
import colibri_grande from '../../img/colibri-grande.jpeg'
import colibri_blanco from '../../img/colibri-blanco.jpeg'
import colibri_multicolor from '../../img/colibri-multicolor.jpeg'
import collar_colibri from '../../img/collar-colibri.jpeg'
import menor  from '../../img/left.svg'
import  mayor  from '../../img/rigth.svg'
import { AppContext } from '../../context/AppContext'


const Slider = () => {

    const {productosDestacados} = useContext(AppContext);
    const slideShow=useRef(null);
    const intervaloSlideShow=useRef(null);

    const siguiente=()=>{
        //comprobar que slideshow tenga elementos
        if(slideShow.current.children.length>0){

            //se obtiene el primer elemento de slideshow
            const primerElemento=slideShow.current.children[0];

            //Establecemos la transicion para slideShow
            slideShow.current.style.transition=`500ms ease-out all`;

            const tamañoSlide=slideShow.current.children[0].offsetWidth;

            //Vamos a mover el slideShow
            slideShow.current.style.transform=`translateX(-${tamañoSlide}px)`;

            const transicion=()=>{
                //Reiniciamos la posicion del slideShow
                slideShow.current.style.transition='none';
                slideShow.current.style.transform=`translateX(0)`;

                //Tomamos el primer leemento y lo mandaos al final
                slideShow.current.appendChild(primerElemento);

                //solo dejamos que se ejecute la funcio una ves
                slideShow.current.removeEventListener('transitionend', transicion)

            }
            //evelistener para cuando termina la animacion
            slideShow.current.addEventListener('transitionend', transicion)
        }
    }
    const anterior=()=>{
        // https://www.youtube.com/watch?v=q00ldTrywLU
        if(slideShow.current.children.length>0){
            //Vamos a obtener el ultimo elemento del slideshow
            const index= slideShow.current.children.length -1;
            const ultimoElemento=slideShow.current.children[index];

            slideShow.current.insertBefore(ultimoElemento, slideShow.current.firstChild);

            slideShow.current.style.transition='none';

            const tamañoSlide=slideShow.current.children[0].offsetWidth;
            slideShow.current.style.transform=`translateX(-${tamañoSlide}px)`;

            setTimeout(() => {
                slideShow.current.style.transition=`500ms ease-out all`;
                slideShow.current.style.transform=`translateX(0)`;
            }, 30);
        }
    
    }

    useEffect(() => {
        intervaloSlideShow.current= setInterval(()=>{
            siguiente()
            slideShow.current.style.transition=`5000ms ease-out all`;
            
        }, 5000)  
        
        // //Eliminamos los intervalos
        slideShow.current.addEventListener('mouseenter', ()=>{
            
            clearTimeout(intervaloSlideShow.current);            
     });

        // //reanudamos los intervalos
        // slideShow.current.addEventListener('mouseleave', ()=>{
        //     intervaloSlideShow.current= setInterval(()=>{
        //         console.log("reanudando")
        //         siguiente();
        //     }, 5000)   
        //     return         
        // })
    }, []);

   

  return (
    <div className='contenedor-principal'>
        <div className='contenedor-slideshow' ref={slideShow}>
            
                {
                    productosDestacados.map(producto=> (
                        <div className='slide'>
                            <a href='#'>
                                <img src={producto.imagen} alt='colibri-grande'/>                
                            </a>
                            <div className='texto-slide'>
                            {/* <p>30% de descuento, solo por hoy</p> */}
                            </div>
                        </div>
                    ))
                }
              
              
              
        </div>
       
        <div className='controles'>
            <input 
            className='btn-menor boton'
            type="image" 
            alt='icono-menor'
            src={menor} 
            style={{left:"0"}}
            onClick={anterior}
            />

            <input 
            className='btn-mayor boton' 
            type="image" 
            alt='icono-mayor'
            src={mayor} 
            style={{right:"0"}}
            onClick={siguiente}
            />        
        </div>
    </div>
   
  )
}

export default Slider
