import React, { useContext } from "react";
import ListadoProducto from "./ListadoProducto.jsx";
import useProducto from "../../hooks/useProducto.jsx";

const ListadoProductos = ({borrado}) => {
  const { productosFiltrados, numeroProductos, precioMedio } = useProducto();

  return (
    <div id="listadoProductos" className="listado-contenedor">
        {numeroProductos > 0 ? (
            productosFiltrados.map((valor) => (
                <ListadoProducto key={valor.idProductos} datos={valor} />
            ))
        ) : (
            <p>No se han encontrado productos.</p>
        )}

        <div className="resumen-listado">
            <p><strong>Número de productos:</strong> {numeroProductos}</p>
            <p><strong>Precio medio:</strong> {precioMedio}€</p>
        </div>
    </div>
  );
};

export default ListadoProductos;
