import React from "react";
import useProducto from "../../hooks/useProducto.jsx";
import "./InsertarCamiseta.css";
import FormularioCamisetas from "../estructura/formularios/FormularioCamisetas.jsx";

const InsertarCamiseta = () => {

  //Utilizamos el hook para llamar las funciones del contexto.
  const { insertarCamisetas } = useProducto();
  
  return (
    <div className="formularioInsertar">
      <h2 className="listado_titulo">Insertar Camiseta</h2>
      {/*Ponemos la página general del formulario que se utiliza para editar y también para insertar.*/}
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
