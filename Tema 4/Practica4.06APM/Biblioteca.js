"use strict";

//Ejercicio 1.

//Genera un número aleatorio entre 100 y 1000.
function generarNumeroAleatorio() {
    return Math.floor(Math.random() * 901) + 100;
  }

// Función para marcar todos los checkbox que contienen números pares.
function marcarPares() {
    const checkboxes = document.querySelectorAll('#checkboxContainer input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
      const numero = parseInt(checkbox.dataset.numero, 10);
      if (numero % 2 === 0) {
        checkbox.checked = true;
      }
    });
  }
  
  // Función para desmarcar todos los checkbox.
  function desmarcarTodos() {
    const checkboxes = document.querySelectorAll('#checkboxContainer input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
      checkbox.checked = false;
    });
  }


  //Ejercicio 2.

  //Función para crear el parrafo a base de lo que entre por el texto y el estilo indicado en el html.
  function crearParrafo(texto, estilo) {
    const resultadoDiv = document.getElementById("resultado");
  
    const nuevoParrafo = document.createElement("p");
    nuevoParrafo.textContent = texto;
    nuevoParrafo.classList.add(estilo);
  
    resultadoDiv.appendChild(nuevoParrafo);
  }



  //Ejercicio 3.

//Crea una constante con un array vacío.
  const bibliotecaDiscos = {
    discos: []
  };

  /* La función de validación la he intentado tanto solo como preguntándole al bot y no he conseguido que me salga bien, si que me muestra las cosas de color rojo pero siempre =_=.
  
  // Función de validación para el formulario de discos (Ejercicio 5).
  function validarFormularioDiscos() {
    let esValido = true;

    const nombreDisco = document.getElementById('nombreDisco');
    const labelNombreDisco = nombreDisco.previousElementSibling;
    if (nombreDisco.value.length < 5) {
      nombreDisco.classList.add('input-error');
      labelNombreDisco.classList.add('label-error');
      esValido = false;
    } else {
      nombreDisco.classList.remove('input-error');
      labelNombreDisco.classList.remove('label-error');
    }

    const grupo = document.getElementById('grupo');
    const labelGrupo = grupo.previousElementSibling;
    if (grupo.value.length < 5) {
      grupo.classList.add('input-error');
      labelGrupo.classList.add('label-error');
      esValido = false;
    } else {
      grupo.classList.remove('input-error');
      labelGrupo.classList.remove('label-error');
    }

    const anio = document.getElementById('anio');
    const labelAnio = anio.previousElementSibling;
    if (!/^\d{4}$/.test(anio.value)) {
      anio.classList.add('input-error');
      labelAnio.classList.add('label-error');
      esValido = false;
    } else {
      anio.classList.remove('input-error');
      labelAnio.classList.remove('label-error');
    }

    const tipo = document.getElementById('tipo');
    const labelTipo = tipo.previousElementSibling;
    if (!tipo.value) {
      tipo.classList.add('input-error');
      labelTipo.classList.add('label-error');
      esValido = false;
    } else {
      tipo.classList.remove('input-error');
      labelTipo.classList.remove('label-error');
    }

    const localizacion = document.getElementById('localizacion');
    const labelLocalizacion = localizacion.previousElementSibling;
    if (!/^ES-\d{3}[A-Z]{2}$/.test(localizacion.value)) {
      localizacion.classList.add('input-error');
      labelLocalizacion.classList.add('label-error');
      esValido = false;
    } else {
      localizacion.classList.remove('input-error');
      labelLocalizacion.classList.remove('label-error');
    }

    return esValido;
  }
*/
  
  // Función para agregar un disco a la biblioteca.
  function agregarDisco(nombre, grupo, anio, tipo, localizacion, prestado = false) {
    const disco = {
      nombre,
      grupo,
      anio,
      tipo,
      localizacion,
      prestado
    };
    bibliotecaDiscos.discos.push(disco);
  }
  
  // Función para generar el HTML del listado de discos.
  function mostrarDiscos() {
    const listadoContainer = document.getElementById('listadoDiscos');
    listadoContainer.innerHTML = '';
  
    // Crear el HTML para cada disco.
    bibliotecaDiscos.discos.forEach(disco => {
      const discoDiv = document.createElement('div');
      discoDiv.className = 'disco';
      discoDiv.innerHTML = `
        <p><strong>Nombre:</strong> ${disco.nombre}</p>
        <p><strong>Grupo o Intérprete:</strong> ${disco.grupo}</p>
        <p><strong>Año de Publicación:</strong> ${disco.anio}</p>
        <p><strong>Tipo de Música:</strong> ${disco.tipo}</p>
        <p><strong>Localización:</strong> ${disco.localizacion}</p>
        <p><strong>Prestado:</strong> ${disco.prestado ? 'Sí' : 'No'}</p>
      `;
      listadoContainer.appendChild(discoDiv);
    });
  }



  //Ejercicio 4.

  const contenedor = document.getElementById("contenedor");

  // Poblaciones por provincia.
  const poblaciones = {
    "Alicante": ["Alicante", "Elche", "Petrer"],
    "Castellon": ["Castellón", "Oropesa", "Vinaroz"],
    "Valencia": ["Valencia", "Xàtiva", "Torrent"]
  };

// Función para actualizar las opciones de población según la provincia seleccionada.
function actualizarPoblaciones(provinciaSelect, poblacionSelect) {
  // Hace limpieza.
  poblacionSelect.innerHTML = '<option value="">No seleccionado</option>';
  
  const provinciaSeleccionada = provinciaSelect.value;
  
  if (provinciaSeleccionada && poblaciones[provinciaSeleccionada]) {
      poblaciones[provinciaSeleccionada].forEach(function(poblacion) {
          const option = document.createElement("option");
          option.value = poblacion;
          option.textContent = poblacion;
          poblacionSelect.appendChild(option);
      });
  }
}

// Función para validar el formulario (no he conseguido que el mensaje salte debajo del formulario =( ).
function validarFormulario(evento, provinciaSelect, poblacionSelect) {
  const provinciaSeleccionada = provinciaSelect.value;
  const poblacionSeleccionada = poblacionSelect.value;

  if (!provinciaSeleccionada || !poblacionSeleccionada) {
      evento.preventDefault();
      contenedor.innerHTML = '<p>Por favor, selecciona una provincia y una población.</p>';
  }
}
  

//Exportamos todo.
export {generarNumeroAleatorio, marcarPares, desmarcarTodos, crearParrafo, agregarDisco, mostrarDiscos, actualizarPoblaciones, validarFormulario};