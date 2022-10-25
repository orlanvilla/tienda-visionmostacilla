import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export const PeticioneApi = () => {

    let production = 'https://api-vision-mostacilla.herokuapp.com/api/';

    const { } = useContext(AppContext);

    //Funcion para registrar un nuevo producto
    const registrarProducto = async (dataproducto) => {
        try {
            //fetch es para consumir una api
            const respuesta = await fetch(production + '/productos', { // produccion es la url de la api
                method: 'POST', //crear objetos en la base de datos
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataproducto)
            });
            if (respuesta.status === 200) {
                alert('Producto creado con exito...');
            } 
        } catch (error) {
            console.log("Algo salio mal al registrar el producto...")
            console.log(error)
        }
    }


    return {
        registrarProducto
    }

}