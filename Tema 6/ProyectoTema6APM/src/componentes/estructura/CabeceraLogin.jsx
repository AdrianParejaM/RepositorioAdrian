import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./CabeceraLogin.css";
import { contextoSesion } from "../../contextos/ProveedorSesion.jsx";
import CerrarSesion from "../UT06/sesion/CerrarSesion.jsx";

const CabeceraLogin = () => {

  const { sesionIniciada, usuario } = useContext(contextoSesion);

  return (
    <>
      <div id='cabecera-navegacion'>
        <header id='cabecera'>
          <h1>CamisFutbol</h1>
          <div className='cabecera__sesion'></div>
        </header>
        {sesionIniciada && <p>Hola, {usuario.email}</p>}
        <nav className='navegacion__menu'>
        {!sesionIniciada ?
          <Link className='navegacion__enlace' to='/login'>
            Login
          </Link>
        : /*Lo que he hecho es que si no ha iniciado sesión, que salga el botón de login y si está la sesión iniciada que salga el de cerrar sesión.*/
        <Link className='navegacion__enlace' to='/'>
            <CerrarSesion />
          </Link>}
        </nav>
      </div>

    </>
  );
};

export default CabeceraLogin;
