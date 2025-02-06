import React, { useContext } from "react";
import { contextoProductos } from "../../contextos/ProveedorProductos.jsx";
import ListadoProductos from "../productos/ListadoProductos.jsx";
import { Link } from "react-router-dom";
import "./Listados.css";

const Listados = () => {
  //Importamos lo necesario.
    const { filtro, manejarFiltro } = useContext(contextoProductos);

    return (
      <>
        <div className="contenedor_titulo_filtro">
            <h2 className="listado_titulo">Camisetas</h2>
            <div className="contenedor_filtro">
                <label htmlFor="filtro_nombre">Título</label>
                <input
                    type="text"
                    id="filtro_nombre"
                    name="filtro_nombre"
                    placeholder="Filtrar las camisetas por el título..."
                    value={filtro.tipo === "nombre" ? filtro.valor : ""}
                    onChange={(e) => manejarFiltro("nombre", e.target.value)}
                />

                <label htmlFor="filtro_precio">Precio</label>
                <input
                    type="number"
                    id="filtro_precio"
                    name="filtro_precio"
                    placeholder="Filtrar las camisetas por precio..."
                    value={filtro.tipo === "precio" ? filtro.valor : ""}
                    onChange={(e) => manejarFiltro("precio", e.target.value)}
                />

                <label htmlFor="filtro_peso">Peso</label>
                <input
                    type="number"
                    id="filtro_peso"
                    name="filtro_peso"
                    placeholder="Filtrar las camisetas por peso..."
                    value={filtro.tipo === "peso" ? filtro.valor : ""}
                    onChange={(e) => manejarFiltro("peso", e.target.value)}
                />

                {/*Botón para añadir camisetas*/}
                <Link className='boton_anyadir_camisetas' to='/camisetas/insertarCamisetas'>
                    Insertar Camiseta
                </Link>
                
            </div>
        </div>
        <ListadoProductos />
      </>
    );
};

export default Listados;
