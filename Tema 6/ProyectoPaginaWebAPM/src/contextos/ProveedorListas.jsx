// src/contextos/ProveedorListas.jsx
import { createContext, useContext, useState, useEffect } from "react";
import { supabase } from "../supabase/supabase.js";

const contextoListas = createContext();

export const ProveedorListas = ({ children }) => {
  const [listas, setListas] = useState([]);

  // Obtenemos la lista de la compra del usuario que está la sesión iniciada.
  const obtenerListas = async (idUsuario) => {
    const { data, error } = await supabase.from("listaCompra").select("*").eq("idPropietario", idUsuario);
    if (error) {
      console.error("Error obteniendo las listas de la compra", error);
    } else {
      setListas(data);
    }
  };

  // Crear una lista de la compra.
  const crearLista = async (nombreLista, idUsuario) => {
    const { data, error } = await supabase.from("listaCompra").insert([
      { nombreLista, idPropietario: idUsuario, fechaCreacion: new Date()},
    ]);
    if (error) {
      console.error("Error creando la lista de la compra:", error.message);
    } else {
      obtenerListas(idUsuario);
    }
  };
  

  // Borrar una lista de la compra.
  const borrarLista = async (idLista, idUsuario) => {
    const { error } = await supabase.from("listaCompra").delete().eq("idLista", idLista);
    if (error) {
      console.error("Error borrando la lista", error);
    } else {
      obtenerListas(idUsuario);
    }
  };

  const datosAExportar = {
    obtenerListas,
    crearLista,
    borrarLista,
    listas

};

  return (
    <contextoListas.Provider value={datosAExportar}>
      {children}
    </contextoListas.Provider>
  );
};

export default ProveedorListas;
export { contextoListas };