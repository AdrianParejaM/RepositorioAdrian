import React from "react";
import { Link } from "react-router-dom";
import "./CabeceraLogin.css";
import useSesion from "../../hooks/useSesion.jsx";
import CerrarSesion from "../sesiones/CerrarSesion.jsx";

const CabecerayLogin = () => {

  //Utilizamos el hook para llamar las funciones del contexto.
  const { sesionIniciada, usuario } = useSesion();

  return (
    <>
      <div id='cabecera_navegacion'>
        <header id='cabecera'>
          <h1>CamisFutbol</h1>
          <div className='cabecera_sesion'></div>
        </header>
        {sesionIniciada && <Link to='/perfil'><p className="nombre_usuario">Hola, {usuario.email}</p></Link>}
        <nav className='navegacion_menu'>
        {!sesionIniciada ?
          <Link className='enlace_login' to='/login'>
            Login
          </Link>
        : /*Lo que he hecho es que si no ha iniciado sesión, que salga el botón de login y si está la sesión iniciada que salga el de cerrar sesión.*/
            <CerrarSesion />
        }
        </nav>
      </div>

    </>
  );
};

export default CabecerayLogin;
