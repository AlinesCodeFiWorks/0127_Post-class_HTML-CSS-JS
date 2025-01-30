//Exercise 4
//Ingredients
const myInput = document.querySelector("#myInput");
const myButton = document.querySelector(".myButton");
const inputDisplay = document.querySelector(".inputDisplay");

//Recipe
function displayText() {
  inputDisplay.textContent = myInput.value;
}
myButton.addEventListener("click", displayText);

//Exercise 5
//Ingredients
const countDown = setInterval(10);
const countDownTimer = document.querySelector(".countDownTimer");
const startButton = document.querySelector(".startButton");
const stopButton = document.querySelector(".stopButton");
//Recipe
function startTimer{}
function stopTimer{countDown.clearInterval();}
countDownTimer.textContent=countDown;
startButton.addEventListener('click',startTimer);
stopButton.addEventListener('click',stopTimer);