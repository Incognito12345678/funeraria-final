/*const elementosAnimados = document.querySelectorAll('.animado-1, .animado-2, .animado-3');

window.addEventListener('scroll', () => {
  elementosAnimados.forEach(elemento => {
    const posicion = elemento.getBoundingClientRect().top;
    const pantalla = window.innerHeight;
    
    if (posicion < pantalla * 0.8 && posicion > -pantalla * 0.2) {
      elemento.classList.add('animado');
    } else {
      elemento.classList.remove('animado');
    }
  });
});*/
const elementosAnimados = document.querySelectorAll('.animado-1, .animado-2, .animado-3');

function animarElementos() {
  elementosAnimados.forEach(elemento => {
    const posicion = elemento.getBoundingClientRect().top;
    const pantalla = window.innerHeight;
    
    if (posicion < pantalla * 0.8 && posicion > -pantalla * 0.2) {
      elemento.classList.add('animado');
    } else {
      elemento.classList.remove('animado');
    }
  });
}
// Ejecutamos la función al cargar la página
animarElementos();
window.addEventListener('scroll', animarElementos); // Ejecutamos la función cada vez que se hace scroll



