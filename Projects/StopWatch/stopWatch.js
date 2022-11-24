// start stop reset
// min sec
// start after clicking start btn

var seconds = 0;
var minutes = 0;
var startTime;
document.getElementById("stopBtn").disabled = true;
// document.getElementById("stopBtn").style.backgroundColor = "grey";

var timer = () => {
  seconds++;
  document.getElementById("sec").innerHTML = seconds;
  console.log(seconds);

  if (seconds >= 59) {
    minutes += 1;
    seconds = 0;
    document.getElementById("min").innerHTML = minutes;
  }
};

function start() {
  startTime = setInterval(timer, 1000);
  document.getElementById("stopBtn").disabled = false;
  document.getElementById("stopBtn").style.backgroundColor = "green";
}

function stopTime() {
  clearInterval(startTime);
}

function resetIntv() {
  clearInterval(startTime);
  minutes = 0;
  seconds = 0;
  document.getElementById("min").innerHTML = minutes;
  document.getElementById("sec").innerHTML = seconds;
}
