import React, { useContext } from "react";
import { contextoProductos } from "../../contextos/ProveedorProductos.jsx";
import "./InsertarCamiseta.css";
import FormularioCamisetas from "../estructura/FormularioCamisetas.jsx";

const InsertarCamiseta = () => {
  const { insertarCamisetas } = useContext(contextoProductos);
  
  return (
    <div className="formularioInsertar">
      <h2 className="listado_titulo">Insertar Camiseta</h2>
      <FormularioCamisetas />
      <button
          className="boton-insertar"
          onClick={() => insertarCamisetas()}
      >
          Insertar Camiseta
      </button>
    </div>
  );
};

export default InsertarCamiseta;
