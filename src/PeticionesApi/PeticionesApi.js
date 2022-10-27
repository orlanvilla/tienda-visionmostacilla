import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export const PeticionesApi = () => {

    let production = 'https://api-vision-mostacilla.herokuapp.com/api/';
   // let development = 'http://192.168.1.14:9000/api/'

    const { setProducto,setProductos,productos,setProductosDestacados} = useContext(AppContext);

    //Funcion para registrar un nuevo producto
    const registrarProducto = async (dataproducto,data) => {

       try {
            const res = await fetch("https://api.cloudinary.com/v1_1/djqui0rqr/image/upload", {
                method:"POST",
                body:data
            })
            if(res.status === 200){
                
              //Esto con el fin de completar el objeto producto con la propiedad imagen   ------
              const file = await res.json();
              dataproducto.imagen = file.secure_url;
              //--------------------------------------------------------------------------------

                //Si la imagen se guarda correctamente entonces procedemos a guardar la toda la informacion del producto en la  BD
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
    //Funcion para cargar todos los productos y productos destacados
    const cargarProductos = async()=>{
        try {
            const respuesta = await fetch(production + '/productos');
            
            if (respuesta.status === 200) {
                const resp = await respuesta.json();
                //filtramos productos destacados 
                const prodDes = resp.filter(p => p.destacado === true)
                await setProductos(resp);
                await setProductosDestacados(prodDes)
            } else {
                setProductos([]);
            }
        } catch (error) {
            console.log("Algo salio mal con cargar los productos")
        }
    }
    //Funcion para eliminar un producto
    const eliminarProducto = async(id)=>{
        try{
            const respuesta = await fetch(production + '/productos/' + id, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            if (respuesta.status === 200) {
                alert('Producto eliminado con exito...');
            }
        }catch(e){
            console.log('No se pudo eliminar el product')
        }
    }
    //Funcion para editar producto
    const editarProducto = async(id,data)=>{
        try {
            const respuesta = await fetch(production + '/productos/' + id, {
                method: 'PUT', 
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            if (respuesta.status === 200) {
                alert('Producto editado con exito...');
            }
        }catch(e){
            console.log('No se pudo editProducto')
        }
            
    }
    //Destacar producto
    const destacarProducto = async(id)=>{
     
        const producto = await productos.find(p => p._id === id)
        producto.destacado = producto.destacado? false:true
        try {
            const respuesta = await fetch(production + '/productos/' + id, {
                method: 'PUT', 
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(producto)
            })
           
        }catch(e){
            console.log('No se pudo destacar')
        }
           
    }
    //Sumar existencia a producto
    const sumarCantidadProducto = async(id)=>{
        const producto = await productos.find(p => p._id === id)
        producto.cantidad = producto.cantidad + 1
        try {
            const respuesta = await fetch(production + '/productos/' + id, {
                method: 'PUT', 
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(producto)
            })
           
        }catch(e){
            console.log('No se pudo destacar')
        }
    }
    //Restar existencia a producto
    const restarCantidadProducto = async(id)=>{
        const producto = await productos.find(p => p._id === id)
        producto.cantidad = producto.cantidad - 1
        try {
            const respuesta = await fetch(production + '/productos/' + id, {
                method: 'PUT', 
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(producto)
            })
           
        }catch(e){
            console.log('No se pudo destacar')
        }
    }

    return {
        registrarProducto,
        buscarProducto,
        cargarProductos,
        eliminarProducto,
        editarProducto,
        destacarProducto,
        sumarCantidadProducto,
        restarCantidadProducto
    }

}