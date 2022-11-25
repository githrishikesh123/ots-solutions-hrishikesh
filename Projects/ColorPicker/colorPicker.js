function myFunction() {
  var redColor = document.getElementById("red").value;
  console.log(redColor);
  document.getElementById("valueColor1").innerHTML = "R(" + redColor + "), ";

  var greenColor = document.getElementById("green").value;
  console.log(greenColor);
  document.getElementById("valueColor2").innerHTML = "G(" + greenColor + ")";

  var blueColor = document.getElementById("blue").value;
  console.log(blueColor);
  document.getElementById("valueColor3").innerHTML = ", B(" + blueColor + ")";

  document.getElementById(
    "colorIs"
  ).style.backgroundColor = `rgb(${redColor}+${greenColor}+${blueColor})`;
}
