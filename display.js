class Display {
  constructor(displayPreviousValue, displayActualValue) {
    this.displayActualValue = displayActualValue;
    this.displayPreviousValue = displayPreviousValue;
    this.calculadora = new Calculadora();
    this.typeOperation = undefined;
    this.actualValue = "";
    this.previousValue = "";
    this.signs = {
      sum: "+",
      res: "-",
      mul: "*",
      div: "/",
    };
  }

  delete() {
    this.actualValue = this.actualValue.toString().slice(0, -1);
    this.printValue();
  }

  deleteAll() {
    this.actualValue = "";
    this.previousValue = "";
    this.typeOperation = undefined;
    this.printValue();
  }

  operating(type) {
    this.typeOperation !== "igual" && this.calculate();
    this.typeOperation = type;
    this.previousValue = this.actualValue || this.previousValue;
    this.actualValue = "";
    this.printValue();
  }

  addNumber(number) {
    if (number === "." && this.actualValue.includes(".")) return;
    this.actualValue = this.actualValue.toString() + number.toString();
    this.printValue();
  }

  printValue() {
    this.displayActualValue.textContent = this.actualValue;
    this.displayPreviousValue.textContent = `${this.previousValue} 
    ${this.signs[this.typeOperation] || ""}`;
  }

  calculate() {
    const previousValue = parseFloat(this.previousValue);
    const actualValue = parseFloat(this.actualValue);

    if (isNaN(actualValue) || isNaN(previousValue)) return;
    this.actualValue = this.calculadora[this.typeOperation](
      previousValue,
      actualValue
    );
  }
}
