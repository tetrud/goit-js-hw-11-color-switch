const refs = {
  startBtn: document.querySelector("button[data-action='start']"),
  stopBtn: document.querySelector("button[data-action='stop']"),
};

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

refs.startBtn.addEventListener('click', startswitchColor);
refs.stopBtn.addEventListener('click', stopswitchColor);

let intervalId = null;

function startswitchColor() {
  refs.startBtn.disabled = true;
  intervalId = setInterval(() => {
    const indexColor = randomIntegerFromInterval(0, colors.length - 1);
    document.body.style.backgroundColor = colors[indexColor];
  }, 1000);
}

function stopswitchColor() {
  clearInterval(intervalId);
  refs.startBtn.disabled = false;
}
