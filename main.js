/* Limpiar Pantalla */
let numbers = document.querySelector(".numbers");
const btnDeleteDisplay = document.querySelector(".deleteDisplay");
btnDeleteDisplay.addEventListener("click", () => {
  numbers.value = "";
});

/* Recorrer botones y el punto*/
document.querySelectorAll(".button").forEach((e) => {
  e.addEventListener("click", showNumber, false);
});

/* Mostrar Numeros Pulsados En Pantalla */
function showNumber() {
  let btnValue = this.value;
  numbers.value += btnValue;
}
