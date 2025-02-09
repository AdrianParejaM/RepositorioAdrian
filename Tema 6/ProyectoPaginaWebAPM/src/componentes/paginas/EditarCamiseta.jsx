import React, { useContext } from "react";
import { contextoProductos } from "../../contextos/ProveedorProductos.jsx";
import FormularioCamisetas from "../estructura/FormularioCamisetas.jsx";

const EditarCamiseta = () => {

    const { editarCamisetas } = useContext(contextoProductos);

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