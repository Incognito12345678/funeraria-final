const serviceContainer = document.querySelector('.services-contenedor');
const serviceItems = document.querySelectorAll('.service');

var servicio = document.getElementById("servicio");

function handleScroll() {
  var position = servicio.getBoundingClientRect().top; // Obtiene la posición del elemento
  var screenPosition = window.innerHeight / 1.3; // Ajusta la posición a la que se inicia la animación
  
  if (position < screenPosition) {
    servicio.classList.add("zoom"); // Agrega la clase con la animación si cumple con la posición
  } else {
    servicio.classList.remove("zoom"); // Remueve la clase de la animación si no cumple con la posición
  }
}

window.addEventListener("scroll", handleScroll); // Escucha el evento de scroll en la ventana
