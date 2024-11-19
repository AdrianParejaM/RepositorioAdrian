import React, { useState, useEffect } from "react";

const Contador = () => {

    //Creamos el array vacío que será el default.
    const valorInicial = 0;

    //Creamos el "useState" para ,manejar los colorines.
    const [contador, setContador] = useState(valorInicial);
    const [valorMostrado, setValorMostrado] = useState(valorInicial);


    // Obtener los clicks.
    const contadorico = (evento) => {
        const nuevoContador = contador + 1;
        setContador(nuevoContador);

        // Solo actualizamos el valor mostrado si es múltiplo de 5.
        if (nuevoContador % 5 === 0) {
        setValorMostrado(nuevoContador);
        }
    };

    //Realizamos el "useEffect" con el return para limpiar cuando se desactive el componente.
    useEffect(() => {
        document.addEventListener('click', contadorico);
        return () => {
            document.removeEventListener("click", contadorico);
          };
    });

  return (
    <>
    <div className="info">
        <p>Estimado usuario/a, has pulsado {valorMostrado} veces el ratón.</p>
    </div>
    </>
  );
};

export default Contador;