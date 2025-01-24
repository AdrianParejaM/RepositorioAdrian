import React, { useContext } from "react";
//import "./ListadoProductos.css";
import ListadoProducto from "./ListadoProducto.jsx";
import { contextoProductos } from "../../contextos/ProveedorProductos.jsx";

const ListadoProductos = () => {
  const { listadoProductos } = useContext(contextoProductos);
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