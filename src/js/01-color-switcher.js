function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
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

startBtn.style.borderRadius = `${5}px`;
stopBtn.style.borderRadius = `${5}px`;
startBtn.style.borderColor = `transparent`;
stopBtn.style.borderColor = `transparent`;
startBtn.style.padding = `${10}px ${20}px`;
stopBtn.style.padding = `${10}px ${20}px`;
startBtn.style.display = 'flex';
stopBtn.style.display = 'flex';
startBtn.style.margin = `${0}px auto ${10}px ${650}px`;
stopBtn.style.margin = `${0}px auto`;
startBtn.style.fontFamily = `montserrat`;
startBtn.style.fontSize = `${20}px`;
stopBtn.style.fontFamily = `montserrat`;
stopBtn.style.fontSize = `${20}px`;
