
function cambiarTema() {
  const body = document.body;
  const btn = document.getElementById('btn-tema');

  body.classList.toggle('dark-mode');

  if (body.classList.contains('dark-mode')) {
    btn.textContent = '☀️ Modo Claro';
  } else {
    btn.textContent = '🌙 Modo Oscuro';
  }
}


function mostrarMasInfo() {
  const panel = document.getElementById('mas-info');
  const btn = document.getElementById('btn-mas-info');

  if (panel.style.display === 'none' || panel.style.display === '') {
    panel.style.display = 'block';

    
    panel.style.opacity = '0';
    panel.style.transition = 'opacity 0.4s ease';
    setTimeout(() => {
      panel.style.opacity = '1';
    }, 10);

    btn.textContent = '➖ Ocultar curiosidades';
  } else {
    panel.style.display = 'none';
    btn.textContent = '➕ Ver más curiosidades';
  }
}


window.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('header h1');
  header.style.opacity = '0';
  header.style.transform = 'translateY(-20px)';
  header.style.transition = 'opacity 0.8s ease, transform 0.8s ease';

  setTimeout(() => {
    header.style.opacity = '1';
    header.style.transform = 'translateY(0)';
  }, 100);
});