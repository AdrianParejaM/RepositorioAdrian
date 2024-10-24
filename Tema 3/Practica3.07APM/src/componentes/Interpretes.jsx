import React from 'react';
import { Link, useNavigate, Outlet } from "react-router-dom";

const Interprete = () => {

  const navegar = useNavigate();

  return (
    <>
    <h1>Aquí se encuentran todos los intérpretes.</h1>
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

export default Interprete;