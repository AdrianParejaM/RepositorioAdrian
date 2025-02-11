import React from "react";
import useSesion from "../../hooks/useSesion.jsx";

const CerrarSesion = () => {

  //Utilizamos el hook para llamar las funciones del contexto.
  const { cerrarSesion } = useSesion();

  return (
    <div>
      <button className='boton_cerrar_sesion'
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
