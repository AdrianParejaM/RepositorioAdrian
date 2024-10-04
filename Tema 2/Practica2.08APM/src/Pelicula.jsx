import "./Pelicula.css";

const Pelicula = (props) => {

    const { titulo, director, cartelera, children, actores } = props;

    return(
        <>
            <div className="pelicula_contenedor">

                <h1 className="pelicula_titulo">{titulo}</h1>
                <h3 className="pelicula_director">{director}</h3>
                <img className="pelicula_cartelera" src={cartelera} alt="Imágen de la cartelera."/>
                <p className="pelicula_resumen">{children}</p>
                <div className="pelicula_caja_elenco">
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

