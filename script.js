
function cambiarTema() {
  const body = document.body;
  const btn  = document.getElementById('btn-tema');

  body.classList.toggle('dark-mode');

  if (body.classList.contains('dark-mode')) {
    btn.textContent = '☀️ Modo Claro';
  } else {
    btn.textContent = '🌙 Modo Oscuro';
  }
}

function mostrarMasInfo() {
  const panel = document.getElementById('mas-info');
  const btn   = document.getElementById('btn-mas-info');
  const abierto = panel.style.display === 'block';

  if (!abierto) {
    panel.style.display = 'block';
    panel.style.opacity  = '0';
    panel.style.transform = 'translateY(-10px)';
    panel.style.transition = 'opacity 0.45s cubic-bezier(0.16,1,0.3,1), transform 0.45s cubic-bezier(0.16,1,0.3,1)';
    requestAnimationFrame(() => {
      panel.style.opacity   = '1';
      panel.style.transform = 'translateY(0)';
    });
    btn.innerHTML = '<span>➖ Ocultar curiosidades</span>';
  } else {
    panel.style.opacity   = '0';
    panel.style.transform = 'translateY(-8px)';
    setTimeout(() => { panel.style.display = 'none'; }, 420);
    btn.innerHTML = '<span>➕ Ver más curiosidades</span>';
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const h1 = document.querySelector('header h1');
  if (h1) {
    h1.innerHTML = h1.innerHTML.replace('🦒', '<span class="emoji-flota">🦒</span>');
    h1.style.opacity   = '0';
    h1.style.transform = 'translateY(-24px)';
    h1.style.transition = 'opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1)';
    setTimeout(() => {
      h1.style.opacity   = '1';
      h1.style.transform = 'translateY(0)';
    }, 120);
  }

  const sub = document.querySelector('header .subtitulo');
  if (sub) {
    sub.style.opacity   = '0';
    sub.style.transform = 'translateY(12px)';
    sub.style.transition = 'opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)';
    setTimeout(() => {
      sub.style.opacity   = '1';
      sub.style.transform = 'translateY(0)';
    }, 380);
  }

  const btnInfo = document.getElementById('btn-mas-info');
  if (btnInfo) {
    btnInfo.innerHTML = '<span>' + btnInfo.textContent + '</span>';
  }

  const filas = document.querySelectorAll('tr');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => {
          e.target.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
          e.target.style.opacity    = '1';
          e.target.style.transform  = 'translateX(0)';
        }, i * 60);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  filas.forEach(f => {
    f.style.opacity   = '0';
    f.style.transform = 'translateX(-12px)';
    obs.observe(f);
  });
});