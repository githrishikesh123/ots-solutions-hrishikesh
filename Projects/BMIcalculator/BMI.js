let bmiQueries = [];
function submitBtn() {
  // ----- Input values in varibales
  var height = document.getElementById("heightInput").value;
  console.log("height is : ", height);
  let weight = document.getElementById("weightInput").value;
  console.log("height is : ", weight);

  let bmi = weight / height ** 2;
  let bmiRes = " " + bmi.toFixed(2);
  document.getElementById("bmires").innerHTML = bmiRes;
  // ------- Push values in array in store in bmiQueries
  bmiQueries.push(bmiRes);
  console.log(bmiQueries);
  document.getElementById("bmiQueries").innerHTML = bmiQueries;
  // ---------- Check for No inputs

  // --------- Shift entries in array
  if (bmiQueries.length >= 10) {
    bmiQueries.shift();
  }
  // ------- clear input field after calculation ----
  document.getElementById("heightInput").value = "";
  document.getElementById("weightInput").value = "";
  if (height <= 0 || weight <= 0) {
    document.getElementById("resMsg").innerHTML = "Enter Valid Number!";
    // document.getElementById("resMsg").style.color = "crimson";

    // ---- for NaN
    document.getElementById("bmires").innerHTML = "";
    document.getElementById("bmiQueries").innerHTML = "";
  }
  // ----------- Result Cases ----------
  if (bmiRes < 18.5) {
    document.getElementById("resMsg").innerHTML = "You Are UnderWeight";
  } else if (bmiRes > 18.5 && bmiRes < 24.9) {
    document.getElementById("resMsg").innerHTML = "You've Healthy Weight";
  } else if (bmiRes > 25 && bmiRes < 30) {
    document.getElementById("resMsg").innerHTML = "You Are OverWeight";
  } else if (bmiRes > 30) {
    document.getElementById("resMsg").innerHTML = "You Are In Obesity State";
  }
}

// try callback here
