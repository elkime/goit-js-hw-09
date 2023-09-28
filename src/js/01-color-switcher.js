// Obtén una referencia a los botones "Start" y "Stop" mediante atributos data
const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');

// Agrega event listeners para los botones
startButton.addEventListener('click', startColorChange);
stopButton.addEventListener('click', stopColorChange);

let intervalId; // Variable para almacenar el ID del intervalo

function startColorChange() {
  // Deshabilita el botón "Start" mientras se ejecuta el cambio de color
  startButton.disabled = true;
  
  // Inicia un intervalo que cambia el color cada segundo
  intervalId = setInterval(changeBackgroundColor, 1000);
}

function stopColorChange() {
  // Habilita el botón "Start" cuando se detiene el cambio de color
  startButton.disabled = false;

  // Detiene el intervalo
  clearInterval(intervalId);
}

function changeBackgroundColor() {
  // Obtén un color aleatorio usando la función getRandomHexColor
  const randomColor = getRandomHexColor();

  // Cambia el color de fondo del body usando estilo inline
  document.body.style.backgroundColor = randomColor;
}
