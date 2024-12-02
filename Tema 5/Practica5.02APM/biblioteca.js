"use strict";

//Creamos la función para cambiar al formato europeo (gpt);
function fechaFormatoEuropeo(dateString) {
  const [year, month, day] = dateString.split("-");
  return `${day}/${month}/${year}`;
}

//Función para mostrar las películas en su respectivo contenedor.
function listaPelis(peliculas, contenedor, onClick) {
    peliculas.forEach((pelicula) => {
    const listaLi = document.createElement("li");
    listaLi.textContent = pelicula.title;
    listaLi.classList.add("elementoPelicula");

    //Al hacer click en el título de la película se hace el evento.
    listaLi.addEventListener("click", 
        (evento) => {
            onClick(pelicula);
        },
    false);

    contenedor.appendChild(listaLi);
  });
}

//Exportamos todo.
export {fechaFormatoEuropeo, listaPelis};