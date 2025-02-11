import React, {useEffect} from "react";
import useProducto from "../../hooks/useProducto.jsx";
import FormularioCamisetas from "../estructura/formularios/FormularioCamisetas.jsx";
import { useParams } from "react-router-dom";

const EditarCamiseta = () => {

    //Utilizamos el hook para llamar las funciones del contexto.
    const { editarCamisetas, obtenerProducto } = useProducto();

    const {id} = useParams();

    //Cargamos el producto que queremos editar.
    useEffect(() => {
      obtenerProducto(id)
    }, []);

   
  return (
    <>
    <div className="formularioInsertar">
      <h2 className="listado_titulo">Editar Camiseta</h2>
      {/*Ponemos la página general del formulario que se utiliza para editar y también para insertar.*/}
      <FormularioCamisetas />
      <button
          className="boton-insertar"
          onClick={() => {
            editarCamisetas()
          }}
      >
          Editar Camiseta
      </button>
    </div>
    </>
  );
};

export default EditarCamiseta;