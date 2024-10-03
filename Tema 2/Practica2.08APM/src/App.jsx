import './App.css';
import Pelicula from './Pelicula.jsx';
import infoPelicula from "./pelicula.json";

function App() {

  const informacionPelicula = {...infoPelicula.pelicula};

  console.log(informacionPelicula);

  return (
    <>
      <div>
      {informacionPelicula.length
          ? informacionPelicula.map((v, i, a) => {
              return (
                <Pelicula
                  titulo={v.nombre}
                  director={v.director}
                  cartelera={v.cartelera}
                  elenco={v.actores}
                >
                  resumen_children={v.resumen}
                </Pelicula>
              );
            })
          : "No se ha encontrado película."}
      </div>
    </>
  );
};

export default App;
