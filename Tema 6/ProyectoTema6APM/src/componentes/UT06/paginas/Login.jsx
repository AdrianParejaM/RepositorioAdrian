import React from "react";
import "./Login.css";
import IniciarSesion from "../sesion/IniciarSesion";
import CrearCuenta from "../sesion/CrearCuenta";

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
