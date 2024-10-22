import React from 'react';

const Interprete = () => {
  return (
    <>
    <h1>Aquí se encuentran todos los intérpretes.</h1>
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

export default Interprete;