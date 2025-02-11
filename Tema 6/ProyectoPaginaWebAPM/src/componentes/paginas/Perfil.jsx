import React from "react";
import useSesion from "../../hooks/useSesion.jsx";
import "./Perfil.css";

const Perfil = () => {

    //He creado la página de perfil para que tenga más utilidad poner el saludo al usuario.

    //Utilizamos el hook para llamar las funciones del contexto.
    const { usuario } = useSesion();

  return (
    <>
        <h1 className="bienvenida_usuario">Bienvenido a tu perfil, {usuario.email}</h1>
        <div className="info_usuario">
            <h3>Aquí encontrarás toda tu información.</h3>
        </div>
    </>
  );
};

export default Perfil;