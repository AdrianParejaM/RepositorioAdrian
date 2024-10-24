import React from "react";
import { Link, useNavigate, Outlet } from "react-router-dom";

const Administracion = () => {
  const navegar = useNavigate();
  return (
    <>
      <div className='administracion-navegacion'>
        <Link
          className='administracion-elementomenu'
          to='/peliculas/titulo'
        >
          Título
        </Link>
        <Link
          className='administracion-elementomenu'
          to='/peliculas/interprete'
        >
          Intérprete
        </Link>
        <Link
          className='administracion-elementomenu'
          to='/peliculas/director'
        >
          Director
        </Link>
      </div>
      <div>
        <Outlet />
      </div>
      <div>
        <button
          onClick={() => {
            navegar("/");
          }}
        >
          Volver a inicio
        </button>
      </div>
    </>
  );
};

export default Administracion;