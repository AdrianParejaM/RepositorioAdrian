import React, { useEffect } from 'react';

const MostrarPeliculas = ({ peliculas, error, seleccionarPelicula }) => {

  // Función para manejar el evento de clic delegando en el contenedor.
  const manejarClicPeliculas = (evento) => {
    const elemento = evento.target;

    // Verificamos si el clic es un elemento con la clase "elementoPelicula".
    if (elemento.classList.contains('elementoPelicula')) {
      const titulo = elemento.textContent;
      const peliculaSeleccionada = peliculas.find(pelicula => pelicula.title === titulo);
      if (peliculaSeleccionada) {
        seleccionarPelicula(peliculaSeleccionada);
      }
    }
  };

  // Añadimos el "addEventListener" al contenedor de la lista.
  useEffect(() => {
    const lista = document.getElementById('listaPeliculas');
    lista.addEventListener('click', manejarClicPeliculas, false);

    // Limpiamos el evento cuando se desmonta el componente.
    return () => {
      lista.removeEventListener('click', manejarClicPeliculas, false);
    };
  }, [peliculas]);

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
