document.addEventListener('DOMContentLoaded', () => {
    const start = document.querySelector('[data-start]');
    const stop = document.querySelector('[data-stop]');
    const body = document.querySelector('body');
    let timerId = null;
    start.classList.add('btn');
    stop.classList.add('btn');
  
    function getRandomHexColor() {
      return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, '0')}`;
    }
  
    start.addEventListener('click', () => {
      timerId = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor();
      }, 1000);
      start.disabled = true;
    });
  
    stop.addEventListener('click', () => {
      clearInterval(timerId);
      start.disabled = false;
    });
  });
  