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
