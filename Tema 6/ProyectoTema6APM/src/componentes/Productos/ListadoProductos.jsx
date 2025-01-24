import React, { useEffect, useContext } from "react";
//import "./ListadoProductos.css";
import ListadoProducto from "./ListadoProducto.jsx";
import { contextoProductos } from "../../contextos/ProveedorProductos.jsx";

const ListadoProductos = () => {
  const { listadoProductos, obtenerListado } = useContext(contextoProductos);

  //Obtenemos los objetos en la carga del contexto (importante hacerlo aquí y no en el contexto jeje).
  useEffect(() => {
    obtenerListado();
  }, []);

  return (
    <>
      <div id='listadoProductos'>
        {Array.isArray(listadoProductos) && listadoProductos.length
          ? listadoProductos.map((valor, indice, array) => {
              return <ListadoProducto key={valor.idProductos} datos={valor} />;
            })
          : "No se han encontrado productos."}
      </div>
    </>
  );
};

export default ListadoProductos;