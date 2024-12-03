"use strict";

//Todo copiado de la biblioteca de la 5.02.

//Creamos la función para cambiar al formato europeo (gpt);
function fechaFormatoEuropeo(dateString) {
  const [year, month, day] = dateString.split("-");
  return `${day}/${month}/${year}`;
}

//Función para mostrar las películas en su respectivo contenedor.
function listaPelis(peliculas, contenedor) {
    peliculas.forEach((pelicula) => {
    const listaLi = document.createElement("li");
    listaLi.textContent = pelicula.title;
    listaLi.classList.add("elementoPelicula");

    contenedor.appendChild(listaLi);
  });
}

//Exportamos todo.
export {fechaFormatoEuropeo, listaPelis};