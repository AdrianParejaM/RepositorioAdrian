import React from "react";
import "./Login.css";
import IniciarSesion from "../sesion/IniciarSesion";
import CrearCuenta from "../sesion/CrearCuenta";
import CerrarSesion from "../sesion/CerrarSesion";

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
