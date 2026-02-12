function makeUser() {
  return {
    name: "John",
    ref() {
      return this;
    }
  };
}

const user = makeUser();

console.log(user.ref().name); // John


const calculator = {
  a: 0,
  b: 0,

  read() {
    this.a = Number(prompt("a?", 0));
    this.b = Number(prompt("b?", 0));
  },

  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  }
};

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());


const ladder = {
  step: 0,

  up() {
    this.step++;
    return this;
  },

  down() {
    this.step--;
    return this;
  },

  showStep() {
    console.log(this.step);
    return this;
  }
};

// chaining
ladder.up().up().down().showStep(); // 1
