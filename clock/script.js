let hourHand, minuteHand, secondHand, digitalTime, stopButton, startButton;
let interval;
let isRunning = true;
function setTime() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();
  const secondDegrees = (seconds / 60) * 360 + 90;
  const minuteDegrees = (minutes / 60) * 360 + (seconds / 60) * 6 + 90;
  const hourDegrees = (hours / 12) * 360 + (minutes / 60) * 30 + 90;
  secondHand.style.transform = `rotate(${secondDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  digitalTime.textContent = now.toLocaleTimeString("ru-RU");
}
function startClock() {
  interval = setInterval(setTime, 1000);
}
function initializeClock() {
  hourHand = document.querySelector(".hour-hand");
  minuteHand = document.querySelector(".minute-hand");
  secondHand = document.querySelector(".second-hand");
  digitalTime = document.getElementById("digitalTime");
  stopButton = document.getElementById("stopButton");
  startButton = document.getElementById("startButton");
  stopButton.addEventListener("click", () => {
    clearInterval(interval);
    isRunning = false;
    stopButton.disabled = true;
    startButton.disabled = false;
  });
  startButton.addEventListener("click", () => {
    if (!isRunning) {
      startClock();
      isRunning = true;
      stopButton.disabled = false;
      startButton.disabled = true;
    }
  });
  startClock();
}
document.addEventListener("DOMContentLoaded", initializeClock);
