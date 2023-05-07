const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsEl = document.querySelector("#ingredients");
console.log(ingredientsEl);

for (const ingredient of ingredients) {
  const listEl = document.createElement("li");
  listEl.textContent = ingredient;

  ingredientsEl.appendChild(listEl);
}
