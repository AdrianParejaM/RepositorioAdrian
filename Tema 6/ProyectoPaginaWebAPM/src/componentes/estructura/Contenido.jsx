import React from "react";
import "./Contenido.css";

const Contenido = ({ children }) => {

  //Página para el contenido.

  return (
    <>
      <article id='contenido_principal'>{children}</article>
    </>
  );
};

export default Contenido;
