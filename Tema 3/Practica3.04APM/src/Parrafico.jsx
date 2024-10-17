import React, { useRef } from "react";
import {generarColorAleatorio} from "./Biblioteca/biblioteca.js";

const Parrafico = (props) => {

    const refe = useRef(null);

    //Creamos la función para añadir el 'li' con su contenido.
    const anyadirColor = (referencia) => {

        referencia.current.style.backgroundColor = generarColorAleatorio();
    
    }

    return(
        <>
            <div>

                <p ref={refe}>Párrafo feo.</p>
                <button
                    onClick={() => {
                        anyadirColor(refe);
                    }}
                >
                    Cambiar colorico
                </button>
                
            </div>
        </>
    );



};

export default Parrafico;