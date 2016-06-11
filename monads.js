function log(x) {
	console.log(x);
}

function log2(y) {
	console.log(y, ': this is the g function');
}

// function IDENTITYMONAD() {
// 	return function unit(value) {
// 		var monad = Object.create(null);
// 		monad.bind = function(func) {
// 			return func(value);
// 		};
// 		return monad;
// 	}
// }

// // refactored to create protoype for each unit value and bind function to take multiple args
function IDENTITYMONAD() {

	var prototype = Object.create(null);

	function unit(value) {
		var monad = Object.create(prototype);
		monad.bind = function(func, args) {
			return func(value, ...args);
		};
		return monad;
	}

	unit.method = function(name, func) {
		prototype[name] = func;
		return unit;
	};

	return unit;

}

//value
var value = 'David';

//unit
var Identity = IDENTITYMONAD();

//monad
var david = Identity(value);

//monad.bind
var logIdentity = david.bind(log);

//unit(value).bind(f) === f(value)
logIdentity === log(david);

//monad.bind(unit) === monad
david.bind(Identity) === david;

//monad.bind(f).bind(g) === monad.bind(function(value){ return f(value).bind(g); }) 
david.bind(log).bind(log2) === david.bind(function(value){ return log(value).bind(log2); }) // THIS ONE DOESN'T WORK


// Refactored to add lift, which can take any function (such as alert), not just one that knows about monads
// Will call bind passing in that function, then take that function's result to pass it to unit 
// so it's guaranteed to be a monad
function AJAXMONAD() {

	var prototype = Object.create(null);

	function unit(value) {
		var monad = Object.create(prototype);
		monad.bind = function(func, args) {
			return func(value, ...args);
		};
		return monad;
	}

	unit.lift = function(name, func) {
		prototype[name] = function(...args) {
			// 'this' is the monad
			return unit(this.bind(func, args));
		}
		return unit;
	};

	return unit;

}

var ajax = AJAXMONAD().lift('helloAlert', alert);

var monad = ajax('Hello world');

monad.helloAlert();


// DO MAYBEMONAD HERE

