import React, { useState, useEffect } from "react";
import Colorines from "./Colorines.jsx";

const MontarColorines = () => {

    const valorInicial = false;
    const [mostrar, setMostrar] = useState(valorInicial);

  return (
    <>
    <div>
        <h2>Colorines</h2>
        <button
          onClick={() => {
            setMostrar(!mostrar);
          }}
        >
          Montar/desmontar colorines
        </button>
        {mostrar && <Colorines />}
      </div>
    </>
  );
};

export default MontarColorines;