import React from 'react';
import { Routes, Route } from "react-router-dom";
import Peliculas from "./Peliculas.jsx";
import Interpretes from "./Interpretes.jsx";
import Galeria from "./Galeria.jsx";
import AcercaDe from "./AcercaDe.jsx";
import Error from "./Error.jsx";
import Inicio from './Inicio.jsx';
import PeliculasTitulo from './subMenu/PeliculasTitulo.jsx';
import PeliculasInterprete from './subMenu/PeliculasInterprete.jsx';
import PeliculasDirector from './subMenu/PeliculasDirector.jsx';
import GaleriaTitulo from './subMenu/GaleriaTitulo.jsx';
import GaleriaInterprete from './subMenu/GaleriaInterprete.jsx';
import GaleriaDirector from './subMenu/GaleriaDirector.jsx';

const Rutas = () => {
  //Añadimos todas las rutas (incluyendo los submenús y la de error.)
  return (
    <>
    <Routes>
        <Route path='/' element={<Inicio />}/>
        <Route path='/peliculas' element={<Peliculas />}>
          <Route path='/peliculas/titulo' element={<PeliculasTitulo />}/>
          <Route path='/peliculas/interprete' element={<PeliculasInterprete />}/>
          <Route path='/peliculas/director' element={<PeliculasDirector />}/>
        </Route>
        <Route path='/interpretes' element={<Interpretes />}/>
        <Route path='/galeria' element={<Galeria />}>
          <Route path='/galeria/titulo' element={<GaleriaTitulo />}/>
          <Route path='/galeria/interprete' element={<GaleriaInterprete />}/>
          <Route path='/galeria/director' element={<GaleriaDirector />}/>
        </Route>
        <Route path='/acerca-de' element={<AcercaDe />}/>
        
        
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  );
};

export default Rutas;