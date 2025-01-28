const quotes = ["Quote 1", "Quote 2", "Quote 3", "Quote 4", "Quote 5"];

document.getElementById("generate-quote").addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById(
    "quote-display"
  ).innerText = `"${quotes[randomIndex]}"`;
});
