const contador = document.getElementById("contador");

if (contador) {
  // 🔥 1. Revisar si ya existe un tiempo guardado
  let tiempoFinal = localStorage.getItem("tiempoFinal");

  // 🔥 2. Si NO existe, lo creamos (48h desde ahora)
  if (!tiempoFinal) {
    tiempoFinal = new Date().getTime() + 48 * 60 * 60 * 1000;
    localStorage.setItem("tiempoFinal", tiempoFinal);
  }

  // 🔥 3. Convertir a número
  tiempoFinal = parseInt(tiempoFinal);

  // 🔥 4. Contador
  setInterval(() => {
    const ahora = new Date().getTime();
    const diferencia = tiempoFinal - ahora;

    const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
    const segundos = Math.floor((diferencia / 1000) % 60);

    contador.innerHTML = `⏳ Termina en: ${horas}h ${minutos}m ${segundos}s`;

    if (diferencia < 0) {
      contador.innerHTML = "⚠️ Oferta finalizada";
      localStorage.removeItem("tiempoFinal"); // opcional: reinicia después
    }
  }, 1000);
}
