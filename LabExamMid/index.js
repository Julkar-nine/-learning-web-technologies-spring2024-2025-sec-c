const display = document.getElementById("display");

function appendToDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  display.value = eval(display.value);
}

const h1 = document.createElement("h1");
h1.textContent = "Calculator";
document.getElementById("calculator").append(h1);
