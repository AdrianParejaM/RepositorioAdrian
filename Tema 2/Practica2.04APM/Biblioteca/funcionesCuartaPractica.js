"use strict";

//Ejercicio 1.

//Creamos el array con los 5 nombres(he puesto el array aquí porque si no, nombresConId no podría hacerlo aquí).
let nombres = ["Adrián Pareja", "Antonio Recio", "Vicente Maroto", "Fermín Trujillo", "Amador Rivas"];

//Creamos la función para pasar a mayúscula.
function pasarMayusculas (valor) {

    return valor.toUpperCase();

}

//Creamos el id con el índice de cada posición y el nombre con el valor de cada posición.
let nombresConId = nombres.map((nombres, indice) => {

  return {

    id: indice,
    nombre: nombres

  };

});


//Ejercicio 2.

//Creamos la función para generar un array aleatorio(bueno, la ha creado el gpt).
function generarArrayAleatorio() {
    let array = [];
    for (let i = 0; i < 10; i++) {
        array = [...array, (Math.floor(Math.random() * 10) + 1)];
    }
    return array;
}

//Creamos la función para mostrar los números mayores a 5.
function mostrarNumerosMayorCinco (array1, array2, array3) {

    //Juntamos los  arrays.
    let arrayCombinado = [...array1, ...array2, ...array3];
    let arrayFiltrado = [];

    for (let i = 0; i < arrayCombinado.length; i++) {
        
        //Hacemos la criba.
        if (arrayCombinado[i] > 5) {

            arrayFiltrado = [...arrayFiltrado, arrayCombinado[i]]
            
        }
        
    }

    return arrayFiltrado;

}


//Ejercicio 3.

//Constante que nos has proporcionado.
const usuarios = [
    {
      nombre: "Luis",
      preferencias: { tema: "oscuro", idioma: "español", edad: 25 },
      contacto: {
        direccion: {
          calle: "Calle falsa, 666",
          localidad: "Elda",
          pais: "España",
        },
        correoelectronico: "correofalso@yahoo.com",
        telefono: "123456789",
      },
    },
    {
      nombre: "Marta",
      preferencias: { tema: "claro", idioma: "catalán", edad: 15 },
      contacto: {
        direccion: {
          calle: "Calle también falsa, 123",
          localidad: "Andorra la Vella",
          pais: "Andorra",
        },
        correoelectronico: "correoandorrano@gmail.com",
        telefono: "",
      },
    },
    {
      nombre: "Alberto",
      preferencias: { tema: "oscuro", idioma: "español", edad: 56 },
      contacto: {
        direccion: {
          calle: "Elm Street, 666",
          localidad: "Petrer",
          pais: "España",
        },
        correoelectronico: "correonulo@yahoo.com",
        telefono: "548632478",
      },
    },
    {
      nombre: "Jacinto",
      preferencias: { tema: "claro", idioma: "inglés", edad: 17 },
      contacto: {
        direccion: {
          calle: "Elm Street, 667",
          localidad: "Elda",
          pais: "España",
        },
        correoelectronico: "correofalso@gmail.com",
        telefono: "",
      },
    },
    {
      nombre: "Rigoberta",
      preferencias: { tema: "claro", idioma: "francés", edad: 34 },
      contacto: {
        direccion: {
          calle: "Calle inexistente, 6",
          localidad: "Elda",
          pais: "Española",
        },
        correoelectronico: "correofalso@gmail.com",
        telefono: "232547859",
      },
    },
    {
      nombre: "Sandra",
      preferencias: { tema: "oscuro", idioma: "español", edad: 18 },
      contacto: {
        direccion: {
          calle: "Calle de mentira, s/n",
          localidad: "Petrer",
          pais: "España",
        },
        correoelectronico: "estecorreonoexiste@gmail.com",
        telefono: "452158697",
      },
    },
    {
      nombre: "Sandra",
      preferencias: { tema: "oscuro", idioma: "español", edad: 18 },
      contacto: {
        direccion: {
          calle: "Calle existente, 34",
          localidad: "Petrer",
          pais: "España",
        },
        correoelectronico: "correoinexistente@yahoo.com",
        telefono: "",
      },
    },
  ];

//Función para insertar un nuevo usuario(muestra el nombre).
function insertarNuevoUsuario(nuevoUsuario){

  let usuariosActualizados = [...usuarios, nuevoUsuario];
  let usuariosNuevos = usuariosActualizados.map(usuario => usuario.nombre);
  console.log(`El array actualizado es: ${usuariosNuevos}`);
  return usuariosNuevos;
}

//Función para filtrar usuarios mayores de edad(muestra el nombre).
function usuariosMayoresEdad(){

  let mayores = usuarios.filter(usuario => usuario.preferencias.edad > 18);
  let nombreUsuariosMayores = mayores.map(usuario => usuario.nombre);
  console.log(`Los usuarios mayores de edad son: ${nombreUsuariosMayores}`);
  return nombreUsuariosMayores;

}

//Función que devuelve el correo electrónico de Yahoo(muestra el nombre).
function usuariosCorreoYahoo(){

  let usuariosYahoo = usuarios.filter(usuario => usuario.contacto.correoelectronico.endsWith("@yahoo.com"));
  let nombreUsuariosYahoo = usuariosYahoo.map(usuario => usuario.nombre);
  console.log(`Usuarios con el correo Yahoo: ${nombreUsuariosYahoo}`);
  return nombreUsuariosYahoo;

}

//Función para devolver los usuarios que prefieren el tema claro, mayores de edad y españoles(muestra el nombre).
function usuariosTemaClaro(){

  let usuariosFiltrados = usuarios.filter(usuario =>

    usuario.preferencias.tema === "claro" &&
    usuario.preferencias.edad >= 18 &&
    usuario.contacto.direccion.pais === "España"

  );

  if (usuariosFiltrados.length == 0) {
    
    console.log(`No hay ningún usuario que cumpla los requisitos.`);
    return usuariosFiltrados;

  }
  let nombreUsuariosClaro = usuariosFiltrados.map(usuario => usuario.nombre);
  console.log(`Los usuarios con el tema claro, mayores de edad y que viven en España son: ${nombreUsuariosClaro}`);
  return nombreUsuariosClaro;

}

//Función para mostrar usuarios que le faltan información(muestra el nombre).
function usuariosFaltaInformacion(){

  let usuariosIncompletos = usuarios.filter(usuario => {
    let { nombre, preferencias, contacto } = usuario;
    return !nombre || !preferencias || !contacto || !contacto.direccion || !contacto.correoelectronico || !contacto.telefono;
  });

  let nombreUsuariosInfo = usuariosIncompletos.map(usuario => usuario.nombre);
  console.log("Usuarios con datos faltantes:", nombreUsuariosInfo);
  return nombreUsuariosInfo;

}

//Función para añadir a los usuarios apellidos que el valor por defecto será "No indicado"(muestra el nombre y apellidos).
function anyadirApellidos() {

  let usuariosConApellidos = usuarios.map(usuario => ({ ...usuario, apellidos: "No indicado"}));
  let nombreUsuariosApellidos = usuariosConApellidos.map(usuario =>`Nombre: ${usuario.nombre}, apellidos: ${usuario.apellidos}`);
  console.log("Usuarios con los apellidos añadidos:", nombreUsuariosApellidos);
  return nombreUsuariosApellidos;

}

//Función para añadir nueva entrada a dirección llamada código y el valor por defecto será "00000"(muestra el nombre y el código postal).
function anyadirCodigo(){

  let usuariosConCodigo = usuarios.map(user => ({
    ...user,
    contacto: {
      ...user.contacto,
      direccion: {
        ...user.contacto.direccion,
        codigo: "00000"
      }
    }
  }));
  let nombreUsuariosCodigo = usuariosConCodigo.map(usuario =>`Nombre: ${usuario.nombre}, código postal: ${usuario.contacto.direccion.codigo}`);
  console.log("Usuarios con el código postal añadido:", nombreUsuariosCodigo);
  return nombreUsuariosCodigo;

}


//Exportamos todo.
export {pasarMayusculas, generarArrayAleatorio, mostrarNumerosMayorCinco, usuarios, nombresConId, nombres, insertarNuevoUsuario, 
  usuariosMayoresEdad, usuariosCorreoYahoo, usuariosTemaClaro, usuariosFaltaInformacion, anyadirApellidos, anyadirCodigo};