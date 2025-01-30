import React, { useContext } from "react";
import "./Login.css";
import { contextoSesion } from "../../contextos/ProveedorSesion.jsx";
import IniciarSesion from "../sesiones/IniciarSesion.jsx";
import CrearCuenta from "../sesiones/CrearCuenta.jsx";
import Errores from "../errores/Errores.jsx";

const Login = () => {

  const { errorUsuario } = useContext(contextoSesion);

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
