import './Categorias.css'
import icono_colibri from '../../img/categoria/colibri.png'
import icono_guacamayo from '../../img/categoria/guacamayos.png'
import icono_collares from '../../img/categoria/collares.png'
import icono_pulseras from '../../img/categoria/pulseras.png'
import icono_aretes from '../../img/categoria/aretes.png'
import icono_gallos from '../../img/categoria/gallos.png'
import icono_tortugas from '../../img/categoria/tortugas.png'

const Categorias = () => {
  return (
    <div className="contenedor-categorias">
        <h3>Categorías</h3>
        <div className='categorias'>
            <div className='categoria-individual' >
                <img
                    alt='icono-categoria'
                    src={icono_colibri}
                />
                <p>Colibrí</p>
            </div>
            <div className='categoria-individual' >
                <img
                    alt='icono-categoria'
                    src={icono_guacamayo}
                />
                <p>Guacamayos</p>
            </div>
            <div className='categoria-individual' >
                <img
                    alt='icono-categoria'
                    src={icono_aretes}
                />
                <p>Aretes</p>
            </div>
            <div className='categoria-individual' >
                <img
                    alt='icono-categoria'
                    src={icono_gallos}
                />
                <p>Gallos</p>
            </div>
            <div className='categoria-individual' >
                <img
                    alt='icono-categoria'
                    src={icono_tortugas}
                />
                <p>Tortugas</p>
            </div>
            <div className='categoria-individual' >
                <img
                    alt='icono-categoria'
                    src={icono_pulseras}
                />
                <p>pulseras</p>
            </div>
            <div className='categoria-individual' >
                <img
                    alt='icono-categoria'
                    src={icono_collares}
                />
                <p>Collares</p>
            </div>
            
        </div>
      
    </div>
  )
}

export default Categorias
