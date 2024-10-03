const Pelicula = (props) => {

    const { titulo, director, cartelera, resumen_children, elenco } = props;

    console.log(props);

    return(
        <>
            <div className="pelicula_contenedor">

                <h1 className="pelicula_titulo">{titulo}</h1>
                <h3 className="pelicula_director">{director}</h3>
                <img className="pelicula_cartelera" src={cartelera} alt="Imágen de la cartelera."/>
                <p className="pelicula_resumen">{resumen_children}</p>
                <div className="pelicula_elenco">{elenco}</div>

            </div>
        </>
    );



};

export default Pelicula;

