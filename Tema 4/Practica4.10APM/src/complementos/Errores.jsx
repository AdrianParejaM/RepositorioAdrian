import React from "react";

const Errores = ({ erroresMostrar }) => {
  return (
    <>
      <div id='errores'>
        {erroresMostrar.length
          ? erroresMostrar.map((valor, indice) => {
              return <h3 key={indice}>{valor}</h3>;
            })
          : <p>No se han encontrado errores en el formulario</p>}
      </div>
    </>
  );
};

export default Errores;