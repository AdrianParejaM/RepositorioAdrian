import React, { Fragment } from "react";

const ListadoProducto = (props) => {
  const { id, nombreProducto, precio, descripcion, peso } = props.datos;
  return (
    <>
      <div className='listadoProducto' id={id}>
        <h2>{nombreProducto} - <em>{precio}€</em></h2>
        <h4>{peso} kg - {descripcion}</h4>
      </div>
    </>
  );
};

export default ListadoProducto;