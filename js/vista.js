
function mostrarPersonajes(personajes) {
    const listaPersonajes = document.getElementById('lista-personajes');
    listaPersonajes.innerHTML = '';

    personajes.forEach(personaje => {
        const tarjetaPersonaje = document.createElement('div');
        tarjetaPersonaje.className = 'col mb-4';
        tarjetaPersonaje.innerHTML = `
            <div class="card" onclick="controlador.redirigirADetalle(${personaje.id})">
                <img src="${personaje.image}" class="card-img-top" alt="${personaje.name}">
                <div class="card-body">
                    <h5 class="card-title">${personaje.name}</h5>
                    <p class="card-text">Estado: ${personaje.status}</p>
                </div>
            </div>
        `;
        listaPersonajes.appendChild(tarjetaPersonaje);
    });
}
