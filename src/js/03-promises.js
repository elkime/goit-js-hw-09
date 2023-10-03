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
