import TablaProductos from "./tablas/TablaCategorias"
import './Categorias.css'
const Productos = () => {
  return (
    <div className="contenedor-productos">
      <h2>Administrar Categorias</h2>
      <TablaProductos/>
    </div>
  )
}

export default Productos