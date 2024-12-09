"use strict";

//Todo copiado de la biblioteca de la 5.02.

//Creamos la función para cambiar al formato europeo (gpt);
function fechaFormatoEuropeo(dateString) {
  const [year, month, day] = dateString.split("-");
  return `${day}/${month}/${year}`;
}

//Exportamos todo.
export {fechaFormatoEuropeo};