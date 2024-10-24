import React from 'react';
import { Link, useNavigate, Outlet } from "react-router-dom";

const Peliculas = () => {

  const navegar = useNavigate();

  return (
    <>
    <h1>Información sobre las películas.</h1>
    <button
        onClick={() => {
          navegar("/");
        }}
      >
        Volver a inicio.
      </button>
    </>
  )
};

export default Peliculas;