setInterval(function () {
  var hours = new Date();
  var hour = hours.getHours();

  var minutes = hours.getMinutes();
  var seconds = hours.getSeconds();
  console.log(seconds);

  if (hour > 12) {
    hour = hour - 12;
    document.querySelector(".dayEvent").innerHTML="PM";
  }

  document.getElementById("hourValue").innerHTML = hour;
  document.getElementById("minuteValue").innerHTML = minutes;
  document.getElementById("secondValue").innerHTML = seconds;
}, 1000);
