import todas_peliculas from "./peliculas.json";
import "./Peliculas.css";
import Pelicula from './Pelicula.jsx';

const Peliculas = () => {

    //Copiamos todo lo que hay en el array de películas en un nuevo array.
    const peliculas = [...todas_peliculas.peliculas];

    return(
        <>
        <div>
        {/*Realizamos una ternaria para poder imprimir todos los valores de cada una de las diferentes películas, y en caso de que no existan valores salte un mensaje de error.*/}
        {peliculas.length
          ? peliculas.map((valor) => {
              return (
                <Pelicula
                  key = {valor.id}
                  titulo={valor.titulo}
                  director={valor.director}
                  cartelera={valor.cartelera}
                  actores={valor.actores}
                  recaudacion={valor.recaudacion}
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