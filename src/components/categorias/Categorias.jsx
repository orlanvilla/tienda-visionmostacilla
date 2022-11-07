import './Categorias.css'
import icono_colibri from '../../img/categoria/colibri.png'
import icono_guacamayo from '../../img/categoria/guacamayos.png'
import icono_collares from '../../img/categoria/collares.png'
import icono_pulseras from '../../img/categoria/pulseras.png'
import icono_aretes from '../../img/categoria/aretes.png'
import icono_gallos from '../../img/categoria/gallos.png'
import icono_tortugas from '../../img/categoria/tortugas.png'
import { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import { PeticionesApi } from '../../PeticionesApi/PeticionesApi'


const Categorias = () => {
    
    const {categorias,categoria,productos,setProductos} = useContext(AppContext)
    const {buscarCategoria,filtrarProductos,cargarProductos} = PeticionesApi();

    const handleEscogerCategoria = async(id) => { 
        await buscarCategoria(id)
        await filtrarProductos(id)
        //Filtramos productos por categoria
        //console.log('Categoria: ',categoria)
        //console.log('Productos: ',productos)
        //const filtroProductos = productos.filter(p => p.categoria === categoria.nombre)
        //setProductos(filtroProductos)
    }

  return (
    <div className="contenedor-categorias">
        <h3>Categorías</h3>
        <div className='categorias'>
            {
                categorias.map(categoria => (
                    <div className='categoria-individual' onClick={()=>handleEscogerCategoria(categoria._id)}>
                        <img
                            alt='icono-categoria'
                            src={categoria.imagen}
                        />
                        <p>{categoria.nombre}</p>
                    </div>
                ))
            }   
        </div>
    </div>
  )
}

export default Categorias
