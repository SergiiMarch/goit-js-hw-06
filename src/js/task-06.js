// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur),
//  перевіряє його вміст щодо правильної кількості
//   введених символів.
// Яка кількість символів повинна бути в інпуті,
//  зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів,
// то border інпуту стає зеленим,
// якщо неправильна кількість - червоним.
// const inputField = document.querySelector("#validation-input");
// const inputLength = inputField.getAttribute("data-length");
// const addValidation = () =>
//   inputField.value.length == inputLength
//     ? inputField.classList.add("valid")
//     : inputField.classList.add("invalid");
// const removeValidation = () => {
//   if (inputField.classList.contains("valid"))
//     inputField.classList.remove("valid");
//   if (inputField.classList.contains("invalid"))
//     inputField.classList.remove("invalid");
// };
// inputField.addEventListener("blur", addValidation);
// inputField.addEventListener("focus", removeValidation);
const inputRef = document.querySelector("#validation-input");
inputRef.addEventListener("blur", () => {
  const expectedLength = parseInt(inputRef.getAttribute("data-length"));
  const actualLength = inputRef.value.length;
  if (actualLength === expectedLength) {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
  } else {
    inputRef.classList.add("invalid");
    inputRef.classList.remove("valid");
  }
});
