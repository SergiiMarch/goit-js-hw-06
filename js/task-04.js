const counterEl = document.querySelector("#counter");
// console.log(counterEl);
const decrementBtn = counterEl.querySelector("[data-action='decrement']");
const incrimentBtn = counterEl.querySelector("[data-action='increment']");
const counterValue = counterEl.querySelector("#value");
console.log(counterValue);

let counterValueClick = 0;

// decrementBtn.addEventListener("click", () => {
//   counterValueClick--;
//   counterValue.textContent = counterValueClick;
// });
const decrCallbac = () => {
  counterValueClick--;
  counterValue.textContent = counterValueClick;
};
decrementBtn.addEventListener("click", decrCallbac);

incrimentBtn.addEventListener("click", () => {
  counterValueClick++;
  counterValue.textContent = counterValueClick;
});
