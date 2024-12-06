import React, { useEffect, useState } from 'react';
import { fechaFormatoEuropeo } from "./Biblioteca/Biblioteca.js";
import './Enciclopedia.css';

const Enciclopedia = () => {

  //Inicializamos todos los useState.
  const peliculasIniciales = [];
  const erroresIniciales = "";
  const [peliculas, setPeliculas] = useState(peliculasIniciales);
  const [peliculaSeleccionada, setPeliculaSeleccionada] = useState(null);
  const [error, setError] = useState(erroresIniciales);

  //Realizamos el fetch.
  const traerPeliculas = () => {
    const url = "https://swapi.dev/api/films/";

    fetch(url)
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((datos) => {
        setPeliculas(datos.results);
      })
      .catch((error) => {
        setError(`Error al obtener las películas: ${error.message}`);
      });
  };

  //Hacemos el "useEffect" para que el fetch se realice a la carga del componente.
  useEffect(() => {
    traerPeliculas();
  }, []);

  //Ahora si que he puesto "clic" en castellano.
  const clicPeliculas = (pelicula) => {
    setPeliculaSeleccionada(pelicula);
  };

  return (
    <>
      <h1>Enciclopedia de Star Wars</h1>
      <div id="contenedor">
        <div id="peliculas">
          <h2>Películas</h2>
          {error ? (
            <p>{error}</p>
          ) : (
            <ul id="listaPeliculas">
              {peliculas.map((pelicula) => (
                <li
                  key={pelicula.episode_id}
                  className="elementoPelicula"
                  onClick={() => clicPeliculas(pelicula)}
                >
                  {pelicula.title}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div id="informacion">
          {peliculaSeleccionada ? (
            <>
              <div id="titulo">
                <h3 id="tituloPelicula">{peliculaSeleccionada.title}</h3>
              </div>
              <div id="datos">
                <p>Director: <span>{peliculaSeleccionada.director}</span></p>
                <p>Productor: <span>{peliculaSeleccionada.producer}</span></p>
                <p>Fecha de lanzamiento: <span>{fechaFormatoEuropeo(peliculaSeleccionada.release_date)}</span></p>
                <p>Sinopsis: <span>{peliculaSeleccionada.opening_crawl}</span></p>
              </div>
            </>
          ) : (
            <h3 id="tituloPelicula">Selecciona una película</h3>
          )}
        </div>
      </div>
    </>
  );
};

export default Enciclopedia;
