import React, { useContext } from "react";
import { Link } from "react-router-dom";
import useSesion from "../../hooks/useSesion.jsx";
import "./Menu.css";

const Menu = () => {

  //Utilizamos el hook para llamar las funciones del contexto.
  const { sesionIniciada } = useSesion();

  return (
    <>
    <div className='navegacion__menu'>
          <Link className='navegacion__enlace' to='/'>
            Inicio
          </Link>

          {/*Si está la sesión iniciada se muestran los siguientes botones.*/}
          {sesionIniciada && (
          <>
            <Link className='navegacion__enlace' to='/camisetas'>
              Camisetas
            </Link>

            <Link className='navegacion__enlace' to='/listas'>
              Listas
            </Link>
          </>
        )}
    </div>
    </>
  );
};

export default Menu;