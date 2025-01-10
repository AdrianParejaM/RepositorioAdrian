import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

const Menu = () => {
  return (
    <>
    <div className='navegacion__menu'>
          <Link className='navegacion__enlace' to='/'>
            Inicio
          </Link>
          <Link className='navegacion__enlace' to='/'>
            Bla
          </Link>
          <Link className='navegacion__enlace' to='/'>
            Bla
          </Link>
          <Link className='navegacion__enlace' to='/'>
            Bla
          </Link>
          <Link className='navegacion__enlace' to='/'>
            Bla
          </Link>
          <Link className='navegacion__enlace' to='/'>
            Bla
          </Link>
    </div>
    </>
  );
};

export default Menu;