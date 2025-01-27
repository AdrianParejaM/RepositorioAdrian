import React from "react";
import { Routes, Route } from "react-router-dom";
import Inicio from "../paginas/Inicio.jsx";
import Login from "../paginas/Login.jsx";
import Error from "../paginas/Error.jsx";
//import Listados from "../paginas/Listados.jsx";

const RutasUT06 = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<Error />} />
        {/*Esto es de la práctica 6.03.
        <Route path='/camisetas' element={<Listados />} />*/}
      </Routes>
    </>
  );
};

export default RutasUT06;