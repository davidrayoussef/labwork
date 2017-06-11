class Animal {
  constructor(name, food, isCarnivore) {
    this.name = name;
    this.food = food;
    this.isCarnivore = isCarnivore;
  }

  eat() {
    console.log(`${this.name} is eating ${this.food}.`);
  }

  move() {
    console.log(`${this.name} is moving.`);
  }
}

class Mammal extends Animal {
  constructor(...args) {
    super(...args);
    this.numLegs = 4;
    console.log(this);
  }
}

class Human extends Mammal {
  constructor(...args) {
    super(...args);
    this.numLegs = 2;
    console.log(this);
  }
}

class Bird extends Animal {
  constructor(...args) {
    super(...args);
    console.log(this);
  }

  move() {
    console.log(`${this.name} is flying.`);
  }
}

class Fish extends Animal {
  constructor(...args) {
    super(...args);
    console.log(this);
  }

  move() {
    console.log(`${this.name} is swimming.`);
  }
}

class Reptile extends Animal {
  constructor(...args) {
    super(...args);
    console.log(this);
  }
}

let dave = new Human('Dave', 'burgers', true);
dave.eat();
dave.move();
dave.numLegs;

let tweety = new Bird('Tweety', 'seeds', true);
tweety.move();

let nemo = new Fish('Nemo', 'plankton', false);
nemo.move();
