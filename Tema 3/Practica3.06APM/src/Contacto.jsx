import React from 'react';
import { useNavigate } from "react-router-dom";

const Contacto = () => {

  const navegar = useNavigate();

  return (
    <>
    <h1>¡Contacta con nosotros!</h1>
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

export default Contacto;