const displayPreviousValue = document.querySelector(".previous-value");
const displayActualValue = document.querySelector(".actual-value");
const buttonsNumbers = document.querySelectorAll(".button");
const buttonsOperator = document.querySelectorAll(".operator");
const buttonDelete = document.querySelector(".deleteNumber");

const display = new Display(displayPreviousValue, displayActualValue);

buttonsNumbers.forEach((button) => {
  button.addEventListener("click", () => display.addNumber(button.innerHTML));
});

buttonsOperator.forEach((button) => {
  button.addEventListener("click", () => display.operating(button.value));
});

buttonDelete.addEventListener("click", () => {
  display.delete();
});

/* Limpiar Pantalla */
let numbers = document.querySelector(".numbers");
const btnDeleteDisplay = document.querySelector(".deleteDisplay");
btnDeleteDisplay.addEventListener("click", () => {
  display.deleteAll();
});
