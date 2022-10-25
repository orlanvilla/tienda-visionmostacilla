import React,{useRef} from 'react'

const Formulario = () => {
    
    const nombre = useRef(null)
    const imagen = useRef(null)

    const guardar = () => {
        console.log('Nombre:', nombre.current.value)
        console.log('Img:', imagen.current.value)
        
    }

  return (
    <div>
        <input type="text" placeholder='Nombre' ref={nombre}/>
        <input type="file" placeholder='Imagen' ref={imagen}/>
        <button type='button' onClick={guardar}>Guardar</button>
    </div>
  )
}

export default Formulario