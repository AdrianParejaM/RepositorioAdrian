import React from 'react';
import { useNavigate } from "react-router-dom";

const AcercaDe = () => {
  
  const navegar = useNavigate();
  
  return (
    <>
    <h1>Información sobre nosotros.</h1>
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

export default AcercaDe;