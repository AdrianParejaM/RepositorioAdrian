import React, { useContext } from "react";
import useProducto from "../../../hooks/useProducto.jsx";
import "./FormularioCamisetas.css";

const FormularioCamisetas = () => {
  //Utilizamos el hook para llamar las funciones del contexto.
  const { actualizarDato, producto, errorProductos } = useProducto();

  return (
    <>
      <div className="formularioBasico">
          <label htmlFor="nombreProducto">Nombre del producto</label>
          <input
              type="text"
              name="nombreProducto"
              id="nombreProducto"
              className="input-text"
              placeholder="Nombre del producto..."
              value={producto.nombreProducto || ""}
              onChange={(e) => actualizarDato(e)}
          />

          <label htmlFor="peso">Peso del producto</label>
          <input
              type="number"
              name="peso"
              id="peso"
              className="input-text"
              placeholder="Peso del producto..."
              value={producto.peso || ""}
              min={0}
              onChange={(e) => actualizarDato(e)}
          />

          <label htmlFor="precio">Precio del producto</label>
          <input
              type="number"
              name="precio"
              id="precio"
              className="input-text"
              placeholder="Precio del producto..."
              value={producto.precio || ""}
              min={0}
              onChange={(e) => actualizarDato(e)}
          />

          <label htmlFor="imagen">Imagen del producto</label>
          <input
              type="text"
              name="imagen"
              id="imagen"
              className="input-text"
              placeholder="Inserte URL de la imagen..."
              value={producto.imagen || ""}
              onChange={(e) => actualizarDato(e)}
          />

          <label htmlFor="descripcion">Descripción del producto</label>
          <input
              type="text"
              name="descripcion"
              id="descripcion"
              className="input-text"
              placeholder="Descripción del producto..."
              value={producto.descripcion || ""}
              onChange={(e) => actualizarDato(e)}
          />

          {/*Mostramos los errores, si es que hay.*/}
          {errorProductos.length > 0 && (
              <div className="errorMensaje">
                  {errorProductos.map((error, index) => (
                      <p key={index} className="errorTexto">{error}</p>
                  ))}
              </div>
          )}
      </div>
    </>
  );
};

export default FormularioCamisetas;