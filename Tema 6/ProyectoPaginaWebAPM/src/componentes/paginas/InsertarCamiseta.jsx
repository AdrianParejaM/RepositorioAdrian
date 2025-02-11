import React from "react";
import useProducto from "../../hooks/useProducto.jsx";
import "./InsertarCamiseta.css";
import FormularioCamisetas from "../estructura/formularios/FormularioCamisetas.jsx";

const InsertarCamiseta = () => {
  const { insertarCamisetas } = useProducto();
  
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
