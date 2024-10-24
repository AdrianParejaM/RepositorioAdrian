import React from 'react';
import { Link, useNavigate, Outlet } from "react-router-dom";

const Galeria = () => {

  const navegar = useNavigate();

  return (
    <>
    <h1>Esta es la galería.</h1>
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

export default Galeria