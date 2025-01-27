import React from "react";
import "./Login.css";
import IniciarSesion from "../sesiones/IniciarSesion.jsx";
import CrearCuenta from "../sesiones/CrearCuenta.jsx";

const Login = () => {
  return (
    <>
      <div className='inicioSesion'>
        <CrearCuenta />
        <IniciarSesion />
      </div>
    </>
  );
};

export default Login;
