let seconds = 0;
let minutes = 0;
let hours = 0;

let dseconds = 0;
let dminutes = 0;
let dhours = 0;

let interval = null;
let status = "stopped";

function stopWatch() {
  seconds++;
  if (seconds / 60 == 1) {
    seconds = 0;
    minutes++;
    if (minutes / 60 == 1) {
      minutes = 0;
      hours++;
    }
  }

  if (seconds < 10) {
    dseconds = "0" + seconds.toString();
  } else {
    dseconds = seconds;
  }
  if (minutes < 10) {
    dminutes = "0" + minutes.toString();
  } else {
    dminutes = minutes;
  }
  if (hours < 10) {
    dhours = "0" + hours.toString();
  } else {
    dhours = hours;
  }

  document.getElementById("display").innerHTML =
    dhours + ":" + dminutes + ":" + dseconds;
}

function startStop() {
  if (status === "stopped") {
    interval = window.setInterval(stopWatch, 1000);
    document.getElementById("startStop").innerHTML = "Stop";
    status = "started";
  }
  else {
    window.clearInterval(interval);
    document.getElementById("startStop").innerHTML = "Start";
    status = "stopped";
  }
}

function reset() {
  window.clearInterval(interval);
  seconds = 0;
  minutes = 0;
  hours = 0;
  document.getElementById("display").innerHTML = "00:00:00";
  document.getElementById("startStop").innerHTML = "Start";
}