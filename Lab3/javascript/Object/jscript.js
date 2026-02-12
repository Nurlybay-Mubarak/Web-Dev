const sharedInstance = { id: 1 };

function A() {
  return sharedInstance;
}

function B() {
  return sharedInstance;
}

console.log(new A() === new B()); // true

function Calculator() {
  this.a = 0;
  this.b = 0;
}

Calculator.prototype.read = function () {
  this.a = Number(prompt("Enter first number:", 0));
  this.b = Number(prompt("Enter second number:", 0));
};

Calculator.prototype.sum = function () {
  return this.a + this.b;
};

Calculator.prototype.multiply = function () {
  return this.a * this.b;
};

const calc = new Calculator();
calc.read();

console.log("Sum =", calc.sum());
console.log("Multiply =", calc.multiply());

function Accumulator(initialValue = 0) {
  this.total = initialValue;
}

Accumulator.prototype.add = function () {
  const input = Number(prompt("Add value:", 0));
  if (!isNaN(input)) {
    this.total += input;
  }
};

const acc = new Accumulator(5);

acc.add();
acc.add();

console.log("Final value:", acc.total);

