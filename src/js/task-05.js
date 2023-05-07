// const inputEl = document.querySelector("#name-input");
// console.log("#name-input");
// const spanEl = document.querySelector("#name-output");
// console.log("#name-output");

// inputEl.addEventListener("click", () => {
//   if (inputEl.value) {
//     spanEl.textContent = inputEl.value;
//   } else {
//     spanEl.textContent = "Anonymous";
//   }
// });

const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", () => {
  if (nameInput.value) {
    nameOutput.textContent = nameInput.value;
  } else {
    nameOutput.textContent = "Anonymous";
  }
});
