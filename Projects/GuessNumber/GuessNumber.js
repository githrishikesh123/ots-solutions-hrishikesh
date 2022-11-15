let previousGuesses = [];
let randomNumber = Math.ceil(Math.random() * 100 + 1);
let numberOfAttempts = 10;
document.getElementById('attempNum').innerHTML=numberOfAttempts;
const lowOrHi = document.querySelector(".lowOrHi");
console.log(randomNumber)

// Main Function
function checkGuess() {

  let guess = parseInt(document.getElementById("guessField").value);
  const guessesRemaining = document.querySelector(".lastResult");
  const guessSlot = document.querySelector(".guesses");
  if (guess === randomNumber) {
    document.querySelector(".lowOrHi").innerHTML="You guessed it correctly!"
    // alert("You guessed it correctly!");
  } else if (guess > randomNumber) {
    numberOfAttempts--;
    alert("You guessed it more!");
  } else {
    numberOfAttempts--;
    alert("You guessed it less!");
  }

// ----------- for storing guess values and clearing input field------- 
document.getElementById('attempNum').innerHTML=numberOfAttempts;
  previousGuesses.push(guess)
  console.log(previousGuesses)
  document.getElementById("guesses").innerHTML=previousGuesses;
  document.getElementById("guessField").value='';

    // ----------  when attempts over---
    if (numberOfAttempts<=0 || guess === randomNumber) {
      alert("Game Over!!!")
      previousGuesses=[];
      document.getElementById("guesses").innerHTML=previousGuesses;
      numberOfAttempts=10;
      document.getElementById('attempNum').innerHTML=numberOfAttempts;
    }

}
