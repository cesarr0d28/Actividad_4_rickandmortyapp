
const controlador = {
    async iniciar() {
        try {
            const personajes = await obtenerPersonajes();
            mostrarPersonajes(personajes);
        } catch (error) {
            console.error('Error al inicializar la aplicación:', error);
        }
    },

    redirigirADetalle(id) {
        localStorage.setItem('idPersonajeSeleccionado', id);
        window.location.href = 'detalle-personaje.html';
    }
};

controlador.iniciar();