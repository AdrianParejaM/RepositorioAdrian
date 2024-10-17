import React, { useRef } from "react";
import {} from "./Biblioteca/biblioteca.js";

const Contadorico = (props) => {

    const refe = useRef(null);

    const incrementarNumero = (referencia) => {

        referencia.current += 1;

        referencia.current.textContent = referencia.current;

    }

    const decrementarNumero = (referencia) => {

        referencia.current -= 1;

        referencia.current.textContent = referencia.current;

    }

    return(
        <>
            <div>

                <p ref={refe}>0
                <button
                    onClick={() => {
                        incrementarNumero(refe);
                    }}
                >
                    Incrementar
                </button>
                <button
                    onClick={() => {
                        decrementarNumero(refe);
                    }}
                >
                    Decrementar
                </button>
                </p>

                
                
            </div>
        </>
    );



};

export default Contadorico;