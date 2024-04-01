//Funcion del boton de la primera pagina
function mostrarContinuar() {
    const nombre = document.getElementById('nombreInput').value;
    if (nombre.trim() !== '') {
        // Redirigir a una nueva página en la misma ventana
        window.location.href = 'otra_pagina.html';
    } else {
        alert('Por favor, ingresa tu nombre antes de continuar.');
    }
}