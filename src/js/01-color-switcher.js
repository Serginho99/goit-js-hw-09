function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

refs = {
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
  body: document.querySelector('body'),
};

let timerId = null;

refs.startBtn.addEventListener('click', addEventStart);

function addEventStart() {
  refs.startBtn.setAttribute('disabled', 'disabled');
  refs.stopBtn.removeAttribute('disabled', 'disabled');
  timerId = setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

refs.stopBtn.addEventListener('click', addEventStop);

function addEventStop() {
  refs.startBtn.removeAttribute('disabled', 'disabled');
  refs.stopBtn.setAttribute('disabled', 'disabled');
  clearInterval(timerId);
}

refs.startBtn.style.borderRadius = `${5}px`;
refs.stopBtn.style.borderRadius = `${5}px`;
refs.startBtn.style.borderColor = `transparent`;
refs.stopBtn.style.borderColor = `transparent`;
refs.startBtn.style.padding = `${10}px ${20}px`;
refs.stopBtn.style.padding = `${10}px ${20}px`;
refs.startBtn.style.display = 'flex';
refs.stopBtn.style.display = 'flex';
refs.startBtn.style.margin = `${0}px auto ${10}px ${650}px`;
refs.stopBtn.style.margin = `${0}px auto`;
refs.startBtn.style.fontFamily = `montserrat`;
refs.startBtn.style.fontSize = `${20}px`;
refs.stopBtn.style.fontFamily = `montserrat`;
refs.stopBtn.style.fontSize = `${20}px`;
