// CONTADOR DE 48 HORAS
const contador = document.getElementById("contador");

// Fecha futura (48 horas desde ahora)
const tiempoFinal = new Date().getTime() + 48 * 60 * 60 * 1000;

setInterval(() => {
  const ahora = new Date().getTime();
  const diferencia = tiempoFinal - ahora;

  const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
  const segundos = Math.floor((diferencia / 1000) % 60);

  contador.innerHTML = `⏳ Termina en: ${horas}h ${minutos}m ${segundos}s`;

  if (diferencia < 0) {
    contador.innerHTML = "⚠️ Oferta finalizada";
  }
}, 1000);