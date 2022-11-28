var addButton = document.getElementById("addBtn");
var store = [];

addButton.addEventListener("click", () => {

  var inputVal = document.getElementById("inputField").value;
  console.log(inputVal.length);

  if (inputVal.length) {
    console.log(inputVal.length);
    const createList = document.createElement("li"); // create li
    createList.innerHTML = inputVal;                  // inputval to createlist i.e in li 
    document.getElementById("list").appendChild(createList); // append createlist

    let createBtn = document.createElement("button");
    createBtn.innerHTML = "Delete";
    createList.appendChild(createBtn);

    createBtn.addEventListener("click", () => {
      createList.innerHTML = "";
    });
  }

  store.push(inputVal);
  console.log(store.length);

  for (var i = 0; i < store.length; i++) {}
  localStorage.setItem(i, inputVal);
  document.getElementById("inputField").value=""
});

function percistFunc() {
  for (i = 0; i <= localStorage.length; i++) {
    var get = localStorage.getItem(i);
    const createList2 = document.createElement("li");
    createList2.innerHTML = get;
    document.getElementById("list").appendChild(createList2);
  }
}

function clearFunc() {
  document.getElementById("list").innerHTML = "";
}
