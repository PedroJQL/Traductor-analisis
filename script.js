document.addEventListener('DOMContentLoaded', function() {
    var boton = document.getElementById('miBoton');
    boton.addEventListener('click', obtenerDatos);
});

function obtenerDatos() {
    var input = document.getElementById('miInput').value;
    console.log(input); // Muestra el valor del input en la consola del navegador
}