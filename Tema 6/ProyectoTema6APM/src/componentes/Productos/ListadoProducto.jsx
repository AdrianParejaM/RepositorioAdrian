import React, { Fragment } from "react";
//import "./ListadoProducto.css";

const ListadoProducto = (props) => {
  const { id, nombreProducto, precio, descripcion, peso, imagen } = props.datos;
  return (
    <>
      <div className='listadoProducto' id={id}>
        <h2 className="nombre_precio_producto">{nombreProducto} - <em>{precio}€</em></h2>
        <h4 className="peso_descripcion_producto">{peso} g - {descripcion}</h4>
      </div>
    </>
  );
};

export default ListadoProducto;