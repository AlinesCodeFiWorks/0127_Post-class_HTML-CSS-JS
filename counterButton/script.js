let count = 0;

document.getElementById("counterButton").addEventListener("click", () => {
  count++;
  document.getElementById("counter-display").innerText = count;
});
