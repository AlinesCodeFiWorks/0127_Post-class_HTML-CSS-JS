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
const countDownTimer = document.querySelector(".countDownTimer");
const startButton = document.querySelector(".startButton");
const stopButton = document.querySelector(".stopButton");
let remainingTime = 10;
let countDown;
//Recipe
function startTimer() {
  countDown = setInterval(function () {
    if (remainingTime > 0) {
      remainingTime = remainingTime - 1;
      countDownTimer.textContent = remainingTime;
    } else {
      clearInterval(countDown); // Stop at 0
    }
  }, 1000);
}
function stopTimer() {
  clearInterval(countDown);
}
startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
//Feeling pretty defeated having relied on AI so heavily for this one, but I definitely learned a lot :,)
