import React from 'react';

const Peliculas = () => {
  return (
    <>
    <h1>Información sobre las películas.</h1>
    <button
        onClick={() => {
          navegar("/");
        }}
      >
        Volver a inicio.
      </button>
    </>
  )
};

export default Peliculas;