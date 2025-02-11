import React from "react";
import useProducto from "../../hooks/useProducto.jsx";
import { Link } from "react-router-dom";

const ListadoProducto = (props) => {
  const { id, nombreProducto, precio, descripcion, peso, imagen } = props.datos;
  const { borrarCamisetas } = useProducto();

  return (
    <>
      <div className='listadoProducto' id={id}>
        <img className="camisetas" src={imagen} alt="Camiseta" />
        <h2 className="nombre_producto">{nombreProducto}</h2>
        <h3 className="nombre_precio"><em>{precio}€</em></h3>
        <h4 className="peso_descripcion_producto">{peso} g - {descripcion}</h4>
        <div className="botones-container">
        <Link className='editar-camiseta' to='/camisetas/editarCamisetas'>
          Editar Camiseta
        </Link>
          <p className="eliminar-camiseta" onClick={() => borrarCamisetas(props.datos.idProductos)}>
          Eliminar Camiseta
          </p>
        </div>
      </div>
    </>
  );
};

export default ListadoProducto;