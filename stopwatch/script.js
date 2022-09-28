'use strick';

const btnStart = document.querySelector('.btn-start');
const btnStop = document.querySelector('.btn-stop');
const btnReset = document.querySelector('.btn-reset');
const appendSeconds = document.querySelector('.seconds');
const appendTens = document.querySelector('.tens');

let seconds = 00;
let tens = 00;
let interval;

const startTimer = () => {
  tens++;
  if (tens <= 9) {
    appendTens.innerHTML = '0' + tens;
  }
  if (tens > 9) {
    appendTens.innerHTML = tens;
  }
  if (tens > 99) {
    seconds++;
    appendSeconds.innerHTML = '0' + seconds;
    tens = 0;
    appendTens.innerHTML = '0' + 0;
  }
  if (seconds > 9) {
    appendSeconds.innerHTML = seconds;
  }
};

btnStart.addEventListener('click', function () {
  clearInterval(interval);
  interval = setInterval(startTimer, 10);
});

btnStop.addEventListener('click', function () {
  clearInterval(interval);
});

btnReset.addEventListener('click', function () {
  clearInterval(interval);
  tens = '00';
  seconds = '00';
  appendSeconds.innerHTML = seconds;
  appendTens.innerHTML = tens;
});
