import { createContext, useContext, useState, useEffect } from "react";
import useSesion from "../hooks/useSesion.jsx";
import { supabase } from "../supabase/supabase.js";

const contextoListas = createContext();

export const ProveedorListas = ({ children }) => {
  //Casi pongo en vez de Predefinido default =).
  const nombreListaPredefinido = "";
  const mostrarPredefinido = false;
  const listaVacia = [];

  //Creamos los estados.
  const [listas, setListas] = useState(listaVacia);
  const [nombreNuevaLista, setNombreNuevaLista] = useState(nombreListaPredefinido);
  const [mostrarFormulario, setMostrarFormulario] = useState(mostrarPredefinido); 

  //Importamos lo necesario con los hooks.
  const { usuario } = useSesion();

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

  //Manejamos la creación de listas.
  const manejarCrearLista = async () => {
    if (!nombreNuevaLista.trim()) {
      /*No he encontrado otra manera de hacer alguna alerta cuando está el nombre de la lista vacío.*/
      alert("El nombre de la lista no puede estar vacío");
      return;
    }
    await crearLista(nombreNuevaLista, usuario.id);
    setNombreNuevaLista(nombreListaPredefinido); 
    setMostrarFormulario(mostrarPredefinido); 
  };

  //Exportamos todos los datos.
  const datosAExportar = {
    obtenerListas,
    crearLista,
    borrarLista,
    listas,
    nombreNuevaLista, 
    setNombreNuevaLista,
    mostrarFormulario, 
    setMostrarFormulario,
    manejarCrearLista
};

  return (
    <contextoListas.Provider value={datosAExportar}>
      {children}
    </contextoListas.Provider>
  );
};

export default ProveedorListas;
export { contextoListas };