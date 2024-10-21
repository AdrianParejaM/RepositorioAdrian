import React from 'react';
import { useNavigate } from "react-router-dom";

const Productos = () => {

  const navegar = useNavigate();

  return (
    <>
    <h1>Aquí se encuentran todos nuestros productos</h1>
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

export default Productos;