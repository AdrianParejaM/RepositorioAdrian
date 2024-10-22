import React from 'react';
import { Routes, Route } from "react-router-dom";
import Peliculas from "./Peliculas.jsx";
import Interpretes from "./Interprete.jsx";
import Galeria from "./Galeria.jsx";
import AcercaDe from "./AcercaDe.jsx";
import Error from "./Error.jsx";

const Rutas = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/peliculas' element={<Peliculas />}/>
        <Route path='/interpretes' element={<Interpretes />}/>
        <Route path='/galeria' element={<Galeria />}/>
        <Route path='/acerca-de' element={<AcercaDe />}/>
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  )
};

export default Rutas;