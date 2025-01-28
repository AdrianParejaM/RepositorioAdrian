import React, { useContext } from "react";
import { contextoSesion } from "../../contextos/ProveedorSesion.jsx";

const CerrarSesion = () => {

  const { cerrarSesion } = useContext(contextoSesion);

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
