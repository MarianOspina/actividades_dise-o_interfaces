//Funcion del boton de la primera pagina
function mostrarContinuar() {
    const nombre = document.getElementById('nombreInput').value;
    if (nombre.trim() !== '') {
        // Redirigir a una nueva página en la misma ventana
        window.location.href = 'pagina_dos.html';
    } else {
        alert('Por favor, ingresa tu nombre antes de continuar.');
    }
}

function abrirNuevaPestana(url) {
    window.open(url, '_self');
}
