// Event Bubbling===>
//    he event movement begins from the target to the outermost element.
//    It means when the user click on the button, the click event flows in this order from bottom to top.
//    event bubbling is used where the event handlers are invoked when-
//    one element is nested on to the other element and are part of the same event.

/*
document.getElementById("outmost").addEventListener("click", () => {
  document.getElementById("outmost").style.backgroundColor = "Teal";
});

document.getElementById("outer").addEventListener("click", () => {
  document.getElementById("outer").style.backgroundColor = "LightBlue";
});
document.getElementById("paraOne").addEventListener("click", () => {
  document.getElementById("paraOne").style.backgroundColor = "Chartreuse";
});

*/

// Event Capturing=====>
// Netscape Browser was the first to introduce the concept of Event Capturing.
// Event Capturing is opposite to event bubbling, where in event capturing,
///// an event moves from the outermost element to the target.


/*
let outmost = document.getElementById("outmost");
let outer = document.getElementById("outer");
let innerDiv = document.getElementById("inner");
let paraOne = document.getElementById("paraOne");

outmost.addEventListener("click", function () {
  console.log("OutmostDiv is invoked");
},true);

outer.addEventListener("click", function () {
  console.log("OuterDiv is invoked");
  this.firstChild;
},true);

innerDiv.addEventListener("click", function () {
  console.log("innerDiv is invoked");
},true);

paraOne.addEventListener("click", function () {
  console.log("ParaOne is invoked");
},true);

*/




// ============ Both Event Bubbling & Event Capturing ===============================>
/*
let outmost = document.getElementById("outmost");
let outer = document.getElementById("outer");
let innerDiv = document.getElementById("inner");
let paraOne = document.getElementById("paraOne");

outmost.addEventListener("click", function () {
  console.log("OutmostDiv is invoked");
},true);

outer.addEventListener("click", function () {
  console.log("OuterDiv is invoked");
  this.firstChild;
},false);

innerDiv.addEventListener("click", function () {
  console.log("innerDiv is invoked");
},false);

paraOne.addEventListener("click", function () {
  console.log("ParaOne is invoked");
},true);

*/


