import React, { useState, useEffect } from "react";

const Localizador = () => {

    //Creamos el array vacío que será el default.
    const valorInicial = [];

    //Creamos el "useState" para ,manejar el listado de números.
    const [x, setX] = useState(valorInicial);

    //Creamos el "useState" para ,manejar el listado de números.
    const [y, setY] = useState(valorInicial);

    // Obtener las coordenadas actuales del ratón
    const coordenadas = (evento) => {
        setX(evento.clientX);
        setY(evento.clientY);
    };

    useEffect(() => {
        document.addEventListener('mousemove', 
        coordenadas)
    });

  return (
    <>
    <div className="info">
        <p>Posición del ratón:</p>
        <p>X: {x}, Y: {y}</p>
    </div>
    </>
  );
};

export default Localizador;