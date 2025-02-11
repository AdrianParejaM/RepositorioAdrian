import React from "react";
import "./Login.css";
import useSesion from "../../hooks/useSesion.jsx";
import IniciarSesion from "../sesiones/IniciarSesion.jsx";
import CrearCuenta from "../sesiones/CrearCuenta.jsx";
import Errores from "../errores/Errores.jsx";

const Login = () => {

    //Utilizamos el hook para llamar las funciones del contexto.
  const { errorUsuario } = useSesion();

  return (
    <>
      <div className='inicioSesion'>
        <CrearCuenta />
        <IniciarSesion />
      </div>
      <div className="error">
        <Errores>{errorUsuario}</Errores>
      </div>
    </>
  );
};

export default Login;
