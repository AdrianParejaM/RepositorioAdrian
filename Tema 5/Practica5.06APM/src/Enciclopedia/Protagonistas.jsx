import React, { useEffect, useState } from 'react';
import { obtenerDatos } from "../Biblioteca/funcionesDatos.js";
import DetallesProtagonista from './DetallesProtagonistas.jsx';

const Protagonistas = ({ pelicula }) => {
  //Creamos los useState.
  const [protagonistas, setProtagonistas] = useState([]);
  const [error, setError] = useState(null);
  const [detallesProtagonista, setDetallesProtagonista] = useState(null);

  // Función para traer protagonistas.
  const traerProtagonistas = async () => {
    try {
      const urlsPersonajes = pelicula.characters;

      const promesas = urlsPersonajes.map((url, index) => {
        if (index < 10) {
          return obtenerDatos(url);
        }
        return null;
      }).filter(Boolean);

      const resultados = await Promise.allSettled(promesas);

      const personajesCompletos = resultados
        .filter(resultado => resultado.status === 'fulfilled')
        .map(resultado => resultado.value);

      setProtagonistas(personajesCompletos);
    } catch (error) {
      setError(`Error al obtener los protagonistas: ${error.message}`);
    }
  };

  //Hacemos el useEffect para hacer la función traerProtagonistas.
  useEffect(() => {
    if (pelicula) {
      traerProtagonistas();
    }
  }, [pelicula]);

  //Función para mostrar los detalles.
  const mostrarDetalles = async (url) => {
    try {
      const detalles = await obtenerDatos(url);
      setDetallesProtagonista(detalles);
    } catch (error) {
      setError(`Error al obtener los detalles del protagonista: ${error.message}`);
    }
  };

  return (
    <div id="protagonistas">
      <h3>Protagonistas</h3>
      {error ? (
        <p>{error}</p>
      ) : (
        <ul>
          {protagonistas.map(personaje => (
            <li key={personaje.name}>
              <button onClick={() => mostrarDetalles(personaje.url)}>{personaje.name}</button>
            </li>
          ))}
        </ul>
      )}
      <DetallesProtagonista detalles={detallesProtagonista} />
    </div>
  );
};

export default Protagonistas;
