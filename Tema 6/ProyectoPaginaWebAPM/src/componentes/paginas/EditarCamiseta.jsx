import React from "react";
import useProducto from "../../hooks/useProducto.jsx";
import FormularioCamisetas from "../estructura/formularios/FormularioCamisetas.jsx";

const EditarCamiseta = () => {

    const { editarCamisetas } = useProducto();

  return (
    <>
    <div className="formularioInsertar">
      <h2 className="listado_titulo">Editar Camiseta</h2>
      <FormularioCamisetas />
      <button
          className="boton-insertar"
          onClick={() => editarCamisetas()}
      >
          Editar Camiseta
      </button>
    </div>
    </>
  );
};

export default EditarCamiseta;