// Model the Animal kingdom as a class system, for use in a Virtual Zoo program.
//
// Possible sub-issues: do they know the animal kingdom at all? (I.e. common sense.) What properties and methods do they immediately think are the most important? Do they use abstract classes and/or interfaces to represent shared stuff? How do they handle the multiple-inheritance problem posed by, say, a tomato (fruit or veggie?), a sponge (animal or plant?), or a mule (donkey or horse?)

class Animal {
  constructor(name, food, isLoud, isCarnivore) {
    this.name = name;
    this.food = food;
    this.isLoud = isLoud;
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
    console.log(this);
  }
}

class Bird extends Animal {
  constructor(...args) {
    super(...args);
    console.log(this);
  }

  move() {
    // Handle multiple-inheritance with function overriding.
    console.log(`${this.name} is flying.`);
  }
}

class Fish extends Animal {
  constructor(...args) {
    super(...args);
    console.log(this);
  }

  move() {
    // Handle multiple-inheritance with function overriding.
    console.log(`${this.name} is swimming.`);
  }
}

class Reptile extends Animal {
  constructor(...args) {
    super(...args);
    console.log(this);
  }
}

var dave = new Mammal('Dave', 'burgers', true, true);
dave.eat();
dave.move();

var tweety = new Bird('Tweety', 'seeds', false, true);
tweety.move();

var nemo = new Fish('Nemo', 'plankton', false, false);
nemo.move();