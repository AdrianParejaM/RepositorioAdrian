import React from 'react';

const MostrarPeliculas = (props) => {
  const peliculas = props.peliculas;
  const error = props.error;
  const seleccionarPelicula = props.seleccionarPelicula;

  const clicPeliculas = (pelicula) => {
    seleccionarPelicula(pelicula);
  };

  return (
    <>
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
    </>
  );
};

export default MostrarPeliculas;
