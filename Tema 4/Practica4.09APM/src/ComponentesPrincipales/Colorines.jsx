import React, { useState, useEffect } from "react";
import {generarColorHexadecimal} from  "../../Biblioteca/Biblioteca.js";

const Colorines = () => {

    //Creamos el array vacío que será el default.
    const valorInicial = [];

    //Creamos el "useState" para ,manejar los colorines.
    const [fondoColor, setFondoColor] = useState(valorInicial);


    // Cambiar el color de fondo cuando se use posteriormente el doble click.
    const colorin = (evento) => {
      const nuevoColor = generarColorHexadecimal();
      document.body.style.backgroundColor = nuevoColor;
      setFondoColor(nuevoColor);
    };


    useEffect(() => {
        document.addEventListener('dblclick', colorin);

        return () => {
          document.removeEventListener("dblclick", colorin);
          document.body.style.backgroundColor = "#242424";
        };
    }, []);

  return (
    <>
    <div className="info">
        <p>Haz doble clic en cualquier parte para cambiar el color de fondo.</p>
    </div>
    </>
  );
};

export default Colorines;