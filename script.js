 const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const navItems = document.querySelectorAll(".nav-links a");

menuToggle.addEventListener("click", function () {
  navLinks.classList.toggle("active");
});

navItems.forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("active");
  });
});
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(function (item) {
  const question = item.querySelector(".faq-question");

  question.addEventListener("click", function () {
    faqItems.forEach(function (otherItem) {
      if (otherItem !== item) {
        otherItem.classList.remove("active");
      }
    });

    item.classList.toggle("active");
  });
});
const galleryImages = document.querySelectorAll(".gallery-grid img");
const imageModal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const closeModal = document.getElementById("closeModal");

galleryImages.forEach(function (image) {
  image.addEventListener("click", function () {
    modalImage.src = image.src;
    modalImage.alt = image.alt;
    imageModal.classList.add("active");
  });
});

closeModal.addEventListener("click", function () {
  imageModal.classList.remove("active");
});

imageModal.addEventListener("click", function (event) {
  if (event.target === imageModal) {
    imageModal.classList.remove("active");
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    imageModal.classList.remove("active");
  }
});

const calcServiceInput = document.getElementById("calcService");
const calcRoomsInput = document.getElementById("calcRooms");
const calcFrequencyInput = document.getElementById("calcFrequency");
const calcOvenInput = document.getElementById("calcOven");
const calcFridgeInput = document.getElementById("calcFridge");
const calcWindowsInput = document.getElementById("calcWindows");

const calcResultText = document.getElementById("calcResultText");
const calcBasePriceText = document.getElementById("calcBasePriceText");
const calcRoomCostText = document.getElementById("calcRoomCostText");
const calcExtrasText = document.getElementById("calcExtrasText");
const calcDiscountText = document.getElementById("calcDiscountText");

function calculateCleaningEstimate() {
  const service = calcServiceInput.value;
  const rooms = Number(calcRoomsInput.value);
  const frequency = calcFrequencyInput.value;

  if (service === "" || frequency === "" || rooms < 1) {
    calcResultText.textContent =
      "Please choose a service, frequency and valid number of rooms.";

    calcBasePriceText.textContent = "-";
    calcRoomCostText.textContent = "-";
    calcExtrasText.textContent = "-";
    calcDiscountText.textContent = "-";

    return;
  }

  let basePrice = 0;

  if (service === "home") {
    basePrice = 30;
  } else if (service === "deep") {
    basePrice = 60;
  } else if (service === "office") {
    basePrice = 45;
  }

  const roomCost = rooms * 10;

  let extrasCost = 0;

  if (calcOvenInput.checked) {
    extrasCost += 20;
  }

  if (calcFridgeInput.checked) {
    extrasCost += 15;
  }

  if (calcWindowsInput.checked) {
    extrasCost += 25;
  }

  const subtotal = basePrice + roomCost + extrasCost;

  let discountPercent = 0;

  if (frequency === "weekly") {
    discountPercent = 15;
  } else if (frequency === "fortnightly") {
    discountPercent = 10;
  }

  const discountAmount = subtotal * (discountPercent / 100);
  const totalPrice = subtotal - discountAmount;

  calcResultText.textContent = `Estimated total: £${Math.round(totalPrice)}`;
  
  const estimatedPriceInput = document.getElementById("estimatedPriceInput");

if (estimatedPriceInput) {
  estimatedPriceInput.value = `£${Math.round(totalPrice)}`;
}
  calcBasePriceText.textContent = `£${basePrice}`;
  calcRoomCostText.textContent = `£${roomCost}`;
  calcExtrasText.textContent = `£${extrasCost}`;
  calcDiscountText.textContent = `${discountPercent}%`;
}

calcServiceInput.addEventListener("change", calculateCleaningEstimate);
calcRoomsInput.addEventListener("input", calculateCleaningEstimate);
calcFrequencyInput.addEventListener("change", calculateCleaningEstimate);
calcOvenInput.addEventListener("change", calculateCleaningEstimate);
calcFridgeInput.addEventListener("change", calculateCleaningEstimate);
calcWindowsInput.addEventListener("change", calculateCleaningEstimate);