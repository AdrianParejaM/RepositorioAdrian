import React, { useState, useEffect } from "react";
import Contador from "./Contador.jsx";

const MontarContador = () => {

    const valorInicial = false;
    const [mostrar, setMostrar] = useState(valorInicial);

  return (
    <>
    <div>
        <h2>Contador</h2>
        <button
          onClick={() => {
            setMostrar(!mostrar);
          }}
        >
          Montar/desmontar contador
        </button>
        {mostrar && <Contador />}
      </div>
    </>
  );
};

export default MontarContador;