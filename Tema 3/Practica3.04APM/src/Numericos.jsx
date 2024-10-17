import React, { useRef } from "react";
import {generarNumeroAleatorio} from "./Biblioteca/biblioteca.js";

const Numericos = (props) => {

    const refe = useRef(null);

    //Creamos la función para añadir el 'li' con su contenido.
    const anyadirNumerico = (referencia) => {

        referencia.current.innerHTML += `<li>Número: ${generarNumeroAleatorio()}.</li>`;
    
    }

    return(
        <>
            <div>

                <button
                    onClick={() => {
                        anyadirNumerico(refe);
                    }}
                >
                    Añadir numerico.
                </button>
                <ol ref={refe}></ol>
            </div>
        </>
    );



};

export default Numericos;