// Laboratorio #6 - Adrian Maldonado
// Biblioteca de la Facultad

console.log("Biblioteca de la Facultad: sitio cargado correctamente.");

// Mensaje de bienvenida en consola con la fecha actual
const hoy = new Date();
console.log("Fecha de carga: " + hoy.toLocaleDateString("es-PA"));

// Aviso simple al enviar el formulario de inscripción (no bloquea el envío real)
const formInscripcion = document.querySelector("#contacto form");

if (formInscripcion) {
    formInscripcion.addEventListener("submit", function () {
        console.log("Formulario de inscripción enviado por el usuario.");
    });
}
