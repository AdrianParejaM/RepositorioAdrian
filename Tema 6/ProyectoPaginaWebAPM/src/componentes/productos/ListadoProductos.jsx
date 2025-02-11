import React, { useEffect } from "react";
import ListadoProducto from "./ListadoProducto.jsx";
import useProducto from "../../hooks/useProducto.jsx";

const ListadoProductos = ({borrado}) => {

  //Utilizamos el hook para llamar las funciones del contexto.
  const { productosFiltrados, numeroProductos, precioMedio, obtenerListado } = useProducto();

  //Hacemos el useEffect para que se carguen los productos.
  useEffect(() => {
    obtenerListado();
}, []);

  return (
    <div id="listadoProductos" className="listado-contenedor">
        {/*Mapeamos los productos.*/}
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
