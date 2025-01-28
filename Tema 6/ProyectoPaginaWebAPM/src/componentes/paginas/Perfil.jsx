import React, { useContext } from "react";
import { contextoSesion } from "../../contextos/ProveedorSesion.jsx";
import "./Perfil.css";

const Perfil = () => {

    //He creado la página de perfil para que tenga más utilidad poner el nombre.
    const { usuario } = useContext(contextoSesion);

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