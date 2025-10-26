function mostrar(seccion) {
  document.querySelectorAll("#inicio, .seccion").forEach(s => {
    s.style.display = "none";
    s.classList.remove("mostrar");
  });
  const elem = document.getElementById(seccion);
  elem.style.display = "block";
  setTimeout(() => elem.classList.add("mostrar"), 10);
  window.scrollTo(0, 0);
}

function volverInicio() {
  mostrar("inicio");
}

function abrirLightbox(src) {
  const lightbox = document.getElementById('lightbox');
  const img = document.getElementById('lightbox-img');
  img.src = src;
  lightbox.style.display = 'flex';
}

function cerrarLightbox() {
  const lightbox = document.getElementById('lightbox');
  lightbox.style.display = 'none';
  document.getElementById('lightbox-img').src = '';
}

