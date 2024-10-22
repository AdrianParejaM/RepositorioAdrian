import React from 'react';

const Galeria = () => {
  return (
    <>
    <h1>Esta es la galería.</h1>
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

export default Galeria