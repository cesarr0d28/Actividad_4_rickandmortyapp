
document.addEventListener('DOMContentLoaded', async () => {
    const id = localStorage.getItem('idPersonajeSeleccionado');
    if (id) {
        try {
            const personaje = await window.obtenerPersonajePorId(id);
            mostrarDetallePersonaje(personaje);
        } catch (error) {
            console.error('Error al obtener detalles del personaje:', error);
        }
    }
});

function mostrarDetallePersonaje(personaje) {
    const detallePersonaje = document.getElementById('detalle-personaje');
    detallePersonaje.innerHTML = `
    <h1 class="text-center">Detalle de Personaje</h1>
        <div class="card">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${personaje.image}" class="img-fluid rounded-start" alt="${personaje.name}">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${personaje.name}</h5>
                        <p class="card-text">Estado: ${personaje.status}</p>
                        <p class="card-text">Especie: ${personaje.species}</p>
                        <p class="card-text">Género: ${personaje.gender}</p>
                        <p class="card-text">Ubicación: ${personaje.location.name}</p>
                        <p class="card-text">Origen: ${personaje.origin.name}</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}
