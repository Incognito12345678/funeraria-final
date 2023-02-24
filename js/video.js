/*const videos = document.querySelectorAll('video[data-animation]');

videos.forEach((video) => {
  video.classList.add('animate__animated', 'animate__fadeInUp');
});*/
/*const videos = document.querySelectorAll('video[data-animation]');
const windowHeight = window.innerHeight;

function checkScroll() {
  videos.forEach((video) => {
    const videoTop = video.getBoundingClientRect().top;
    const videoBottom = video.getBoundingClientRect().bottom;
    if ((videoTop < windowHeight * 0.8) && (videoBottom > 0)) {
      video.classList.add('animate__animated', 'animate__fadeInUp');
    }
  });
}

function handleScroll() {
  checkScroll();
}

window.addEventListener('scroll', handleScroll);
*/
// Seleccionar todos los videos que tienen el atributo 'data-animation'
const videos = document.querySelectorAll('video[data-animation]');
const windowHeight = window.innerHeight;

function checkScroll() {
  videos.forEach((video) => {
    const videoTop = video.getBoundingClientRect().top;
    const videoBottom = video.getBoundingClientRect().bottom;
    if ((videoTop < windowHeight * 0.8) && (videoBottom > 0) && !video.classList.contains('animate__animated')) {
      video.classList.add('animate__animated', 'animate__fadeInUp');
    }
  });
}

function handleScroll() {
  checkScroll();
}

window.addEventListener('scroll', handleScroll);

