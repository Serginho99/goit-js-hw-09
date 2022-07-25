import '/src/css/01-color-switcher.css';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startBtn = document.querySelector('[data-start]');
startBtn.classList.add('btn');
const stopBtn = document.querySelector('[data-stop]');
stopBtn.classList.add('btn');
const body = document.querySelector('body');

let timerId = null;

startBtn.addEventListener('click', addEventStart);

function addEventStart() {
  startBtn.setAttribute('disabled', 'disabled');
  stopBtn.removeAttribute('disabled', 'disabled');
  timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

stopBtn.addEventListener('click', addEventStop);

function addEventStop() {
  startBtn.removeAttribute('disabled', 'disabled');
  stopBtn.setAttribute('disabled', 'disabled');
  clearInterval(timerId);
}
