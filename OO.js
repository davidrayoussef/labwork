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

// CLASSICAL PATTERN FOR INHERITANCE AND INSTANTIATION

var Person = function(name) {
	this.name = name;
};

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

var john = new Person('John');
var bobby = new Person('Bobby');

var Friend = function(name, friendOf) {
	Person.call(this, name);
	this.friendOf = friendOf;
};

inherits(Friend, Person);

Friend.prototype = {
	sayFriendOf: function() {
		console.log('Hi my name is ' + this.name + ' and my friend is ' + this.friendOf);
	}
};

var justin = new Friend('Justin', 'David');

justin.sayFriendOf();



// PROTOTYPAL PATTERN FOR INHERITANCE AND INSTANTIATION
// OR OLOO (Objects Linked to Other Objects) ?
var human = {
	species: 'human',
	saySpecies: function() {
		console.log(this.species);
	},
	sayName: function() {
		console.log(`my name is ${this.name}`);
	}
};

var musician = Object.create(human);

musician.playInstrument = function() {
	console.log(`Playing... ${this.instrument}`);
}

human.saySpecies();

var david = Object.create(musician);

david.instrument = 'guitar';
david.name = 'david';

david.sayName();
david.playInstrument();



// Adding a create method

var human = {
	species: 'human',
	create: function(values) {
		var instance = Object.create(this);
		Object.keys(values).map(function(key) {
			instance[key] = values[key];
		})
		return instance;
	}
};

var david = human.create({
	name: 'David',
	job: 'FED'
});
var bob = human.create('Bob');

david;

var musician = human.create({
	species: 'musician',
	instrument: 'keyboard',
	playInstrument: function() {
		console.log(`Playing ${this.instrument}`);
	}
});

var funkyDavid = musician.create({ name: 'Funky Dave', instrument: 'Groovy Guitar'});




// New/Modern way being on top.

// The class use is HIGHLY debatable
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

// Still OLOO
// Using fat arrow
let Animal = {
    init: (name) => {
        this.name = name;
        return this;
    },
    walk: () => {
        console.log(this.name + " is walking.");
    }
};

// Same as above, but less ES6-y
var Animal = {
    init: function (name) {
        this.name = name;
        return this;
    },
    walk: function () {
        console.log(this.name + " is walking.");
    }
};

// Without using the this keyword
// Using closure
var Animal = (function (name) {
    var self = {};
    self.name = name || "";
    self.walk = function () {
        return "Walked";
    };
    return self;
});

// Strictly closures, Douglas Crockford way
// Using ES6 destructing, fat arrow, string templates.
function Animal(spec) {
    let {name} = spec;
    let walk = () => {
        console.log(`${name} is walking`);
    };
    return Object.freeze({
        walk
    });
}

// Much better way than Crockfords
function Animal({name} = {}) {
  let walk = () => {
      console.log(`${name} is walking`);
  };
  return Object.freeze({
      walk
  });
}

// Finally the generic Constructor function pattern
function Animal(name) {
  this.name = name;
}

Animal.prototype.walk = function () {
  console.log(this.name + " is walking.");
};


// FROM ES6 OO TUTSPLUS COURSE...

// factory pattern

function createPerson(firstName, lastName) {
  return {
    get firstName() {
      return firstName;
    },
    get lastName() {
      return lastName;
    },
    greet: function(name) {
      return `Hello ${name}, my name is ${fullName}`;
    }
  };

  Object.defineProperty(person, 'fullName', {
    get: function() {
      return `${firstName} ${lastName}`;
    };
  });
}

// var john = createPerson('John', 'Doe');
// var joe = createPerson('Joe', 'Smith');

// parasitic INHERITANCE

function createEmployee(firstName, lastName, position) {
  var person = createPerson(firstName, lastName);
  var personGreet = person.greet;

  Object.defineProperty(person, 'position', {
    get: function() {
      return position;
    }
  });

  person.greet = function(name) {
    return `${personGreet(name)}, ${this.position}`;
  }

  return person;

}

let john = createEmployee('John', 'Doe', 'Manager');
let jim = createEmployee('Jim', 'Smith', 'Sales Person');

console.log(john.greet('Jane'));
console.log(jim.greet('Jane'));


// prototypal INHERITANCE

var obj = {};

obj.__proto__ == Object.prototype;


function Person(firstName) {
  this.firstName = firstName;
}
var dave = new Person('Dave');
console.log(dave.__proto__ == Person.prototype);
console.log(dave.__proto__.__proto__ == Object.prototype);

function Employee(firstName, position) {
  Person.call(this, firstName);
  this.position = position;
}
