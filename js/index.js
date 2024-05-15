console.clear();

const form = document.querySelector('[data-js="card-form"]');
const textInput = document.querySelector('[data-js="text-input"]');
const cardContainer = document.querySelector('[data-js="card-container"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const newCard = document.createElement("li");
  newCard.classList.add("card");

  // Do not use innerHTML with user input
  // newCard.innerHTML = `
  // <h2>Card</h2>
  // <p>${textInput.value}</p>
  // `;

  // Create headline
  const cardHeadline = document.createElement("h2");
  cardHeadline.textContent = "Card";
  newCard.append(cardHeadline);

  // Create paragraph with card text
  const cardText = document.createElement("p");
  cardText.textContent = textInput.value;
  newCard.append(cardText);

  cardContainer.append(newCard);

  event.target.reset();
});
