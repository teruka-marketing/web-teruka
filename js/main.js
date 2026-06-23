/* ============================================
   TERUKA MARKETING — JavaScript principal
============================================ */

// Formulario de contacto
function handleSubmit(e) {
  e.preventDefault();

  const nombre   = document.getElementById('f-nombre').value;
  const email    = document.getElementById('f-email').value;
  const servicio = document.getElementById('f-servicio').value;

  if (!nombre || !email) {
    alert('Por favor completá nombre y email.');
    return;
  }

  alert('¡Gracias ' + nombre + '! Recibimos tu consulta sobre ' + (servicio || 'marketing digital') + '. Te contactamos pronto.');
  e.target.reset();
}
