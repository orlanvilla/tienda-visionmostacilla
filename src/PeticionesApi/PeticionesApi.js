import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export const PeticionesApi = () => {

    let production = 'https://api-vision-mostacilla.herokuapp.com/api/';

    //const { } = useContext(AppContext);

    //Funcion para registrar un nuevo producto
   const registrarProducto = async (dataproducto) => {
        try {
            const res = await fetch("https://api.cloudinary.com/v1_1/djqui0rqr/image/upload", {
                method:"POST",
                body:data
            })
            if(res.status === 200){
              const file = await res.json();
              dataproducto.imagen = file.secure_url;
                //Si la imagen se guarda correctamente entonces procedemos a guardar la toda la informacion del producto
                //----------------------------------------------------------------------
                const respuesta = await fetch(production + '/productos', {
                    method: 'POST', 
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(dataproducto)
                });
                if (respuesta.status === 200) {
                    alert('Producto creado con exito...');
                } 
                //-----------------------------------------------------------------------
              //console.log('data: ',dataproducto)
            }else{
                console.log('Error con el servidor')
            }
        } catch (error) {
            console.log("Algo salio mal al registrar el producto...")
            console.log(error)
        }
    }
    //Funcion para buscar un producto
    const buscarProducto = async(id)=>{
        try {
            const respuesta = await fetch(production + '/productos/' + id);
            if (respuesta.status === 200) {
                const resp = await respuesta.json();
                //console.log(resp[0])
                setProducto(resp);
            } else {
                setProducto({});
            }
        } catch (error) {
            console.log("Algo salio mal con cargar el producto")
        }
    }
    //Funcion para cargar todos los productos
    const cargarProductos = async(id)=>{
        try {
            const respuesta = await fetch(production + '/productos');
            if (respuesta.status === 200) {
                const resp = await respuesta.json();
                await setProductos(resp);
            } else {
                setProductos([]);
            }
        } catch (error) {
            console.log("Algo salio mal con cargar los productos")
        }
    }


    return {
        registrarProducto,
        buscarProducto,
        cargarProductos
    }

}