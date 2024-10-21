import './App.css';
import { Routes, Route } from "react-router-dom";
import Inicio from "./Inicio.jsx";
import Contacto from "./Contacto.jsx";
import AcercaDe from "./AcercaDe.jsx";
import Productos from "./Productos.jsx";
import Error from "./Error.jsx";

function App() {

  return (
    <>
      <h1>Bienvenido a nuestra tienda.</h1>
      <Routes>
        <Route path='/' element={<Inicio />}/>
        <Route path='/contacto' element={<Contacto />}/>
        <Route path='/acerca-de' element={<AcercaDe />}/>
        <Route path='/productos' element={<Productos />}/>
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  )
};

export default App;
