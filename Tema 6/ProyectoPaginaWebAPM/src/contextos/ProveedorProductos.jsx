import React, { useState, createContext, useEffect } from "react";
import { supabase } from "../supabase/supabase.js";
import { generarUuidAleatorio } from "../biblioteca/biblioteca.js";


const contextoProductos = createContext();

const ProveedorProductos = ({ children }) => {
    const listadoProductosInicial = [];
    const productoInicial = {
        nombreProducto: "",
        peso: 0,
        precio: 0,
        imagen: "",
        descripcion: "",
      };
  //Estados para los productos.
    const [listadoProductos, setListadoProductos] = useState(listadoProductosInicial);
    const [errorProductos, setErrorProductos] = useState("");
    const [producto, setProducto] = useState(productoInicial);
    
    //Estado para los filtros.
    const [filtro, setFiltro] = useState({ tipo: "", valor: "" });

    //Obtener todos los productos.
    const obtenerListado = async () => {
        try {
            const { data, error } = await supabase.from("productos").select("*");
            if (error) throw error;
            setListadoProductos(data);
        } catch (fallo) {
            setErrorProductos(fallo.message);
        }
    };

    // Obtener un solo producto.
    const obtenerProducto = async (idProductos) => {
      setErrorProductos("");
      try {
          const { data, error } = await supabase.from("productos").select("*").eq("id", idProductos);
          if (error) throw error;
          setProducto(data[0]);
      } catch (fallo) {
          setErrorProductos(fallo.message);
      }
    };

    //Filtrar los productos de uno en uno.
    const productosFiltrados = listadoProductos.filter(producto => {
        let cumpleFiltro = true;

        if (filtro.tipo === "nombre" && filtro.valor) {
            cumpleFiltro = cumpleFiltro && producto.nombreProducto.toLowerCase().includes(filtro.valor.toLowerCase());
        }

        if (filtro.tipo === "precio" && filtro.valor) {
            cumpleFiltro = cumpleFiltro && producto.precio <= filtro.valor;
        }

        if (filtro.tipo === "peso" && filtro.valor) {
            cumpleFiltro = cumpleFiltro && producto.peso <= filtro.valor;
        }

        return cumpleFiltro;
    });

    const manejarFiltro = (tipo, valor) => {
      setFiltro({ tipo, valor });
    };

    // Calcular el número de productos filtrados.
    const numeroProductos = productosFiltrados.length;

    // Calcular el precio total de los productos filtrados.
    const precioTotal = productosFiltrados.reduce((total, producto) => total + producto.precio, 0);
    
    // Calcular el precio medio con solo 2 decimales, que en esto me ayudó el chatGPT que se tiene que usar toFixed.
    const precioMedio = numeroProductos > 0 ? (precioTotal / numeroProductos).toFixed(2) : 0;

    const actualizarDato = (evento) => {
        const { name, value } = evento.target;
        setProducto({ ...producto, [name]: value });
    };

    const insertarCamisetas = async () => {
        try {
          producto.idProductos = generarUuidAleatorio();
          const {data, error} = await supabase.from("productos").insert(producto);
          if(error){
            console.error(error.message)
          }
          else{
            setListadoProductos([...listadoProductos, producto]);
            setProducto(productoInicial);
          }
        } catch (error) {
          setErrorProductos(error.message);
        }
      };

    useEffect(() => {
        obtenerListado();
    }, []);

    const datosAExportar = {
        listadoProductos,
        obtenerListado,
        obtenerProducto,
        filtro,
        setFiltro,
        productosFiltrados,
        manejarFiltro,
        numeroProductos,
        precioMedio,
        actualizarDato,
        insertarCamisetas
    };

    return (
        <contextoProductos.Provider value={datosAExportar}>
            {children}
        </contextoProductos.Provider>
    );
};

export default ProveedorProductos;
export { contextoProductos };
