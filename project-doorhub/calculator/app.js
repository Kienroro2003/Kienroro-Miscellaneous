const buttonsOperator = document.querySelectorAll(".row div:last-child");
const buttonsNumber = document.querySelectorAll(
  ".row:not(:first-child) div:not(:last-child)"
);
console.log(buttonsNumber);
console.log(buttonsOperator);
const total = document.querySelector(".total");
const old = document.querySelector(".old");

let current = "";
let previous = "";
let currentOperator;

buttonsOperator.forEach((button) =>
  button.addEventListener("click", function (e) {
    const operator = e.target.textContent;
    if (operator === "=") {
    } else {
    }
  })
);

buttonsNumber.forEach((button) =>
  button.addEventListener("click", function (e) {
    console.log(e.target.textContent);
  })
);

function calculate(operator) {
  const currentNumber = +current;
  const previousNumber = +previous;
  switch (operator) {
    case "÷": {
      return previousNumber / currentNumber;
    }
    case "-": {
      return previousNumber - currentNumber;
    }
    case "+": {
      return previousNumber + currentNumber;
    }
    case "*": {
      return previousNumber * currentNumber;
    }
  }
}
