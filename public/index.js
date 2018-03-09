
//number for the guess
var guessNumber = document.querySelector("#number");
var guess = document.querySelector('.guess');
var guessButton = document.querySelector("#guess-button");
var yourGuess = document.querySelector('.your-guess');
var clearButton = document.querySelector('#clear-button');
var inputCheck = document.querySelector('#number');
var resetButton = document.querySelector('#reset');
var error = document.querySelector('.err');
var rangeSubmitButton = document.querySelector('#submit-range-button');
var lowNumberInput = document.getElementById('low-number')
var highNumberInput = document.getElementById('high-number')
var rangeError = document.querySelector('.range-error')
var randomNumber = 0;
var low = 0
var high = 100


//Function to grab the number entered in the input on click of guess button
function getGuess (event) {
  event.preventDefault()
  var answer = parseInt(guessNumber.value);
  guess.innerText = answer
  checkGuessWithRandom()
  testForCorrectDataFromInput()
  document.getElementById("number").value = "";
}

//Function to Create a Random Number between 1 and 100
function randomNumberGenerator(low, high) {
  randomNumber = Math.round((Math.random() * (high - low+1) + low));
  console.log(randomNumber + " is random number")
  console.log(low + "low Number")
  console.log(high + "high Number")
}

//event listener to run randomNumberGenerator on window.load
window.addEventListener("load", function load(){
  randomNumberGenerator(low, high)
});

// Function to test for input data 
function testForCorrectDataFromInput() {
  var answer = parseInt(guessNumber.value);
  if (isNaN(answer)) {
    error.innerText = "WARNING: Thats Not a Number, please guess again with a number between " +low+ " and " +high+ " only"
  } else if (answer > high || answer < low) {
    error.innerText = "WARNING: you are out of range. Only guess a Number Between "+low+" and "+high+"."
  } else {
    error.innerText = "your last guess was..."
  }
}

//Compare User Guess with the Random Number
function checkGuessWithRandom() {

  var  answer = parseInt(guessNumber.value);
  if (answer < randomNumber) {
    yourGuess.innerText = "that is too Low, try again."
  } else if (answer > randomNumber) {
    yourGuess.innerText = "that is too High, go again?"
  } else if (answer === randomNumber) {
    yourGuess.innerText = "Boom" 
    window.alert("Winner Winner Chicken Dinner; "+randomNumber+" is correct!")
    plusMinusTen()
  } else {
    yourGuess.innerText = "I am BROKEN"
  }
}

//Clear Button
function clearButtonFunction (event){
  event.preventDefault()
  document.getElementById("number").value = "";
}

//Disable buttons
function disableButtons () {
  document.getElementById('guess-button').disabled = true;
  document.getElementById('clear-button').disabled = true;
  document.getElementById('reset').disabled = true;
  document.getElementById('submit-range-button').disabled = true;
}

// Enable Buttons
function enableButtons () {
  document.querySelector('#guess-button').disabled = false;
  document.querySelector('#clear-button').disabled = false;
  document.querySelector('#reset').disabled = false;
  document.getElementById('submit-range-button').disabled = false;
}

//Reset Buttons
function resetButtonFunction () {
  yourGuess.innerText = "";
  guessNumber.innerText = "";
  guess.innerText = "##";
  error.innerText = "";
  lowNumberInput.value = "";
  highNumberInput.value = "";
  document.getElementById("number").value = "";
  randomNumberGenerator(0, 100) 
  disableButtons() 
}

//Function when something entered in the Range Input to activate the Range Submit and Reset Buttons
function rangeActivateSubmitButton() {
  document.getElementById('submit-range-button').disabled = false;
  document.querySelector('#reset').disabled = false;
}

//get range from the input fields
function rangeSubmit (event) {
  event.preventDefault()
  low = parseInt(lowNumberInput.value);
  high = parseInt(highNumberInput.value);
  randomNumberGenerator (low, high);
  if (isNaN(low) || isNaN(high)) {
    rangeError.innerText = "Thats Not a Number, please try again"
    setTimeout(resetButtonFunction , 5000);
  } 
}

//Adds and subtracts 10 from the winning values
function plusMinusTen() {
  var lowMinusTen = (low - 10);
  var highPlusTen = (high + 10);
  randomNumberGenerator (lowMinusTen, highPlusTen);
}

//Button Listeners
guessButton.addEventListener("click", getGuess);
clearButton.addEventListener("click", clearButtonFunction);
resetButton.addEventListener('click', resetButtonFunction);
inputCheck.addEventListener('keyup', enableButtons);
rangeSubmitButton.addEventListener('click', rangeSubmit)
lowNumberInput.addEventListener('keyup', rangeActivateSubmitButton);
highNumberInput.addEventListener('keyup', rangeActivateSubmitButton);






