import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { contextoSesion } from "../../contextos/ProveedorSesion.jsx";
import "./Menu.css";

const Menu = () => {

  const { sesionIniciada } = useContext(contextoSesion);

  return (
    <>
    <div className='navegacion__menu'>
          <Link className='navegacion__enlace' to='/'>
            Inicio
          </Link>

          {sesionIniciada && (
          <>
            <Link className='navegacion__enlace' to='/listado'>
              Listado
            </Link>
            <Link className='navegacion__enlace' to='/'>
              Inserción
            </Link>
            <Link className='navegacion__enlace' to='/'>
              Borrado
            </Link>
            <Link className='navegacion__enlace' to='/'>
              Actualización
            </Link>
          </>
        )}
    </div>
    </>
  );
};

export default Menu;