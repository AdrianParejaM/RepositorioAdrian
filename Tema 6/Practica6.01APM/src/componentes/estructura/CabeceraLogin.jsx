import React from "react";
import { Link } from "react-router-dom";
import "./CabeceraLogin.css";

const CabeceraLogin = () => {
  return (
    <>
      <div id='cabecera-navegacion'>
        <header id='cabecera'>
          <h1>UT06 Almacenamiento con Supabase</h1>
          <div className='cabecera__sesion'></div>
        </header>
        <nav className='navegacion__menu'>
          <Link className='navegacion__enlace' to='/login'>
            Login
          </Link>
        </nav>
      </div>

    </>
  );
};

export default CabeceraLogin;
