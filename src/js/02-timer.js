import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const selector = document.getElementById('datetime-picker');
const start = document.querySelector('[data-start]');
const dataDays = document.querySelector('[data-days]');
const dataHours = document.querySelector('[data-hours]');
const dataMinutes = document.querySelector('[data-minutes]');
const dataSeconds = document.querySelector('[data-seconds]');
start.disabled = true;
let timerId; // Declarar la variable timerId

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (selectedDates[0] > Date.now()) {
      start.disabled = false;
    } else {
      start.disabled = true;
      Notify.failure('Please choose a date in the future');
    }
  },
};

const dateSelected = flatpickr(selector, options);

start.addEventListener('click', () => {
  const selected = Date.parse(selector.value);
  const totalTime = selected - new Date();
  setTimeout(() => {
    clearInterval(timerId);
    Notify.success('¡completed!');
    selector.disabled = false;
    start.disabled = true;
  }, totalTime);
  timerId = setInterval(() => {
    const remaining = selected - Date.now();
    console.log(convertMs(remaining));
  }, 1000);

  selector.disabled = true;
});

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  dataDays.textContent = addLeadingZero(days);
  dataHours.textContent = addLeadingZero(hours);
  dataMinutes.textContent = addLeadingZero(minutes);
  dataSeconds.textContent = addLeadingZero(seconds);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  if (value.toString().length < 2) {
    return value.toString().padStart(2, '0');
  } else {
    return value.toString();
  }
}
