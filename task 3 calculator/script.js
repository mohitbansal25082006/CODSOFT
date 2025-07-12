// Get display and all buttons
const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

// Initialize expression
let expression = "";

// Function to update display
function updateDisplay(value) {
  expression += value;
  display.value = expression;
}

// Function to evaluate the expression
function calculateResult() {
  try {
    const result = eval(expression);
    display.value = result;
    expression = result.toString();
  } catch {
    display.value = "Error";
    expression = "";
  }
}

// Clear function
function clearDisplay() {
  expression = "";
  display.value = "";
}

// Button click events
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");

    if (button.id === "clear") {
      clearDisplay();
    } else if (button.id === "equals") {
      calculateResult();
    } else if (value) {
      updateDisplay(value);
    }
  });
});

// Keyboard input support
document.addEventListener("keydown", (event) => {
  const key = event.key;

  if (!isNaN(key) || "+-*/.".includes(key)) {
    updateDisplay(key);
  } else if (key === "Enter") {
    event.preventDefault();
    calculateResult();
  } else if (key === "Backspace") {
    expression = expression.slice(0, -1);
    display.value = expression;
  } else if (key.toLowerCase() === "c") {
    clearDisplay();
  }
});
