
import './App.css';
import Home from './home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeAdministracion from './admin/HomeAdministracion';


//Agreda Diego
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path='/home' element={<Home/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
