const actualizarReloj = () => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    document.getElementById('hora').textContent = hours;
    document.getElementById('minutos').textContent = minutes;
    document.getElementById('segundos').textContent = seconds;
};

setInterval(actualizarReloj, 1000);
ActualizarReloj(); 