function inherits(ctor, superCtor) {
	ctor.super_ = superCtor;
	ctor.prototype = Object.create(superCtor.prototype, {
		constructor: {
			value: ctor,
			enumerable: false,
			writetable: true,
			configurable: true
		}
	});
}

// Classical pattern for inheritance and instantation
function Person(name) {
	this.name = name;
}

Person.prototype = {
	sayName: function() {
		console.log(this.name);
		return this;
	},
	shoutName: function() {
		console.log(('Hi my name is ' + this.name + '!').toUpperCase());
	},
	changeName: function(newName) {
		this.name = newName;
	}
};

let john = new Person('John');
let bobby = new Person('Bobby');

function Friend(name, friendOf) {
	Person.call(this, name);
	this.friendOf = friendOf;
}

inherits(Friend, Person);

Friend.prototype.sayFriendOf = function() {
	console.log('Hi my name is ' + this.name + ' and my friend is ' + this.friendOf);
};

let justin = new Friend('Justin', 'David');

justin.sayFriendOf(); //=> Hi my name is Justin and my friend is David



// OLOO pattern
let human = {
	species: 'human',
	saySpecies: function() {
		console.log(this.species);
	},
	sayName: function() {
		console.log(`My name is ${this.name}`);
	}
};

let musician = Object.create(human);

musician.playInstrument = function() {
	console.log(`Playing... ${this.instrument}`);
}

human.saySpecies(); // "human"

let david = Object.create(musician);

david.instrument = 'guitar';
david.name = 'David';

david.sayName(); //=> "My name is David"
david.playInstrument(); //=> "Playing... guitar"



// Adding a create method
let human = {
	species: 'human',
	create: function(props) {
		let instance = Object.create(this);

		Object.keys(props).map(function(key) {
			instance[key] = props[key];
		});

		return instance;
	}
};

let david = human.create({
	name: 'David',
	job: 'FED'
});

let musician = human.create({
	species: 'musician',
	instrument: 'keyboard',
	playInstrument: function() {
		console.log(`Playing ${this.instrument}`);
	}
});

let funkyDavid = musician.create({
	name: 'Funky Dave',
	instrument: 'Groovy Guitar'}
);

console.log(david); //=> {name: "David", job: "FED"}
console.log(musician); //=> {species: "musician", instrument: "keyboard", playInstrument: function}
console.log(funkyDavid); //=> {name: "Funky Dave", instrument: "Groovy Guitar"}



// Modern pattern
class Animal {
  constructor(name) {
    this.name = name;
  }
  walk() {
    console.log(`${this.name} is walking`);
  }
}

// Kyle Simpson's OLOO style
// Using ES6's shorthand for functions
let Animal = {
  init(name) {
    this.name = name;
    return this;
  },
  walk() {
    console.log(`${this.name} is walking`);
  }
};



// Without using the this keyword
let Animal = (function(name = '') {
  let self = {};
  self.walk = function() {
    return 'Walked';
  };
  return self;
});



// Douglas Crockford style
function Animal({ name } = {}) {
  let walk = () => {
    console.log(`${name} is walking`);
  };
  return Object.freeze({walk});
}



// Factory pattern
function createPerson(firstName, lastName) {
  return {
    get firstName() {
      return firstName;
    },
    get lastName() {
      return lastName;
    },
    greet: function(name) {
      return `Hello ${name}, my name is ${firstName + ' ' + lastName}`;
    }
  };
}

// Parasitic Inheritance
function createEmployee(firstName, lastName, position) {
  let person = createPerson(firstName, lastName);
  let personGreet = person.greet;

  Object.defineProperty(person, 'position', {
    get: function() {
      return position;
    }
  });

	Object.defineProperty(person, 'fullName', {
		get: function() {
			return `${firstName} ${lastName}`;
		}
	});

  person.greet = function(name) {
    return `${personGreet(name)}, ${this.position}`;
  }

  return person;
}

let john = createEmployee('John', 'Doe', 'Manager');
let jim = createEmployee('Jim', 'Smith', 'Sales Person');

john.greet('Jane');
jim.greet('Jane');




// Recreating 'new' keyword...
function Person(saying1, saying2) {
  this.saying1 = saying1;
  this.saying2 = saying2;
}

Person.prototype.talk = function() {
  console.log(this.saying1 + ', ' + this.saying2);
}

function NEW(constructor, ...args) {
  let obj = {};
  Object.setPrototypeOf(obj, constructor.prototype);
  constructor.apply(obj, args);
  return obj;
}

let arnold = NEW(Person, 'It\'s not a tuma', 'I\'ll be back');
arnold.talk();



// Use Object.defineProperty so that changes to instances carry over to other combined properties eg fullName
function NamedOne(first, last) {
  this.firstName = first;
  this.lastName = last;

  Object.defineProperty(this, 'fullName', {
    get() { return this.firstName + ' ' + this.lastName; },
    set(newValue) {
      if ( (/\s/).test(newValue) ) {
        [ this.firstName, this.lastName ] = newValue.split(' ');
      }
    }
  });
}

let named = new NamedOne('John', 'Doh');
named.firstName = 'Jane';
named.fullName = 'New Name';
named.fullName //=> "New Name";



// Es6 setters/getters
class Archiver {
  constructor() {
    this.archive = [];
    this.temp = null;
  }

  get temperature() {
    return this.temp;
  }

  set temperature(temp) {
    this.temp = temp;
    this.archive.push( { date: new Date(), val: temp } );
  }

  getArchive() {
    return this.archive;
  }
}

let arc = new Archiver();
arc.temperature = 33;
arc.temperature = 28;
arc.temperature = 21;
arc.getArchive() // == [{date: 2013-09-24..., val:33},{date: 2013-09-24..., val:28},{date: 2013-09-24..., val:21}
