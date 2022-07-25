import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const startBtn = document.querySelector('[data-start]');
startBtn.setAttribute('disabled', 'disabled');
const inputText = document.querySelector('#datetime-picker');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');
let deltaTime = null;
let timerId = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: Date.now(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    //  console.log(selectedDates[0]);
    deltaTime = selectedDates[0] - options.defaultDate;
    if (deltaTime < 0) {
      startBtn.setAttribute('disabled', 'disabled');
      return window.alert('Please choose a date in the future');
    } else if (deltaTime > 0) {
      return startBtn.removeAttribute('disabled', 'disabled');
    }
  },
};

flatpickr(inputText, options);

const timer = {
  start() {
    if (!options.enableTime) {
      return;
    }
    options.enableTime = false;
    timerId = setInterval(() => {
      deltaTime -= 1;
      console.log(deltaTime);
      const { days, hours, minutes, seconds } = convertMs(deltaTime);
      updateClockFace({ days, hours, minutes, seconds });
    }, options.minuteIncrement);
  },
};

startBtn.addEventListener('click', onClickStartBtn);

function onClickStartBtn() {
  timer.start();
  //   startBtn.setAttribute('disabled', 'disabled');
}

function updateClockFace({ days, hours, minutes, seconds }) {
  daysEl.textContent = days;
  hoursEl.textContent = hours;
  minutesEl.textContent = minutes;
  secondsEl.textContent = seconds;
}
function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}
