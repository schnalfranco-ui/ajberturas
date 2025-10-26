function mostrar(seccion) {
  // Oculta todas las secciones
  document.querySelectorAll("#inicio, .seccion").forEach(s => {
    s.style.display = "none";
    s.classList.remove("mostrar");
  });

  // Muestra la sección seleccionada con una pequeña animación
  const elem = document.getElementById(seccion);
  elem.style.display = "block";
  setTimeout(() => elem.classList.add("mostrar"), 10);
  window.scrollTo(0, 0);
}

function volverInicio() {
  mostrar("inicio");
}

/* --- LIGHTBOX (IMAGEN / VIDEO) --- */
function abrirLightbox(src) {
  const lightbox = document.getElementById('lightbox');
  const img = document.getElementById('lightbox-img');
  const video = document.getElementById('lightbox-video');

  // Detecta si el recurso es video o imagen
  const esVideo = src.toLowerCase().endsWith(".mp4") || src.toLowerCase().includes("video");

  // Reset estado anterior
  img.style.display = "none";
  video.style.display = "none";
  lightbox.style.display = "flex";
  lightbox.scrollTop = 0;
  lightbox.scrollLeft = 0;

  if (esVideo) {
    video.src = src;
    video.style.display = "block";
    video.currentTime = 0;
    setTimeout(() => {
      lightbox.classList.add('visible');
      video.play();
    }, 10);
  } else {
    img.src = src;
    img.style.display = "block";
    img.style.transform = "scale(0.9)";
    setTimeout(() => {
      lightbox.classList.add('visible');
      img.style.transform = "scale(1)";
    }, 10);
  }
}

function cerrarLightbox() {
  const lightbox = document.getElementById('lightbox');
  const img = document.getElementById('lightbox-img');
  const video = document.getElementById('lightbox-video');

  lightbox.classList.remove('visible');

  if (video.style.display === "block") {
    video.pause();
    setTimeout(() => {
      video.src = '';
      video.style.display = 'none';
      lightbox.style.display = 'none';
    }, 250);
  } else {
    img.style.transform = "scale(0.9)";
    setTimeout(() => {
      img.src = '';
      img.style.display = 'none';
      lightbox.style.display = 'none';
    }, 250);
  }
}

// Cierra con tecla ESC
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') cerrarLightbox();
});
