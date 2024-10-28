import React from "react";
import { Link, useNavigate, Outlet } from "react-router-dom";
import "../css/Menu.css";

const AdministracionGaleria = () => {
    //Creamos este componente administración para implementarlo en su respectivo componente y que quede más limpio.
  return (
    <>
      <div className='adminPelis'>
        <Link
          className='menu_link'
          to='/galeria/titulo'
        >
          Título
        </Link>
        <Link
          className='menu_link'
          to='/galeria/interprete'
        >
          Intérprete
        </Link>
        <Link
          className='menu_link'
          to='/galeria/director'
        >
          Director
        </Link>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default AdministracionGaleria;