import React from 'react';
import { Link } from "react-router-dom";
import "../css/Menu.css";

const Menu = () => {
  return (
    <>
    <nav>
    <Link className='menu_link' to='/'>
    Inicio
    </Link>
    <Link className='menu_link' to='/peliculas'>
    Películas
    </Link>
    <Link className='menu_link' to='/interpretes'>
    Intérpretes
    </Link>
    <Link className='menu_link' to='/galeria'>
    Galería
    </Link>
    <Link className='menu_link' to='/acerca-de'>
    Acerca de
    </Link>
    </nav>
    </>
  )
};

export default Menu;