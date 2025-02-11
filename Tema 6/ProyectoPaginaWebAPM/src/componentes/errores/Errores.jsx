import React from "react";
import "./Errores.css";

const Errores = ({ children }) => {
  //Página de errores.
  return (
    <>
      <div className='errores'>{children}</div>
    </>
  );
};

export default Errores;
