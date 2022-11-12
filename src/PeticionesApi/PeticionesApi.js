import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export const PeticionesApi = () => {

    let production = 'https://api-vision-mostacilla.herokuapp.com/api/';
    let development = 'http://192.168.1.11:9000/api'

    const { setProducto,setProductos,productos,setProductosDestacados,setCategorias,setCategoria,categorias,categoria,setProductosFiltrados, cantidadProductos, setCantidadProductos} = useContext(AppContext);

    // ***********   SECCION DE PRODUCTOS ****************
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
    const buscarProductoLocal = (id)=>{
        return productos.find(p => p._id === id)
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
                await setProductosFiltrados(resp)
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
            console.log('No se pudo editProducto',e)
        }
            
    }
    const editarProductoCantidad = async(id,data)=>{
       
        try {
            const respuesta = await fetch(production + '/productos/' + id, {
                method: 'PUT', 
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
        }catch(e){
            console.log('No se pudo editProducto',e)
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

    //************** SECCION DE CATEGORIAS ********************/
    const registrarCategoria = async (dataCategoria,data)=>{
        try {
            const res = await fetch("https://api.cloudinary.com/v1_1/djqui0rqr/image/upload", {
                method:"POST",
                body:data
            })
            if(res.status === 200){
                
                //Esto con el fin de completar el objeto producto con la propiedad imagen   ------
                const file = await res.json();
                dataCategoria.imagen = file.secure_url;

                const respuesta = await fetch(production + '/categorias',{
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataCategoria)
                })
                if (respuesta.status === 200) {
                    alert('Categoria creado con exito...');
                } 

            }
        }catch(e){
            console.log('Error al registrar categoria')
        }   
    }
    //Funcion para cargar todos las categorias
    const cargarCategorias = async()=>{
        try {
            const respuesta = await fetch(production + '/categorias');
            
            if (respuesta.status === 200) {
                const resp = await respuesta.json();
                await setCategorias(resp);
                
            } else {
                setCategorias([]);
            }
        } catch (error) {
            console.log("Algo salio mal con cargar las categorias")
        }
    }
    //Funcion para eliminar un categoria
    const eliminarCategoria = async(id)=>{
        try{
            const respuesta = await fetch(production + '/categoria/' + id, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            if (respuesta.status === 200) {
                alert('Categoria eliminado con exito...');
            }
        }catch(e){
            console.log('No se pudo eliminar la categoria')
        }
    }
    //Funcion para buscar una categoria
    const buscarCategoria = async(id)=>{
        /*try {
            const respuesta = await fetch(production + '/categorias/' + id);
            if (respuesta.status === 200) {
                const resp = await respuesta.json();
                setCategoria(resp);
            } else {
                setCategoria({});
            }
        } catch (error) {
            console.log("Algo salio mal con cargar categoria")
        }*/
        const cate = categorias.find(c => c._id === id)
        setCategoria(cate);
    }
    //Funcion para editar categoria
    const editarCategoria = async(id,data)=>{
        try {
            const respuesta = await fetch(production + '/categorias/' + id, {
                method: 'PUT', 
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            if (respuesta.status === 200) {
                alert('Categoria editado con exito...');
            }
        }catch(e){
            console.log('No se pudo editar categoria')
        }            
    }

    //Filtrar prodictos por categoria
    const filtrarProductos = async(id)=>{
        //console.log('Categoria: ',categoria)
        //console.log('Productos: ',productos)
        const cate = categorias.find(c => c._id === id)

        const filtroProductos = productos.filter(p => p.categoria === cate.nombre)
        setProductosFiltrados(filtroProductos)
    }
    
     //Filtrar productos por nombre
    const filtrarProductosNombre = async(caracter)=>{
        const filtroProductos = productos.filter(p =>{
            if(p.nombre.toLowerCase().includes(caracter.toLowerCase())){
                return p
            }else{
              return null
            }
        })
        if(caracter===""){
          await cargarProductos()
        }else{
        
            setProductosFiltrados(filtroProductos)
          
        } 
    }  
    //Filtrar por Categoria
    const filtrarProductosCategoria=(categoria)=>{
        const filtroProductosCategoria = productos.filter(p =>p.categoria===categoria)
        setProductosFiltrados(filtroProductosCategoria)

        if(categoria==="Todas las categorías"){
            setProductosFiltrados(productos)
        }
    }

    //*******   TODO PAGOS ************ */
    const pagarCompra = async(data)=>{
        try{
            const res = await fetch(production + '/ventas', {
                method:"POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(data)
            })
            if(res.status === 200){
                alert('Pago realizado con exito')
                data.productos.forEach(producto => {
                    //Aqui sacamos la informacion completa del producto
                    let prodOriginal = buscarProductoLocal(producto.id)
                    //Ahora obtenemos el nuevo valor de la cantidad del producto
                    let nuevoValorCantidad = prodOriginal.cantidad - producto.cantidad
                    //Ahira modificamos el producto original con la nueva cantidad del producto
                    prodOriginal.cantidad = nuevoValorCantidad
                    editarProductoCantidad(producto.id,prodOriginal)
                });
            }
        }catch(e){
            console.log('Error al realizar el proceso de pago')
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
        restarCantidadProducto,
        registrarCategoria,
        cargarCategorias,
        eliminarCategoria,
        buscarCategoria,
        editarCategoria,
        filtrarProductos,
        filtrarProductosNombre,
        filtrarProductosCategoria,
        pagarCompra
      
    }

}