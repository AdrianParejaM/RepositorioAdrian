import React, { useRef } from "react";
import "./Pelicula.css";

const Pelicula = (props) => {

    //Asignación del props.
    const { titulo, director, cartelera, children, recaudacion, actores} = props;

    //Creamos las referencias.
    const refe = useRef(null);
    const refe2 = useRef(null);

    //Mostramos el elenco.
    const mostrarElenco = () => {
        refe.current.classList.toggle("mostrar");
      };

    const mostrarTaquilla = () => {
        refe2.current.classList.toggle("mostrar");
    };

    return(
        <>
            {/*Contenedor principal.*/}
            <div className="pelicula_contenedor">

                <h1 className="pelicula_titulo">{titulo}</h1>
                <h3 className="pelicula_director">{director}</h3>
                <img className="pelicula_cartelera" src={cartelera} alt="Imágen de la cartelera."/>
                <p className="pelicula_resumen">{children}</p>
                {/*Contenedor para el elenco.*/}
                {/*Código modificado práctica 3.05*/}
                <button className="pelicula_boton_elenco"
                    onClick={() => {
                        mostrarElenco(refe);
                    }}
                >
                Elenco
                </button>

                <button className="pelicula_boton_elenco"
                    onClick={() => {
                        mostrarTaquilla(refe2);
                    }}
                >
                Recaudación
                </button>
                <div ref={refe2} className="pelicula_caja_ocultar">
                    <p>{recaudacion}</p>
                </div> 
                <div ref={refe} className="pelicula_caja_ocultar">
                {/*Fin código modificado práctica 3.05*/}
                    {/*Se mapea para que muestre todos los actores con su respectiva imágen y boigrafía.*/}
                    {actores.map((actor, index) => (
                        <div className="pelicula_elenco" key={index}>
                        <img className="pelicula_foto_actor" src={actor.foto_actor} alt={`Imágen de ${actor.nombre}`} />
                        <div className="pelicula_nombre_actor">{actor.nombre}</div>
                        <div className="pelicula_biografia_actor">{actor.biografia}
                        </div>
                    
                </div>
                
      ))}
        
                </div>

            </div>
        </>
    );



};

export default Pelicula;

