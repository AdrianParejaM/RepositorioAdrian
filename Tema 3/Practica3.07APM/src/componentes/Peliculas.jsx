import React from 'react';
import { Link, useNavigate, Outlet } from "react-router-dom";
import "../css/Menu.css";
import AdministracionPeliculas from './AdministracionPeliculas.jsx';

const Peliculas = () => {

  const navegar = useNavigate();
  //Importamos el componente de administración y así se queda este componente más limpio y legible.
  return (
    <>
    <h1>Información sobre las películas.</h1>
    <AdministracionPeliculas/>
    <button
        onClick={() => {
          navegar("/");
        }}
      >
        Volver a inicio
      </button>
    </>
  )
};

export default Peliculas;