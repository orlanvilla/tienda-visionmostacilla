import React,{useRef,useState} from 'react'

const Formulario = () => {
    
    const [data, setData] = useState(new FormData())

    const onChange = (e) =>{
      const files = e.target.files;
      const data1 = new FormData();
  
      data1.append("file", files[0])
      data1.append("upload_preset", "Images")
      setData(data1)
    }

    const guardar = async(e) => {
      const res = await fetch("https://api.cloudinary.com/v1_1/djqui0rqr/image/upload", {
          method:"POST",
          body:data
      })
      if(res.status === 200){
        alert('Image uploaded successfully')
        const file = await res.json();
        console.log('Image: ',file.secure_url)
      }
    }

  return (
    <div style={{'display':'flex','flexDirection':'column', 'width':'400px', 'padding':'50px', 'gap':'15px', 'border':'solid 1px black'}}>
        <input type="text" placeholder='Nombre'/>
        <input type="file" 
               placeholder='Imagen' 
               name='file'
               onChange={onChange}/>
        <button type='button' onClick={guardar}>Guardar</button>
    </div>
  )
}

export default Formulario