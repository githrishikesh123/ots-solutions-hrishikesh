let bmiQueries=[];
function submitBtn(){
    
    var height = document.getElementById("heightInput").value;
    console.log("height is : ", height)
    let weight = document.getElementById("weightInput").value;
    console.log("height is : ", weight)

    let bmi = ((weight/((height)**2)))
    let bmiRes = bmi.toFixed(2)
    document.getElementById("bmires").innerHTML=bmiRes;
    bmiQueries.push(bmiRes)
    console.log(bmiQueries)
    document.getElementById("bmiQueries").innerHTML=bmiQueries;
    if(height<=0 || weight<=0){
        alert("Enter Valid Number");
    }
    if(bmiQueries.length>=10){
        bmiQueries.shift();
    }
    document.getElementById("heightInput").value="";
    document.getElementById("weightInput").value="";
}