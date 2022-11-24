var hours = new Date();
var hour = hours.getHours();

var minutes = hours.getMinutes();

var seconds = hours.getSeconds();
console.log(seconds);

if (hour > 12) {
  hour = hour - 12;
  document.getElementById("hourValue").innerHTML = hour;
  document.getElementById("minuteValue").innerHTML = minutes;
  document.getElementById("secondValue").innerHTML = seconds;
}

setInterval(function () {
    var secondsFin = seconds;
    document.getElementById("secondValue").innerHTML = secondsFin;
    console.log(secondsFin)
}, 1000);
