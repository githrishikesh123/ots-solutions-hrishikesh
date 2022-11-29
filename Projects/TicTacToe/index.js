// var addButton = document.getElementById("guess");
// addButton.addEventListener("click", () => {
//   console.log("hi");
// });
// var randNum =  Math.floor(Math.random() * 10) + 1;
var addButton2 = document.getElementById("guess7");
// document.getElementById("guess7").innerText="O";

addButton2.addEventListener("click", ()=>{
    var randNum2 =  Math.floor(Math.random() * 10) + 1;
    console.log(randNum2);
    var finNum = randNum2!=7;
console.log(finNum)
})
