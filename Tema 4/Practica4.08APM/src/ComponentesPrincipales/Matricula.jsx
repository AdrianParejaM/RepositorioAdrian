import React, {useState} from 'react';
import discentes from "../../matriculados.json";
import "./Matricula.css";

const Matricula = () => {

    //Copiamos todo lo que hay en el array de matriculados en un nuevo array.
    const todosDiscentes = [...discentes.discentes];

    //Creamos el array vacío que será el default.
    const valorInicial = [];

    //Creamos el "useState" para manejar a los discentes.
    const [listadoDiscentes, setListadoDiscentes] = useState(valorInicial);

    //Creamos el "useState" para ordenar de forma ascendente/descendente.
    const [ordenAscendente, setOrdenAscendente] = useState(true);

    //Mostrar sólo los discentes del curso 2DAW.
    const mostrar2DAW = () => {
        const filtrados = todosDiscentes.filter((discente) => discente.curso === "2DAW")
        .map((discente) => `${discente.nombre} ${discente.apellidos} - ${discente.curso}`);
        setListadoDiscentes(filtrados);
      };

    //Mostrar los discentes de primer curso.
    const mostrarPrimerCurso = () => {
        const filtrados = todosDiscentes.filter((discente) => discente.curso.startsWith("1"))
        .map((discente) => `${discente.nombre} ${discente.apellidos} - ${discente.curso}`);
        setListadoDiscentes(filtrados);
      };

    //Mostrar los discentes del ciclo DAW.
    const mostrarDAW = () => {
        const filtrados = todosDiscentes.filter((discente) => discente.curso.includes("DAW"))
        .map((discente) => `${discente.nombre} ${discente.apellidos} - ${discente.curso}`);
        setListadoDiscentes(filtrados);
      };

    //mostrar los discentes a los que le guste la lectura.
    const mostrarLectores = () => {
        const filtrados = todosDiscentes.filter((discente) => discente.aficiones.includes("lectura"))
        .map((discente) => `${discente.nombre} ${discente.apellidos} - ${discente.curso}`);
        setListadoDiscentes(filtrados);
      };

    //Pulsar sobre un discente y que se borre.
    const borrarConClick = (id) => {
        const nuevosDiscentes = listadoDiscentes.filter((discente, indice) => {
          return parseInt(id) !== indice;
        });
        setListadoDiscentes(nuevosDiscentes);
    };

  return (
    <>
    <div id='parrafo'onClick={(evento) => {
            borrarConClick(evento.target.id);
          }}
        >
        <h1>Alumnos del instituto.</h1>

          {listadoDiscentes.length === 0
            ? <h4>No hay alumnos seleccionados todavía.</h4>
            : listadoDiscentes.map((discentes, indice) => {
              return (
                <p id={indice} key={crypto.randomUUID()}>
                  {discentes}
                </p>
              );
            })
          }
          
     </div>

    <button className='boton'
        onClick={() => {
            mostrar2DAW();
          }}
        >
        Mostrar discentes 2DAW
    </button>

    <button className='boton'
        onClick={() => {
            mostrarPrimerCurso();
          }}
        >
        Mostrar discentes 1º
    </button>

    <button className='boton'
        onClick={() => {
            mostrarDAW();
          }}
        >
        Mostrar discentes DAW
    </button>

    <button className='boton'
        onClick={() => {
            mostrarLectores();
          }}
        >
        Mostrar discentes lectores
    </button>

    <button className='boton'
        onClick={() => {
          //Con el "localeCompare" me ha ayudado el chatGPT ya que dijiste que había que utilizar "sort" pero no logré que se ordenase sin ayuda =_(.
          if (ordenAscendente) {
            setListadoDiscentes([...listadoDiscentes].sort((a, b) => a.localeCompare(b)));
        } else {
            setListadoDiscentes([...listadoDiscentes].sort((a, b) => b.localeCompare(a)));
        }
        setOrdenAscendente(!ordenAscendente);
          }}
        >
        Ordenar listado
    </button>

    <button className='boton'
        onClick={() => {
            setListadoDiscentes([]);
          }}
        >
        Reiniciar listado
    </button>

    </>
  );
};

export default Matricula;