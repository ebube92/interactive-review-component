const submitButton = document.getElementById("submit-button");
const ratingSection = document.getElementById("rating-section");
const thankYouSection = document.getElementById("thank-you-section");
const selectedRating = document.getElementById("selected-rating");
const ratingButtons = document.querySelectorAll(".rating-button");
let selectedValue = 0;

ratingButtons.forEach((button) => {
  button.addEventListener("click", () => {
    selectedValue = button.value;
  });
});

submitButton.addEventListener("click", () => {
  thankYouSection.classList.remove("hidden");
  selectedRating.textContent = selectedValue;
  ratingSection.classList.add("hidden");
  console.log("button clicked");
});
