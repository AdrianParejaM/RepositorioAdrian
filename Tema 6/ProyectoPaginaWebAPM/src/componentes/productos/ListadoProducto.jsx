import React from "react";

const ListadoProducto = (props) => {
  const { id, nombreProducto, precio, descripcion, peso, imagen } = props.datos;
  return (
    <>
      <div className='listadoProducto' id={id}>
        <img className="camisetas" src={imagen} alt="Camiseta" />
        <h2 className="nombre_producto">{nombreProducto}</h2>
        <h3 className="nombre_precio"><em>{precio}€</em></h3>
        <h4 className="peso_descripcion_producto">{peso} g - {descripcion}</h4>
      </div>
    </>
  );
};

export default ListadoProducto;