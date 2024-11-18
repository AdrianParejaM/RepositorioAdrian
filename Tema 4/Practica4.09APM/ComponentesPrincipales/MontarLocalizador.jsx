import React, { useState, useEffect } from "react";
import Localizador from "./Localizador.jsx";

const MontarLocalizador = () => {

    const valorInicial = false;
    const [mostrar, setMostrar] = useState(valorInicial);

  return (
    <>
    <div>
        <h2>Localizador</h2>
        <button
          onClick={() => {
            setMostrar(!mostrar);
          }}
        >
          Montar/desmontar localizador
        </button>
        {mostrar && <Localizador />}
      </div>
    </>
  );
};

export default MontarLocalizador;