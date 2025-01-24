import React, { useState, useEffect, createContext } from "react";
import { supabaseConexion } from "../config/supabase.js";
import { useNavigate } from "react-router-dom";

const contextoProductos = createContext();

const ProveedorProductos = ({children}) => {

    //Valores iniciales para todos los datos.
    const objetoInicial = {};
    const arrayInicial = [];
    const errorInicial = "";
    const booleanInicial = false;
    const productoInicial = {
        nombreProducto: "",
        peso: "",
        precio: "",
        imagen: "",
        descripcion: "",
    };

      /** Estados para proveer. */
    const [listadoProductos, setListadoProductos] = useState(arrayInicial);
    const [errorProductos, setErrorProductos] = useState(errorInicial);
    const [producto, setProducto] = useState(productoInicial);

    const obtenerListado = async () => {
        try {
          const { data, error } = await supabaseConexion.from("productos").select("*");
          setListadoProductos(data);
        } catch (fallo) {
            setErrorProductos(fallo.message);
        }
      };

    //Función para obtener producto.
    const obtenerProducto = async (id) => {
    setErrorProductos(errorInicial);
    try {
        const { data, error } = await supabaseConexion
        .from("productos")
        .select("*")
        .eq("id", id);
        setProducto(data[0]);
    } catch (fallo) {
        setErrorProductos(fallo.message);
    }
    };

    //Obtenemos los objetos en la carga del contexto.
    useEffect(() => {
      obtenerListado();
    }, []);


    //Exportamos todos los datos.
  const datosAExportar = {
    obtenerListado,
    obtenerProducto,
    listadoProductos
  };

  return (
    <>
    <contextoProductos.Provider value={datosAExportar}>
    {children}
    </contextoProductos.Provider>
    </>
  );
};

export default ProveedorProductos;
export { contextoProductos };