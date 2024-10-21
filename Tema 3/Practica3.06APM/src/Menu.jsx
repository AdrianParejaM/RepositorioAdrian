import React from 'react';
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <>
    <nav>
    <Link className='menu_link' to='/'>
    Inicio
    </Link>
    <Link className='menu_link' to='/contacto'>
    Contacto
    </Link>
    <Link className='menu_link' to='/acerca-de'>
    Acerca de
    </Link>
    <Link className='menu_link' to='/productos'>
    Productos
    </Link>
    </nav>
    </>
  )
};

export default Menu;