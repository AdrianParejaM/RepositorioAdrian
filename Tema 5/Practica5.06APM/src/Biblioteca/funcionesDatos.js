// Función para traer datos desde una API pasada como parámetro.
// Devuelve una promesa (fetch).
const obtenerDatos = (url) => {
    return fetch(url)
    .then((respuesta) => {
        return respuesta.json();
    })
    .then((datos) => {
        return datos;
    })
    .catch((error) => {
        `Se ha producido un error: ${error.message}`;
    });
};

export {obtenerDatos};