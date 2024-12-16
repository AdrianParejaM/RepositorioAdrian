import React, { useEffect } from 'react';

const MostrarPersonajes = ({ personajes, error, personajeSeleccionado }) => {

  // Función para manejar el evento de clic delegando en el contenedor.
  const manejarClicPersonajes = (evento) => {
    const elemento = evento.target;

    // Verificamos si el clic es un elemento con la clase "elementoPersonaje".
    if (elemento.classList.contains('elementoPersonaje')) {
      const titulo = elemento.textContent;
      const seleccionarPersonaje = personajes.find(personajes => personajes.name === titulo);
      if (seleccionarPersonaje) {
        personajeSeleccionado(seleccionarPersonaje);
      }
    }
  };

  // Añadimos el "addEventListener" al contenedor de la lista.
  useEffect(() => {
    const lista = document.getElementById('listaPersonajes');
    lista.addEventListener('click', manejarClicPersonajes, false);

    // Limpiamos el evento cuando se desmonta el componente.
    return () => {
      lista.removeEventListener('click', manejarClicPersonajes, false);
    };
  }, [personajes]);

  return (
    <>
      <h2>Personajes</h2>
      {error ? (
        <p>{error}</p>
      ) : (
        <ul id="listaPersonajes">
          {personajes.map((personaje) => (
            <li
              key={personaje.id}
              className="elementoPersonaje"
            >
              {personaje.name}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default MostrarPersonajes;