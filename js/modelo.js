
async function obtenerPersonajes() {
    const respuesta = await fetch('https://rickandmortyapi.com/api/character');
    const datos = await respuesta.json();
    return datos.results;
}

async function obtenerPersonajePorId(id) {
    const respuesta = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    const datos = await respuesta.json();
    return datos;
}

window.obtenerPersonajes = obtenerPersonajes;
window.obtenerPersonajePorId = obtenerPersonajePorId;
