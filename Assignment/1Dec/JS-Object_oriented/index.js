// [[Prototype]]==>
//           In JavaScript, objects have a special hidden property [[Prototype]]
//           that is either null or references another object. That object is called “a prototype”:

//      rabbit prototypically inherits from animal".
//      So if animal has a lot of useful properties and methods, then they become automatically available in rabbit.
//      Such properties are called “inherited”.
//      If we have a method in animal, it can be called on rabbit:
/*
let animal = {
  eats: true,
};
let rabbit = {
  jumps: true,
};

rabbit.__proto__ = animal; // sets rabbit.[[Prototype]] = animal

alert(animal.eats); // true (**)
alert(animal.jumps); // true
*/
// ---------------------------------------------
let animal2 = {
  eats: true,
  walk() {
    alert("Animal walk");
  },
};

let rabbit = {
  jumps: true,
  __proto__: animal2,
};

// walk is taken from the prototype
rabbit.walk(); // Animal walk
// -------------------------------------------------- prototype chain -----
let animal3 = {
  eats: true,
  walk() {
    alert("Animal walk");
  },
};

let rabbit3 = {
  jumps: true,
  __proto__: animal,
};

let longEar3 = {
  earLength: 10,
  __proto__: rabbit,
};

// walk is taken from the prototype chain
longEar3.walk(); // Animal walk
alert(longEar3.jumps); // true (from rabbit)

//      Now if we read something from longEar, and it’s missing,
//      JavaScript will look for it in rabbit, and then in animal.

// ===================================================>
function createUser(name, score) {
  const newUser = Object.create(userfunctionStore);
  newUser.score = score;
  newUser.name = name;
  return newUser;
}

const userfunctionStore = {
  increment: function () {
    this.score++;
  },
  login: function () {
    console.log("User Logged In");
  },
};

const user1 = createUser("Joey", 20);
const user2 = createUser("Ross", 30);

console.log(user1);

console.log(user1.hasOwnProperty("score"));

// =================================================================  Debouncing ===========>

//      method used to increase browser performance.
//      Debouncing is a programming technique that assures that time-consuming activities do not trigger
//      the web page's performance decreases.
//      the Debounce methods do not run when invoked. Instead,-
//      they wait a predetermined period of time until executing.
//
