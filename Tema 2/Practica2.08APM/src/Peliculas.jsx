import todas_peliculas from "./peliculas.json";
import "./Peliculas.css";
import Pelicula from './Pelicula.jsx';

const Peliculas = () => {

    const peliculas = [...todas_peliculas.peliculas];

    return(
        <>
        <div>
        {peliculas.length
          ? peliculas.map((valor) => {
              return (
                <Pelicula
                  key = {valor.id}
                  titulo={valor.titulo}
                  director={valor.director}
                  cartelera={valor.cartelera}
                  actores={valor.actores}
                >
                  {valor.resumen}
                </Pelicula>
              );
            })
          : "No se han encontrado películas."}
      </div>
             
        </>
    );

};

export default Peliculas;