// PARTIAL APPLICATION IN ES6

const mapWith = (unaryFn) => (collection) => collection.map(unaryFn);

const square = (n) => n * n;

const partiallyAppliedMapWith = mapWith(square);

var result = partiallyAppliedMapWith([1,2,3]);

console.log(result);

// another way to write partial applicator? using generic names

const mapWith = (unaryFn, collection) => collection.map(unaryFn);

const square = (n) => n * n;

const ____ = (fn, x) => (y) => fn(x,y);

const partiallyAppliedMapWith = ____(mapWith, square);

console.log(partiallyAppliedMapWith([1,2,3]));



// FILL ARRAY WITH 26 LETTERS OF ALPHABET

var alphabetFill = new Array(26).fill().map((_, i) => String.fromCharCode(65 + i));



// MAYBE FUNCTION - DECORATES FUNCTION TO BE NULL SAFE
const maybe = function(fn) {
	return function(input) {
		if(!input) return;
		return fn.call(this, input)
	}
}
const imp1 = input => input.toLowerCase();

imp1(void 0);

const imp2 = maybe(input => input.toLowerCase());

imp2(void 0);



// COMPOSE

const compose = (fn1, fn2) => input => fn1(fn2(input));

const prefix = (i) => 'Some text: ' + i;

const shrink = (i) => i.toLowerCase();

const prefixedAndShrunk = compose(prefix, shrink);

prefixedAndShrunk('DAVID');



// MORE PARTIAL APPLICATION

const partial = (fn, a) => (b) => fn(a, b);

const greet = (greeting, name) => greeting + ', ' + name;

const hello = partial(greet, 'hello');

hello('david');



// DESTRUCTURING

var someArray = [1,2,3];
var [first, second, third] = someArray;



// REST PATTERN

let [head, ...tail] = [1,2,3,4,5];
console.log(tail); // [2,3,4,5];



// DESTRUCTURING OBJECTS

var complicatedObj = {
	arrayProp: [
		'Eddard',
		{ second: 'Stark' }
	]
};
var { arrayProp: [first, { second }] } = complicatedObj;
console.log(first); // 'Eddard'
console.log(second); // 'Stark'



// SPREAD OPERATOR

function foo(x, y, z) {
	console.log(x, y, z);
}
foo( ...[1, 2, 3] ); // 1 2 3



var a = [2, 3, 4];
var b = [1, ...a, 5];
console.log(b) // [1, 2, 3, 4, 5]



// REST OPERATOR AGAIN

function foo(x, y, ...z) {
	console.log(x,y,z);
}

foo(1, 2, 3, 4, 5); // 1 2 [3,4,5]

// if you don't have any named parameters, the ... gathers all arguments

function foo(...allargs) { // over here it gathers the parameters
	console.log(...allargs); // over here it spreads the arguments
}

foo(1, 2, 3, 4, 5); // 1 2 3 4 5



// Array.from() converts an array-like object to a true array

Array.from(new Set([1, 2, 2, 3]));

// Useful when dealing with "NodeList" returned by document.querySelectorAll.

var divs = document.querySelectorAll('div');

Array.from(divs).forEach(node => console.log(node));



// SETS

function uniq(a) {
  var seen = new Set();
  return a.filter(function(x) {
    return !seen.has(x) && seen.add(x);
  });
}



// GENERATORS

var sq = function* (initialValue) {
	var num = initialValue || 2;
	var step = 0;
	var current;
	while(true) {
		current = num * step++;
		yield current;
	}
};

var sequence = sq(20);



// SUBCLASSING IN ES6 VS ES5

class ColorPoint extends Point {
  constructor(x, y, color) {
    super(x, y);
    this.color = color;
  }
  toString() {
    return this.color + ' ' + super.toString();
  }
}

function ColorPoint(x, y, color) {
  Point.call(this, x, y);
  this.color = color;
}
ColorPoint.prototype = Object.create(Point.prototype);
ColorPoint.prototype.constructor = ColorPoint;
ColorPoint.prototype.toString = function() {
  return this.color + ' ' + Point.prototype.toString.call(this);
};
