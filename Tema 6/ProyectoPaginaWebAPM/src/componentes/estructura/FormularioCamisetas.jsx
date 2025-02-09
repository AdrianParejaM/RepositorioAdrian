import React, { useContext } from "react";
import { contextoProductos } from "../../contextos/ProveedorProductos.jsx";
import "./FormularioCamisetas.css";

const FormularioCamisetas = () => {

    const { actualizarDato } = useContext(contextoProductos);

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
          onChange={(e) => actualizarDato(e)}
        />

        <label htmlFor="peso">Peso del producto</label>
        <input
          type="number"
          name="peso"
          id="peso"
          className="input-text"
          placeholder="Peso del producto..."
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
          onChange={(e) => actualizarDato(e)}
        />

        <label htmlFor="descripcion">Descripción del producto</label>
        <input
          type="text"
          name="descripcion"
          id="descripcion"
          className="input-text"
          placeholder="Descripción del producto..."
          onChange={(e) => actualizarDato(e)}
        />
    </div>
    </>
  );
};

export default FormularioCamisetas;