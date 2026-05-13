const quoteButton = document.getElementById("quoteButton");
const quoteMessage = document.getElementById("quoteMessage");

quoteButton.addEventListener("click", function () {
  quoteMessage.textContent =
    "Thanks! Please call 020 1234 5678 or email hello@freshnestcleaning.co.uk to request your quote.";
});