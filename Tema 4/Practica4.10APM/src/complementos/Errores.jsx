import React from "react";

const Errores = ({ erroresMostrar }) => {
  return (
    <>
      <div id='errores'>
        {erroresMostrar.length
          ? erroresMostrar.map((valor, indice) => {
              return <h3 key={indice}>{valor}</h3>;
            })
          : ""}
      </div>
    </>
  );
};

export default Errores;