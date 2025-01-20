import React, { useContext } from "react";
import "./CerrarSesion.css";
import { contextoSesion } from "../../../contextos/ProveedorSesion.jsx";

const CerrarSesion = () => {

  const { cerrarSesion } = useContext(contextoSesion);

  return (
    <div className='cerrarsesion__cerrar'>
      <button
        onClick={() => {
          cerrarSesion();
        }}
      >
        Cerrar sesión
      </button>
    </div>
  );
};

export default CerrarSesion;
