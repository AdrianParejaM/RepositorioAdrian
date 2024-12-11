import React, { useEffect, useState } from 'react';
import { obtenerDatos } from "../Biblioteca/funcionesDatos.js";

const Protagonistas = ({ pelicula }) => {
  const [protagonistas, setProtagonistas] = useState([]);
  const [error, setError] = useState(null);
  const [detallesProtagonista, setDetallesProtagonista] = useState(null);

  useEffect(() => {
    const traerProtagonistas = async () => {
      try {
        //en vez de usar slice usar un map
        const urlsPersonajes = pelicula.characters.slice(0, 10); // Limitar a los 10 primeros protagonistas.

        // Usar Promise.all para obtener datos de los personajes simultáneamente.
        const promesas = urlsPersonajes.map(url => obtenerDatos(url));
        const resultados = await Promise.allSettled(promesas);

        const personajesCompletos = resultados
          .filter(resultado => resultado.status === 'fulfilled')
          .map(resultado => resultado.value);

        setProtagonistas(personajesCompletos);
      } catch (error) {
        setError(`Error al obtener los protagonistas: ${error.message}`);
      }
    };

    if (pelicula) {
      traerProtagonistas();
    }
  }, [pelicula]);

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
      {detallesProtagonista && (
        <div id="detallesProtagonista">
          <h4>{detallesProtagonista.name}</h4>
          <p>Género: {detallesProtagonista.gender}</p>
          <p>Altura: {detallesProtagonista.height} cm</p>
          <p>Peso: {detallesProtagonista.mass} kg</p>
          <p>Color de pelo: {detallesProtagonista.hair_color}</p>
          <p>Color de ojos: {detallesProtagonista.eye_color}</p>
          {detallesProtagonista.image && <img src={detallesProtagonista.image} alt={detallesProtagonista.name} />}
        </div>
      )}
    </div>
  );
};

export default Protagonistas;