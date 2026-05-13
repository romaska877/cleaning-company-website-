const quoteForm = document.getElementById("quoteForm");
const quoteMessage = document.getElementById("quoteMessage");

quoteForm.addEventListener("submit", function (event) {
  event.preventDefault();

  quoteMessage.textContent =
    "Thank you! Your quote request has been received. We will contact you soon.";

  quoteForm.reset();
});