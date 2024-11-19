import React, { useState, useEffect } from "react";
import Cronometro from "./Cronometro.jsx";

const MontarCronometro = () => {

    const valorInicial = false;
    const [mostrar, setMostrar] = useState(valorInicial);

  return (
    <>
    <div>
        <h2>Cronómetro</h2>
        <button
          onClick={() => {
            setMostrar(!mostrar);
          }}
        >
          Montar/desmontar cronómetro
        </button>
        {mostrar && <Cronometro />}
      </div>
    </>
  );
};

export default MontarCronometro;