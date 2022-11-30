import { useEffect, useContext } from "react"
import Categorias from "../components/categorias/Categorias"
import Footer from "../components/footer/Footer"
import Head from "../components/head/Head"
import Header from "../components/header/Header"
import SeccionProductos from "../components/seccionProductos/SeccionProductos"
import { PeticionesApi } from "../PeticionesApi/PeticionesApi"
import { AppContext } from "../context/AppContext"

const Home = () => {

  const {cargarProductos,cargarCategorias} = PeticionesApi();
  

  useEffect(()=>{
    cargarProductos();
    cargarCategorias()  
  },[])
  return (
    <div>
        <Head/>
        <Header/>
        <Categorias/>
        <SeccionProductos/>
        <Footer/>
        
    </div>
  )
}

export default Home
