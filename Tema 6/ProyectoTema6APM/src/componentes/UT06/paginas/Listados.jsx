import React, { useContext } from "react";
import { contextoProductos } from "../../../contextos/ProveedorProductos.jsx";
//import ListadoProducto from "../../Productos/ListadoProducto.jsx";
import ListadoProductos from "../../Productos/ListadoProductos.jsx";
//import "./Listados.css";

const Listados = () => {
  // Se obtiene lo necesario del contexto.
  const { obtenerListado, obtenerProducto } = useContext(contextoProductos);

  return (
    <>
      <h2>Listado de productos</h2>
      <div
          className='listado_productos'
          onClick={(evento) => {
            obtenerProducto(evento.target.id);
          }}
        >
          <ListadoProductos />
        </div>

      <button
            onClick={() => {
              obtenerListado();
            }}
          >
            Cargar productos
          </button>
    </>
  );
};

export default Listados;