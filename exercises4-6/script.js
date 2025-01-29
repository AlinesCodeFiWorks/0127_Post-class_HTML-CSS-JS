//Exercise 4
//Ingredients
const myInput = document.getElementById("myInput");
const myButton = document.getElementsByClassName("myButton");
const inputDisplay = document.getElementsByClassName("inputDisplay");

//Recipe
function displayText() {
  myButton.addEventListener("click", function () {
    inputDisplay.innerText = `${myInput.innerText}`;
  });
}
