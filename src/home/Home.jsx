import { useEffect } from "react"
import Footer from "../components/footer/Footer"
import Head from "../components/head/Head"
import Header from "../components/header/Header"
import SeccionProductos from "../components/seccionProductos/SeccionProductos"
import { PeticionesApi } from "../PeticionesApi/PeticionesApi"

const Home = () => {

  const {cargarProductos} = PeticionesApi();
  useEffect(()=>{
    cargarProductos();
  },[])
  return (
    <>
        <Head/>
        <Header/>
        <SeccionProductos/>
        <Footer/>
        
    </>
  )
}

export default Home
