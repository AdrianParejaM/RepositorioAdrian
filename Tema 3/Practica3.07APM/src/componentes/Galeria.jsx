import React from 'react';
import { Link, useNavigate, Outlet } from "react-router-dom";
import AdministracionGaleria from './AdministracionGaleria.jsx';

const Galeria = () => {

  const navegar = useNavigate();
  //Importamos el componente de administración y así se queda este componente más limpio y legible.
  return (
    <>
    <h1>Esta es la galería.</h1>
    <AdministracionGaleria />
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

export default Galeria