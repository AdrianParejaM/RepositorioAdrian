import React, { useState, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabase/supabase.js";
import { generarUuidAleatorio } from "../biblioteca/biblioteca.js";


const contextoProductos = createContext();

const ProveedorProductos = ({ children }) => {

    //Estados predeterminados.
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
    const [errorProductos, setErrorProductos] = useState([]);
    const [producto, setProducto] = useState(productoInicial);
    
    //Estado para los filtros.
    const [filtro, setFiltro] = useState({ tipo: "", valor: "" });

    //Creamos la variable navigate para poder redireccionar a la página anterior cuando se crea o edita un producto.
    const navigate = useNavigate();

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

    //Obtener un solo producto.
    const obtenerProducto = async (idProductos) => {
      setErrorProductos("");
      try {
          const { data, error } = await supabase.from("productos").select("*").eq("idProductos", idProductos);
          //console.log(data);
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

    //Actualizamos los datos.
    const actualizarDato = (evento) => {
        const { name, value } = evento.target;
        setProducto({ ...producto, [name]: value });
    };

    //Función para insertar las camisetas.
    const insertarCamisetas = async () => {
        try {
            //No he sabido hacer otra manera para poner todos los errores.
            let errores = [];
            if (!producto.nombreProducto) errores.push("El nombre del producto es obligatorio.");
            if (!producto.peso) errores.push("El peso del producto es obligatorio.");
            if (!producto.precio) errores.push("El precio del producto es obligatorio.");
            if (!producto.imagen) errores.push("La imagen del producto es obligatoria.");
            if (!producto.descripcion) errores.push("La descripción del producto es obligatoria.");
    
            if (errores.length > 0) {
                setErrorProductos(errores);
                return;
            }

            producto.idProductos = generarUuidAleatorio();
            const { data, error } = await supabase.from("productos").insert(producto);
    
            if (error) {
                console.error(error.message);
            } else {
                setListadoProductos([...listadoProductos, producto]);
                setProducto(productoInicial);
                setErrorProductos([]);
            }
        } catch (error) {
            setErrorProductos(error.message);
        }
        navigate(-1);
    };
    

    //Función para borrar las camisetas.
    const borrarCamisetas = async (idProductos) => {
        try {
            const { data, error } = await supabase.from("productos").delete().eq("idProductos", idProductos);

            const camisetasFiltradas = listadoProductos.filter((camiseta) => {
                if (camiseta.idProductos !== idProductos) {
                  return camiseta;
                }
              });
              setListadoProductos(camisetasFiltradas);

        }catch (error) {
            setErrorProductos(error.message);
        }
    };

    //Función para editar las camisetas.
    const editarCamisetas = async () => {
        try {

            //Son los mismos errores que en insertar.
            let errores = [];
            if (!producto.nombreProducto) errores.push("El nombre del producto es obligatorio.");
            if (!producto.peso) errores.push("El peso del producto es obligatorio.");
            if (!producto.precio) errores.push("El precio del producto es obligatorio.");
            if (!producto.imagen) errores.push("La imagen del producto es obligatoria.");
            if (!producto.descripcion) errores.push("La descripción del producto es obligatoria.");
    
            if (errores.length > 0) {
                setErrorProductos(errores);
                return;
            }

            const { data, error } = await supabase.from("productos").update(producto).eq("idProductos", producto.idProductos);
    
            if (error) {

                throw error.message;

            }else{

                setProducto(productoInicial);
                setErrorProductos([]);
                obtenerListado();
                navigate(-1);
            }

        } catch (error) {
            setErrorProductos(error.message);
        }
    };

    //Exportamos todo.
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
        insertarCamisetas,
        borrarCamisetas,
        editarCamisetas,
        producto,
        errorProductos,
        setErrorProductos
    };

    return (
        <contextoProductos.Provider value={datosAExportar}>
            {children}
        </contextoProductos.Provider>
    );
};

export default ProveedorProductos;
export { contextoProductos };
