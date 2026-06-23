/* ============================================
   TERUKA MARKETING — JavaScript principal
============================================ */

// Menú hamburguesa (mobile)
function toggleMenu() {
  const menu    = document.getElementById('nav-mobile');
  const overlay = document.getElementById('nav-overlay');
  menu.classList.toggle('open');
  overlay.classList.toggle('open');
  document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';
}

// Formulario de contacto — conectado a Formspree
async function handleSubmit(e) {
  e.preventDefault();

  const nombre   = document.getElementById('f-nombre').value.trim();
  const email    = document.getElementById('f-email').value.trim();
  const btn      = document.getElementById('form-btn');
  const msg      = document.getElementById('form-msg');

  if (!nombre || !email) {
    mostrarMensaje('Por favor completá nombre y email.', 'error');
    return;
  }

  // Estado de carga
  btn.textContent = 'Enviando...';
  btn.disabled = true;

  try {
    const response = await fetch('https://formspree.io/f/maqgnreq', {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: new FormData(e.target)
    });

    if (response.ok) {
      mostrarMensaje('¡Gracias ' + nombre + '! Recibimos tu consulta. Te respondemos en menos de 24 horas.', 'ok');
      e.target.reset();
    } else {
      mostrarMensaje('Hubo un problema al enviar. Intentá de nuevo o escribinos a agenciateruka@gmail.com', 'error');
    }
  } catch {
    mostrarMensaje('Hubo un problema al enviar. Revisá tu conexión e intentá de nuevo.', 'error');
  }

  btn.textContent = 'Enviar consulta →';
  btn.disabled = false;
}

function mostrarMensaje(texto, tipo) {
  const msg = document.getElementById('form-msg');
  msg.textContent = texto;
  msg.style.display = 'block';
  msg.style.background = tipo === 'ok' ? 'rgba(115,86,196,0.15)' : 'rgba(220,50,50,0.15)';
  msg.style.color = tipo === 'ok' ? '#B9A9E3' : '#ff8080';
}
