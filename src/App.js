
import './App.css';
import Home from './home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeAdministracion from './admin/HomeAdministracion';
import Formulario from './testImages/Formulario';


//Agreda Diego
function App() {
  return (
    <BrowserRouter>
    <Routes>
      {/* <Route exact path='/home' element={<Home/>}/> */}
      <Route exact path='/home' element={<HomeAdministracion/>}/>
      <Route exact path='/productos' element={<Home/>}/>
      <Route exact path='/' element={<Formulario/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
