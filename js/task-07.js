const inputRef = document.querySelector("#font-size-control");
console.log(inputRef);
const spanRef = document.querySelector("#text");
console.log(spanRef);
// визиваю подію на клік
inputRef.addEventListener("click", () => {
  //   spanRef.setAttribute("style", "font-size: " + inputRef.value + "px");
  spanRef.style.fontSize = inputRef.value + "px";
});
