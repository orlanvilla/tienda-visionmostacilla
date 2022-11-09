
import './App.css';
import Home from './home/Home';
import { useContext } from 'react';
import { AppContext } from './context/AppContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeAdministracion from './admin/HomeAdministracion';
import Formulario from './testImages/Formulario';
import Pagos from './pagos/Pagos';


//Agreda Diego
function App() {
  const {logueado}=useContext(AppContext)

  return (
    <>
        {logueado? 

      <BrowserRouter>
        <Routes>
          <Route exact path='/admin' element={<HomeAdministracion/>}/>      
          <Route exact path='*' element={<HomeAdministracion/>}/>      
             
        </Routes>
      </BrowserRouter>
    :
    <BrowserRouter>
        <Routes>      
        <Route exact path='/admin' element={<HomeAdministracion/>}/>   
          {/* siempre que le escriban algo en la url entraria a la tienda  */}
          <Route exact path='/pagos' element={<Pagos/>}/> 
          <Route exact path='*' element={<Home/>}/>  
        </Routes>
      </BrowserRouter>
        
        }
    </>    
  );
}

export default App;
