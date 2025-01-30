import React, { useContext } from "react";
import { contextoProductos } from "../../contextos/ProveedorProductos.jsx";
import ListadoProductos from "../productos/ListadoProductos.jsx";
import "./Listados.css";

const Listados = () => {
    // Se obtiene lo necesario del contexto.
    const { } = useContext(contextoProductos);
  
    return (
      <>
        <div className="contenedor_titulo_filtro">
          <h2 className="listado_titulo">Camisetas</h2>
          <div className="contenedor_filtro">
            <label htmlFor="filtro_productos">Filtrar productos</label>
            <input type="text" id="filtro_productos" name="filtro_productos" placeholder="Filtrar las camisetas..."/>
          </div>
        </div>
            <ListadoProductos />
      </>
    );
  };
  
  export default Listados;