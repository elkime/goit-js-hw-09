import { Notify } from 'notiflix/build/notiflix-notify-aio';

const initDelayInput = document.getElementsByName('delay')[0];
const delayStepInput = document.getElementsByName('step')[0];
const amountInput = document.getElementsByName('amount')[0];
const submit = document.getElementById('submit-button');
const form = document.querySelector('form');
submit.disabled = true;

function checkInputs() {
  if (
    initDelayInput.value !== '' &&
    delayStepInput.value !== '' &&
    amountInput.value !== ''
  ) {
    submit.disabled = false;
  } else {
    submit.disabled = true;
  }
}

initDelayInput.addEventListener('input', checkInputs);
delayStepInput.addEventListener('input', checkInputs);
amountInput.addEventListener('input', checkInputs);

submit.addEventListener('click', event => {
  event.preventDefault();

  const initDelay = parseInt(initDelayInput.value);
  const delayStep = parseInt(delayStepInput.value);
  const amount = parseInt(amountInput.value);

  let counter = 0;
  let position = 1;
  let delay = initDelay;
  const timerId = setInterval(() => {
    const shouldResolve = Math.random() > 0.3;

    new Promise((resolve, reject) => {
      if (shouldResolve) {
        resolve(`promise ${position} in ${delay}ms`);
      } else {
        reject(` promise ${position} in ${delay}ms`);
      }
    }).then(
      value => {
        Notify.success(`✅ Fulfilled  ${value}`);
      },
      error => {
        Notify.failure(`❌ Rejected ${error}`);
      }
    );

    counter++;
    position = position += 1;
    delay = delay += delayStep;
    if (counter === amount) {
      clearInterval(timerId);
      form.reset();
      submit.disabled = true;
    }
  }, delayStep + initDelay);
});
