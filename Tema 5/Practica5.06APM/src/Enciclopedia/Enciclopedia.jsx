import React, { useEffect, useState } from 'react';
import './Enciclopedia.css';
import MostrarPeliculas from "./MostrarPeliculas.jsx";
import MostrarContenido from './MostrarContenido.jsx';
import { obtenerDatos } from "../Biblioteca/funcionesDatos.js";

const Enciclopedia = () => {
  //Asignamos los useState.
  const [peliculas, setPeliculas] = useState([]);
  const [error, setError] = useState("");
  const [peliculaSeleccionada, setPeliculaSeleccionada] = useState(null);

  //Obtenemos la API.
  const url = "https://swapi.py4e.com/api/films/";

  //Traemos los datos de la API con el "async-await".
  const traerPeliculas = async () => {

    try {

      const datos = await obtenerDatos(url);
      setPeliculas(datos.results);
      
    } catch (error) {

      setError(`Error al obtener las películas: ${error.message}`);
      
    }
  
  };
  //Con el useEffect ejecutamos la función de traerPeliculas.
  useEffect(() => {
    traerPeliculas();
  }, []);

  return (
    <>
      <h1>Enciclopedia de Star Wars</h1>
      <div id="contenedor">
        <div id="peliculas">
          <MostrarPeliculas 
            peliculas={peliculas} 
            error={error} 
            seleccionarPelicula={setPeliculaSeleccionada} 
          />
        </div>
        <div id="informacion">
          <MostrarContenido 
            peliculaSeleccionada={peliculaSeleccionada}
          />
        </div>
      </div>
    </>
  );
};

export default Enciclopedia;
