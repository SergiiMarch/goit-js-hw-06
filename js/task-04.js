const counterEl = document.querySelector("#counter");

const decrementBtn = counterEl.querySelector("[data-action='decrement']");
const incrimentBtn = counterEl.querySelector("[data-action='increment']");
const counterValue = counterEl.querySelector("#value");

let counterValueClick = 0;

const decrCallbac = () => {
  counterValueClick--;
  counterValue.textContent = counterValueClick;
};
decrementBtn.addEventListener("click", decrCallbac);

incrimentBtn.addEventListener("click", () => {
  counterValueClick++;
  counterValue.textContent = counterValueClick;
});
