function add(inputOne, inputTwo) {
  return inputOne + inputTwo;
}
function subtract(inputOne, inputTwo) {
  return inputOne - inputTwo;
}
function multiply(inputOne, inputTwo) {
  return inputOne * inputTwo;
}
function divide(inputOne, inputTwo) {
  if (inputTwo === 0) {
    return "Cannot divide by 0";
  } else {
    return inputOne / inputTwo;
  }
}

function operate(inputOne, operator, inputTwo) {
  if (operator === "+") {
    return add(inputOne, inputTwo);
  } else if (operator === "-") {
    return subtract(inputOne, inputTwo);
  } else if (operator === "*") {
    return multiply(inputOne, inputTwo);
  } else if (operator === "/") {
    return divide(inputOne, inputTwo);
  }
}

const enter = document.querySelector(".enter");
const display = document.querySelector(".screen");
const clear = document.querySelector(".esc");
const backSpace = document.querySelector(".backspace");
const numLock = document.querySelector(".numLock");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");

clear.addEventListener("click", () => {
  display.textContent = "";
});

numbers.forEach((button) => {
  button.addEventListener("click", () => {
    if (isNumLockOn === false) {
      display.textContent += button.textContent;
    }
  });
});

backSpace.addEventListener("click", () => {
  old = display.textContent;
  display.textContent = old.slice(0, -1);
});

//what i want is whenever user tries to add operator for the second time the firt two values with operator runs

operators.forEach((button) => {
  button.addEventListener("click", () => {
    if (isNumLockOn === false) {
      const lastChar = display.textContent[display.textContent.length - 1];
      console.log(lastChar);
      if (!["/", "+", "-", "*"].includes(lastChar)) {
        display.textContent += button.textContent;
        const displayInput = display.textContent.split(/([+\-*/])/);
        console.log(displayInput);
        const firstValue = displayInput[0];
        const secondValue = displayInput[1];
        const thirdValue = displayInput[2];
        if (thirdValue) {
          const result = operate(
            Number(firstValue),
            secondValue,
            Number(thirdValue)
          );
          display.textContent = result;
          display.textContent += button.textContent;
        }
      }
    }
  });
});

enter.addEventListener("click", () => {
  if (isNumLockOn === false) {
    const displayInput = display.textContent.split(/([+\-*/])/);
    console.log(displayInput); // for debugging
    const firstValue = Number(displayInput[0]);
    const operator = displayInput[1];
    const secondValue = Number(displayInput[2]);

    if (isNaN(firstValue) || isNaN(secondValue) || !operator) {
      display.textContent = "Error";
      return;
    }
    const result = operate(firstValue, operator, secondValue);
    console.log(result);
    display.textContent = result;
  }
});

function addOperator(input) {
  if (isNumLockOn === false) {
    const lastChar = display.textContent[display.textContent.length - 1];
    console.log(lastChar);
    if (!["/", "+", "-", "*"].includes(lastChar)) {
      display.textContent += input;
      const displayInput = display.textContent.split(/([+\-*/])/);
      console.log(displayInput);
      const firstValue = displayInput[0];
      const secondValue = displayInput[1];
      const thirdValue = displayInput[2];
      if (thirdValue) {
        const result = operate(
          Number(firstValue),
          secondValue,
          Number(thirdValue)
        );
        display.textContent = result;
        display.textContent += input;
      }
    }
  }
}

document.addEventListener("keydown", (event) => {
  keys = event.key;
  if (keys === "+") {
    addOperator("+");
  } else if (keys === "-") {
    addOperator("-");
  } else if (keys === "/") {
    addOperator("/");
  } else if (keys === "*") {
    addOperator("*");
  } else if (keys === "Backspace") {
    backSpace.click();
  } else if (keys === "Escape") {
    clear.click();
  } else if (keys === "9") {
    addNumber(keys);
  } else if (keys === "8") {
    addNumber(keys);
  } else if (keys === "7") {
    addNumber(keys);
  } else if (keys === "6") {
    addNumber(keys);
  } else if (keys === "5") {
    addNumber(keys);
  } else if (keys === "4") {
    addNumber(keys);
  } else if (keys === "3") {
    addNumber(keys);
  } else if (keys === "2") {
    addNumber(keys);
  } else if (keys === "1") {
    addNumber(keys);
  } else if (keys === "0") {
    addNumber(keys);
  } else if (keys === "Enter") {
    enter.click();
  } else if (keys === ".") {
    addNumber(keys);
  }
});

function addNumber(input) {
  if (isNumLockOn === false) {
    display.textContent += input;
  }
}

let isNumLockOn = false;

const numLocks = document.querySelector(".numLock");

numLocks.addEventListener("click", () => {
  isNumLockOn = !isNumLockOn; // Toggle Num Lock state
  numLock.textContent = `num lock ${isNumLockOn ? "ON" : "OFF"}`;
});
