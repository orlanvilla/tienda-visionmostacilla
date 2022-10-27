import TablaProductos from "./tablas/TablaProductos"
import './Productos.css'
const Productos = () => {
  return (
    <div className="contenedor-productos">
      <h2>Administrar Productos</h2>
      <TablaProductos/>
    </div>
  )
}

export default Productos
