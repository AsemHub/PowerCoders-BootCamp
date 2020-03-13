let milliseconds = 0;
let seconds = 0;
let minutes = 0;
const startTimer = document.getElementById("start");
const pauseTimer = document.getElementById("pause");
const restTimer = document.getElementById("reset");
let interval;
startTimer.addEventListener("click", () => {
  clearInterval(interval);
  interval = setInterval(() => {
    document.getElementById("milliseconds").innerHTML = (
      "0" + ++milliseconds
    ).slice(-2);
    if (milliseconds === 100) {
      document.getElementById("seconds").innerHTML =
        ":" + ("0" + ++seconds).slice(-2) + ":";
      milliseconds = 0;
    } else if (seconds === 60) {
      document.getElementById("minutes").innerHTML = ("0" + ++minutes).slice(
        -2
      );
      seconds = 0;
    }
  }, 10);
});
pauseTimer.addEventListener("click", () => {
  clearInterval(interval);
});
restTimer.addEventListener("click", () => {
  clearInterval(interval);
  milliseconds = 0;
  seconds = 0;
  minutes = 0;
  document.getElementById("milliseconds").innerHTML = "0" + 0;
  document.getElementById("seconds").innerHTML = ":0" + 0 + ":";
  document.getElementById("minutes").innerHTML = "0" + 0;
});
