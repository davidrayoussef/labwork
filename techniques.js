
// Checks if a string ends in a substring, using the RegExp Constructor
function solution(str, ending) {
  return new RegExp(ending + '$').test(str);
}
solution('abc', 'bc')



function reject(array, iterator) {
  return array.filter(function(element) {
    return !iterator(element);
  })
}
var numArray = [1, 2, 3, 4, 5, 6];
var isOdd = function(num) { return num % 2 == 0; };
var odds = reject(numArray, isOdd);
console.log(odds); //=> [1, 3, 5]



// Returns missing number by subtracting the sum of numbers in
// order in the complete set of numbers
function getMissingNumber(arr) {
  return 45 - arr.reduce(function(a, b) {
    return a + b;
  })
}
var arr = [0,1,2,4,5,6,7,8,9];

getMissingNumber(arr); //=> 3



function missingElement(A) {
  return A.sort(function(a,b){
      return b < a;
  }).filter(function(v,i){
      return v !== i+1;
  }).shift() - 1;
}
function missingNumber(arr) {
  return arr.filter(function(v,i,a){
    return (i+1) != v;
  }).slice(0,1).pop() - 1;
}

missingNumber([1,2,3,4,5,6,8,9,10])



function sortList(sortBy, list) {
  return list.sort(function(a, b) {
    return b[sortBy] < a[sortBy];
  });
}

var list = [
  { key1: 1, key2: 3 },
  { key1: 3, key2: 2 },
  { key1: 2, key2: 40 },
  { key1: 4, key2: 12 }
];
// Sorts objects ascending by key2
sortList('key2', list);



function elapsedSeconds(startDate, endDate){
  var startTime = startDate.getTime();
  var endTime = endDate.getTime();
  var timeDiff = endTime - startTime;
  timeDiff /= 1000;
  return Math.round(timeDiff);
}



function isLeapYear(year) {
  if (year % 400 == 0) {
    return true;
  }
  else if (year % 100 == 0) {
    return false;
  }
  else if (year % 4 == 0) {
    return true;
  }
  else return false;
}

isLeapYear(400);



// Search names that end with underscore
function searchNames(logins) {
  return logins.filter(function(element, index, array) {
    return element[0].match(/\_$/g);
  }, 0);
}

var logins = [ [ "foo", "foo@foo.com" ], [ "bar_", "bar@bar.com" ], [ "bar_bar", "bar@bar.com" ] ];

searchNames(logins);



// RECURSIVE REPEAT

function recursiveRepeat(n, str) {
  return n < 1 ? str : str + recursiveRepeat(n-1, str);
}
recursiveRepeat(8, 'nana-') + ' Batman!';



// Find min value in array
function minInArray(arr) {
  return Math.min.apply(Math, arr);
}
var numArray = [4,5,6,7,1,9,8];
minInArray(numArray); //=> 1



function range(start, count) {
  return Array.apply(null, Array(count)).map(function(value, index) {
    return start + index;
  });
}

range(0,100)



// Return an object's key and value pairs as a string or array

function keysAndValues(obj){
  return Object.keys(obj)
    .map(function(key) { return key + ' = ' + obj[key] })
    .join(', ');
}

var data = {
  key1: 'value1',
  key2: 'value2',
  key3: 'value3'
}

keysAndValues(data); //=> key1 = value1, key2 = value2, key3 = value3



var nextNumDays = function(date, num){
  return Array.apply(null, Array(num)).map(function(){
    date.setDate(date.getDate() + 1);
    return (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
  }).join(', ');
}

nextNumDays(new Date(), 5);



function digitize(n) {
  return String(n).split('').map(Number);
}
digitize(123);



// Return number of differences between two strings
function hamming(a,b) {
  return a
    .split('')
    .filter(function(v,i) {
      return a[i] !== b[i];
    })
    .length;
}
hamming('I like turtles', 'I like turkeys'); //=> 3



// Return last item whether array or args
function last(list) {
  return arguments.length > 1 ? arguments[arguments.length-1] : list[list.length-1]
}



function autocomplete(input, dictionary){
  var letters = /[^a-zA-Z]/g;
  var input = input.replace(letters, '').toLowerCase();
  return dictionary.filter(function(x) {
    return input == x.substr(0 ,input.length).toLowerCase();
  }).slice(0,5);
}

autocomplete('ai', ['airplane', 'airport', 'apple', 'ball', 'aisle', 'airbender', 'ails', 'aids', 'air']);



// Must have 10 #s, each # multiplied by position (index + 1) then added together modulo 11 must equal 0. Last # may be 'X' which equals 10
function validISBN10(isbn) {
  return isbn.length == 10 ?
    isbn
      .split('')
      .map(function(v, i) {
        return i + 1 == 10 && v == 'X' ? 10 * (i + 1) : v * (i + 1);
      })
      .reduce(function(a,b) {
        return a + b;
      }) % 11 == 0 : false;
}


validISBN10('1112223339')



// Memoize a function with more than one arg
function cache(func) {
  var cacheObj = {};
  return function() {
    var key = JSON.stringify(Array.prototype.slice.call(arguments));
    return key in cacheObj ? cacheObj[key] : cacheObj[key] = func.apply(this, arguments);
  }
}


var complexFunction = function(arg1, arg2) { return arg1 + arg2 };

var cachedFunction = cache(complexFunction);

cachedFunction('foo', 'bar');



function mapWith(fn) {
  return function(list) {
    return Array.prototype.map.call(list, function(v) {
      return fn.call(this, v);
    });
  }
}



var Singleton = function(){
  if (Singleton.instance) {
    return Singleton.instance;
  }
  if (!(this instanceof Singleton)) {
    return new Singleton();
  }
  Singleton.instance = this;
}



// Replace 'you' string with 'your sister'
function autocorrect(input){
  return input.replace(/\b(you+|u)\b/gi, 'your sister');
}



// Return largest n numbers from array
function largest(n,xs){
  return n===0 ? [] : xs.sort(function(a,b) {
    return a - b;
  }).slice(-n);
}

largest(2, [7,6,5,4,3,2,1]); //=> [6, 7]



function ipToNum(ip) {
  return parseInt(ip.split('.').map(function(x) {
    return '00000000'.concat(parseInt(x).toString(2)).slice(-8);
  }).join(''), 2);
}

function numToIp(number) {
  var ip=number%256;
  for (var i=1;i<=3;i++) {
    number=Math.floor(number/256);
    ip=number%256+'.'+ip;
  }
  return ip;
}



function rgbToHex(r, g, b){
  if (r <= 0) r = '00';
  else if (r > 255) r = 'FF';
  if (g <= 0) g = '00';
  else if (g > 255) g = 'FF';
  if (b <= 0) b = '00';
  else if (b > 255) b = 'FF';
  return (r.toString(16) + g.toString(16) + b.toString(16)).toUpperCase();
}

rgbToHex(255, 255, 255);



String.prototype.removeChars = function(character) {
  var regex = new RegExp(character, 'g');
  return this.replace(regex, '');
};

'Thisy isy a stringy with too many whyyyys'.removeChars('y');



// Write an arithmetic list which is basically a list that contains consecutive terms in the sequence.
// You will be given three parameters :

// first, the first term in the sequence
// c, the constant that you are going to ADD ( since it is an arithmetic sequence...)
// l, the number of terms that should be returned


var seqlist = function(first,c,l){
  var arr = [];
  if(c<0) {
    for (var i = first; i > l*c+first; i+=c) {
      console.log(i);
      arr.push(i);
    }
  }
  else {
    for (var i = first; i < l*c+first; i+=c) {
      arr.push(i);
    }
  }
  return arr;
}
seqlist(6,3,5); //=> [6, 9, 12, 15, 18]

// ORRRRR

var seqlist = function(f,c,l){
  return Array.apply(null, new Array(l)).map(function(a,i){
   return f + i * c;
  });
}



// RETURNS NUMBER OF POWER SETS
function powerset(list) {
    var count = 1;
    for (var i = 0; i < list.length; i++) {
         count *= 2;
    }
    return count;
}

// ORRRRRRRRRRRRRR

function powerset(list) {
  return Math.pow(2, list.length);
}



// RETURNS POWERSET COMBINATIONS
function power(s) {
  var ps = [[]];
  for (var i = 0; i < s.length; i++) {
    for (var j = 0, len = ps.length; j < len; j++) {
        ps.push(ps[j].concat(s[i]));
    }
  }
  return ps;
}
power([1,2,3]);

//ORRRR ///ALSO USE FOR DOUBLE LOOPS

function power(s) {
  var power = [[]];
  s.forEach(function(element) {
    power.forEach(function(part) {
      power.push(part.concat(element));
    });
  });
  return power;
}



function toWeirdCase(string){
  return string.split(' ').map(function(word){
    return word.split('').map(function(letter, index){
      return index % 2 == 0 ? letter.toUpperCase() : letter.toLowerCase()
    }).join('');
  }).join(' ');
}
toWeirdCase( "Weird string case" );
toWeirdCase( "String" ); // "StRiNg"



// Returns array with zeroes moved to the right and other values untouched
var moveZeros = function(arr) {
  return arr.filter(function(v) {
    return v !== 0;
  }).concat(arr.filter(function(x) {
    return x === 0;
  }));
}

moveZeros([false,1,0,1,2,0,1,3,"a"])



function isValidIP(str) {
  return str.split('.').filter(function(v) {
    return v.match(' ') ? false : (v<256);
  }).length == 4;
}

isValidIP('0.0.0.0')

// ORRR

function isValidIP(str) {
  return /^(([1-9]?\d|1\d\d|2[0-4]\d|25[0-5])(\.(?!$)|$)){4}$/.test(str);
}



function minimumSum(values, n) {
  return values.sort(function(a,b) {
    return a-b;
  }).slice(0, n).reduce(function(a,b) {
    return a+b;
  },0)
}

function maximumSum(values, n) {
  return values.sort(function(a,b) {
    return b-a;
  }).slice(0, n).reduce(function(a,b) {
    return a+b;
  },0)
}

var values = [5, 4, 3, 2, 1];

minimumSum(values, 2);



function isIntArray(arr) {
  return Array.isArray(arr) ? arr.every(function(x) {
    return x == null ? false : Math.floor(x) === x;
  }, 0) : false;
}



function createSecretHolder(secret) {

  var holder = secret;

  return {
    getSecret: function() {
      return holder;
    },
    setSecret: function(secret) {
      holder = secret;
    }
  }
}



function abbreviate(string) {
  return string.split(' ').map(function(str) {
    return str.split('-').map(function(s) {
      return s.length > 3 ? s.slice(0,1) + (s.length-2) + s.slice(-1) : s;
    }).join('-')
  }).join(' ');
}

abbreviate('balloon monolithic a mat')



function highestRank(arr){

  var counts = {}, max = 0, result;

  for (var v in arr) {
    counts[arr[v]] = (counts[arr[v]] || 0) + 1;
    if (counts[arr[v]] > max) {
      max = counts[arr[v]];
      result = arr[v];
    }
  }
  return result;
}

arr = [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10];
highestRank(arr)


// OORRRR A SOLUTION WITH OBJECT.KEYS INSTEAD

function highestRank(arr){
  var obj = {};
  arr.forEach(function(elem){
     if(obj[elem] === undefined)
       obj[elem] = 0;
     obj[elem]++;
  });
  var keys = Object.keys(obj), highest = 0, key;
  keys.forEach(function(elem){
     if(obj[elem] >= highest) {
        highest = obj[elem];
        key = elem;
     }
  })
  return parseInt(key);
}



// CHECK IF SENTENCES WITH FULL PUNCTUATION AND SPACES ARE PALINDROMES WITHOUT USING REVERSE
function palindrome(string) {
  string = string.replace(/[^a-zA-Z]/gi, '').toLowerCase();

  var reversedString = '';

  for (var i = string.length-1; i >= 0; i--) {
    reversedString = reversedString + string[i];
  }

  return string === reversedString;
}


palindrome("A man, a plan, a canal: Panama");


// ORRRRR YOU CAN USE REDUCE TO REVERSE

function palindrome(string) {
  var s = string.toLowerCase().replace(/[^a-z0-9]+/g, '');
  return s == s.split('').reduce(function(str, value) {
    return value + str;
  }, '');
}


// RECURSIVE ISPALINDROME CHECK

function isPalindrome(text) {
  if (text.length <= 1) return true;
  if (text.charAt(0) != text.charAt(text.length - 1)) return false;
  console.log(text.substr(1,text.length - 2));
  return isPalindrome(text.substr(1,text.length - 2));
}

isPalindrome('deleveled')



function wordCount(text) {
  return text.match(/\w+/g).length;
}
wordCount('one two three words');



// BUILD OBJECT OUT OF ARRAY

var obj = arr.reduce(function(newObj, item) {
  newObj[item] = item;
  return newObj;
}, {});




// IF TWO NUMBERS IN ARRAY EQUAL TARGET, RETURN INDICES OF THE TWO NUMBERS

function twoSum(numbers, target) {
  for (var i=0;i<numbers.length;++i)
    for (var j=i+1;j<numbers.length;++j)
      if (numbers[i]+numbers[j]===target)
        return [i,j];
}
twoSum([1234,5678,9012], 14690)



// EDIT FUNCTION.PROTOTYPE.BIND TO ALLOW REBINDING

Function.prototype.bind = function (ctx) {
	var rebind = function() {
		return rebind.original.call(ctx);
	}
	console.log('this.orginal is: ' + this.original + ' and this is: ' + this)
	rebind.original = this.original || this;

	return rebind;
};


var func = function () {
	return this.prop;
};
var obj1 = {prop: 1},
		obj2 = {prop: 2};

func = func.bind(obj1);
func = func.bind(obj2);



// REMOVE REPEATING CHARACTERS IN A STRING IF NUMBER OF REPEATS IS MORE THAN INPUT NUMBER
function removeConsecutive(string, num) {
  var str = string.split(''),
      newString = '';

  for (var i = 0; i < str.length; i++, num--) {
    if((str[i]==str[i+1]) && num>1) {
      newString+=string[i];
      num--;
      i++;
    }
    else {
      newString+=string[i];
      num--;
    }
  }
  return newString;
}

removeConsecutive("aabbaa", 1)




function romanToArabic(roman) {
  var token = /[MDLV]|C[MD]?|X[CL]?|I[XV]?/g,
      key = { M:1000, CM:900, D:500, CD:400, C:100, XC:90, L:50, XL:40, X:10, IX:9, V:5, IV:4, I:1},
      val = 0,
      arr = [];
  while (arr = token.exec(roman)) {
    val += key[arr[0]];
  }
  return val;
}

romanToArabic('XXI');



// remove random divs from page every half second
setInterval(function() {
  var divs = document.getElementsByTagName('div');
  var randomDiv = divs[Math.floor(Math.random() * divs.length)];
  console.log(randomDiv)
  randomDiv.parentNode.removeChild(randomDiv);
}, 500);


// remove random divs from page on clicks

document.addEventListener('click', function(evt) {
  var divs = document.getElementsByTagName('div');
  var randomDiv = divs[Math.floor(Math.random() * divs.length)];
  console.log(randomDiv)
  randomDiv.parentNode.removeChild(randomDiv);
});


// OBSERVER PATTERN
function observe() {

  var subscribers {};

  function subscribe(type, fn) {
    if(!subscribers[type]) {
      subscribers[type] = [];
    }

    if(subscribers[type].indexOf(fn) == -1) {
        subscribers.push(fn);
    }
  }

  function unsubscribe(type, fn) {
    var listeners = subscribers[type];

    if(!listeners) {
        return;
    }

    var index = listeners.indexOf(fn);

    if(index > -1) {
        listeners.splice(index, 1)
    }
  }

  function publish(type, evtObj) {
    if(!subscribers[type]) {
        return;
    }

    if(!evtObj.type) {
        evtObj.type = type;
    }

    var listeners = subscribers[type];

    for(var ii = 0, ll = listeners.length; ii < ll; ii++) {
      listeners[ii](evtObj);
    }
  }

  return {
    subscribe: subscribe,
    unsubscribe: unsubscribe,
    publish: publish
  };
}


// DISPLAY EVENTS BEGINNING WITH 'ON' IN THE WINDOW OBJECT

function showEventListeners() {
	return Object.keys(window).map(function(v) {
		return /^on/.test(v) ? v + ', ' : null;
	}).join('');
}

showEventListeners();



function typing(param){
  var typ = typeof param
  switch (typ) {
    case 'undefined':
      return 'undefined'
    case 'function':
      return 'function=' + param
    default:
      return typ + '=' + JSON.stringify(param)
  }
}



// RETURN MAX NUM IN ARRAY OR MAX NUM OF EACH PROP IN OBJECTS

function max(data, accessor) {
  return accessor ? Math.max.apply(null, data.map(accessor)) :
    Math.max.apply(null, data);
}

var fruit = [{apples:2, bananas: 3}, {apples:15, bananas: 12}, {apples:4, bananas: 7}];

max(fruit, function(d) { return d.bananas; });


// ORRRRRRRR

function max(data, accessor) {
  return Math.max.apply(null, data.map(accessor || Object));
}



// FUNCTIONAL PROGRAMMING RETURNING FUNCTIONS PRACTICE (HIGHER ORDER FUNCTIONS)

function splat(str) {
  return function(fun) {
    return function(array) {
      return str + fun.apply(this, array);
    }
  }
}

var addString = splat('The answer is: ');

var addArrayElements = addString(function(x,y) { return x + y; });

addArrayElements([1,2]); // "The answer is: 3"



function assert(outcome, description) {
  var result = {};
  result.outcome = outcome ? 'PASS' : 'FAIL';
  result.description = description;
  console.log(result.outcome + ' : ' + result.description)
  if(result.outcome=='FAIL') {
      throw new Error('FAIL');
  }
}

function add(num1, num2) {
  return num1 + num2;
}

var result = add(5, 20);

assert(result==24, 'checking the add function')

assert(eval("5 + 5") === 10, "5 and 5 is 10");



function divisors(num) {
  var res = [];

  for (var i = 2; i < num - 1; i++) {
    if (num % i == 0) res.push(i);
  }

  return res.length ? res : num + ' is prime';
}



// RECURSIVE REVERSE STRING
function reverse(str) {
  return str.length <= 1 ? str : reverse(str.substr(1)) + str.charAt(0);
}

reverse("hello world")



function cycle(direction, array, current) {
  if(arr.indexOf(cur) == -1) return null;

  var index = arr.indexOf(cur);

  if(index==0 && dir < 0) {
    return arr[arr.length-1];
  }
  else if(cur==arr[arr.length-1] && dir > 0) {
    return arr[0]
  }
  else return dir > 0 ? arr[index + dir] : arr[index - Math.abs(dir)];
}

cycle(1, [1,2,3], 3)

//ORRRR

function cycle(dir, arr, cur) {
  var len = arr.length,
      idx = arr.indexOf(cur);
  return ~idx ? arr[(idx + dir + len) % len] : null
}




// REAL WORLD APPLICATION OF CURRY USED IN SERVICE

function NotificationService() {

  function showMessage(type, message) {
    alert(type + ': ' + message);
  }

  function createShowMessageFunction(type) {
    return function(message) {
      showMessage(type, message);
    }
  }

  return {
    showConfirm: createShowMessageFunction('confirm'),
    showWarning: createShowMessageFunction('warning'),
    showError: createShowMessageFunction('error')
  }
}

var notification = new NotificationService();

notification.showWarning('This becomes a warning message');



// wraps returned function, creates closure, stores private data

var setup = function() {
	var count = 0;

	return function() {
		return count++;
	};
};

var next = setup();

next(); // 1
next(); // 2



// Use reduce to do tally with hash map
function wordCount(str) {
  return str.split(/[^\w']+/).reduce(function(hash, word){
    hash[word] ? hash[word]++ : hash[word] = 1;
    return hash;
  }, {});
}

var words = "You've recently taken an internship at an up and coming lingustic and natural language centre. Unfortunately, as with real life, the professors have allocated you the mundane task of counting every single word in a book and finding out how many occurences of each word there are. To them, this task would take hours but they are unaware of your programming background (They really didn't assess the candidates much). Impress them with that word count by the end of the day and you're surely in for more smooth sailing."


console.log(JSON.stringify(wordCount(words), null, 2));



// CURRYING
function curry(func, first) {
	return function(second) {
		return func(first, second);
	}
}



// USE IMMEDIATE FUNCTION CLOSURES INSTEAD OF WITH STATEMENTS

Object.extend(String.prototype.escapeHTML, {
  div:  document.createElement('div'),
  text: document.createTextNode('')
});

(function(s) {
  s.div.appendChild(s.text);
})(String.prototype.escapeHTML);



function powerOf4(n) {
  return typeof n == 'number' && n > 0 ? (n % 4) === 0 : false;
}

powerOf4(0);

// ORRRR
function powerOf4(n) {
   return !(Math.sqrt(n, 4) % 1) && n > 1;
}



var typer = (function() {

  return {
    isNumber: function(x) {
      return typeof x == 'number' && !isNaN(x) || x instanceof Number && !isNaN(x);
    },
    isString: function(x) {
      return typeof x == 'string' || x instanceof String;
    },
    isArray: function(x) {
      return Array.isArray(x);
    },
    isFunction: function(x) {
      return typeof x == 'function';
    },
    isDate: function(x) {
      return x instanceof Date;
    },
    isRegExp: function(x) {
      return x instanceof RegExp;
    },
    isBoolean: function(x) {
      return typeof x == 'boolean' || x instanceof Boolean;
    },
    isError: function(x) {
      return x instanceof Error;
    },
    isNull: function(x) {
      return x == null;
    },
    isUndefined: function(x) {
      return typeof x == 'undefined';
    }
  };
})();



// A SUM FUNCTION THAT RETURNS THE RESULT FOR sum(a,b) OR sum(a)(b)
function sum(a,b) {
  return arguments.length > 1 ? a + b :
    function(c) {
      return a + c;
    }
}
sum(2,3);



// Given an array of scores, return the array of ranks for each value in the array.

function ranks(a) {
  var ranks = {};
  a.map(function(v) {
    if(ranks[v] == undefined) { ranks[v] = 0; }
    ranks[v]++;
  })
  return ranks;
}
ranks([3,3,3,3,3,5,1])



// Use filter array method on string

var original = 'There is 1 number.';

var updated = [].filter.call(original, function(v) {
  return v.match(/1/);
}).join('');

updated;



// FUNCTION THAT CALLS TWO FUNCTIONS ON AN ARRAY AND RETURNS THE RESULTS
function findMin(arr) {
  var min = arr[0];
  arr.map(function(v) { if(v < min) min = v; });
  return min;
}

function findMax(arr) {
  var max = arr[0];
  arr.map(function(v) { if(v > max) max = v; });
  return max;
}

function doThisDoThat(fn1, fn2) {
  return function(arr) {
    return [fn1(arr), fn2(arr)];
  }
}

var minAndMax = doThisDoThat(findMin, findMax);

minAndMax([555,66,7,345,23,45,67]);



// Alternative to switch statement
function doAction(action) {
  var actions = {
    'hack': function () {
      return 'hack';
    },

    'slash': function () {
      return 'slash';
    },

    'run': function () {
      return 'run';
    }
  };

  if (typeof actions[action] !== 'function') {
    throw new Error('Invalid action.');
  }

  return actions[action]();
}



// TEMPLATING ENGINE TO REPLACE EXPRESSIONS WITH VALUES
function merge(content, values) {
  return Object.keys(values).map(function(key){
    return content.replace('{{' + key + '}}', values[key]);
  });
}

var mailValues = {};

mailValues.firstName = "Janet";

var emailTemplate = "Hi {{firstName}}! Thanks for completing this code challenge :)";

var mergedContent = merge(emailTemplate, mailValues);



function fizzBuzzShort() {
  for(i = 0; i < 100;)console.log((++i%3?'':'Fizz')+(i%5?'':'Buzz')||i);
}
fizzBuzzShort();



function christmasTree(height) {
  var tree = '';

  for (var i = height; i > 0; i--) {
    tree = repeat(height - i, ' ') + repeat(i * 2 - 1, '*') + repeat(height - i, ' ') + newLine(i) + tree;
  }

  function repeat(count, el) {
    return new Array(count + 1).join(el);
  }

  function newLine(line) {
    return line == height ? '' : '\n';
  }
  console.log(tree);
}

christmasTree(3)



function triangleLeft(n) {
  var str = '';
  for (var row = 1; row <= n; row++) {
    for (var character = 1; character <= row; character++) {
      str += '*';
    }
    str += '\n';
  }
  console.log(str);
}
triangleLeft(5);



function triangleRight(n) {
  var str = '';
  for (var i = 1; i <= n; i++) {
    for (var j = 1; j <= n; j++) {
      if (i + j > n) {
        str += '#';
      } else str += ' ';
    }
    str += '\n';
  }
  console.log(str);
}
triangleRight(5);



function diamond(n) {
  var str = '';
  for (var topRows = 1; topRows < n; topRows += 2) {
    for (var space = 0; space < (n-1) - topRows / 2; space++) {
      str += ' ';
    }
    for (var character = 0; character < topRows; character++) {
      str += '*';
    }
    str += '\n';
  }
  for (var bottomRows = (n+1); bottomRows > 0; bottomRows -= 2) {
    for (var space = 0; space < (n-1) - bottomRows / 2; space++) {
      str += ' ';
    }
    for (var character = 0; character < bottomRows; character++) {
      str += '*';
    }
    str += '\n';
  }
  console.log(str);
}

diamond(10);


// Alternative: Building top, then reversing it to construct bottom
function diamond(n) {
  if (n < 3 || n % 2 === 0) return null;
  var str = '';

  for (var i = 1; i <= n; i += 2) {
    for (var space = 0; space < (n - i) / 2; space++ ) {
      str += ' ';
    }
    for (var star = 0; star < i; star++) {
      str += '*';
    }
    str += i === n ? '' : '\n';
  }

  var reverseStr = str.split('\n').reverse().slice(1).join('\n');

  return str + '\n' + reverseStr + '\n';
}



function fibEvensSum() {
  var n = 1;
  var m = 2;
  var temp;
  var fibs = [];

  while(m < 4000000) {
    temp = n;
    n = m;
    m = temp+m;
    console.log('n is: ' + n);
    console.log('m is: ' + m);
    fibs.push(n);
  }

  function onlyEvens(arr) {
    return arr.filter(function(v) {
      return v % 2 == 0;
    });
  }

  function sumOfArray(arr) {
    return arr.reduce(function(a,b) {
      return a + b;
    });
  }
  var evenNumbers = onlyEvens(fibs);
  console.log(evenNumbers);
};

fibEvensSum();



// A benchmark runner for for-loops vs while-loops vs map

var ol;

function runBenchmark(name, test) {
  if(!ol) {
    ol = document.createElement('ol');
    document.body.appendChild(ol);
  }

  setTimeout(function() {
    var start = new Date().getTime();
    test();
    var total = new Date().getTime() - start;

    var li = document.createElement('li');
    li.innerHTML = name + ': ' + total + 'ms';
    ol.appendChild(li);
  }, 15);
}

var array = function populateArray() {
  var loopLength = 500000;
  var array = [];
  for (var i = 0; i < loopLength; i++) {
    array[i] = 'item' + i;
  }
  return array;
}();

var loopPerfTests = {
  forLoop: function() {
    for(var i = 0, item; i < array.length; i++) {
      item = array[i];
    }
  },
  arrayMap: function() {
    var item;
    array.map(function(v) {
      item = v;
    });
  },
  forLoopCachedLength: function() {
    for (var i = 0, l = array.length, item; i < l; i++) {
      item = array[i];
    }
  },
  forLoopDirectAccess: function() {
    for (var i = 0, item; (item = array[i]); i++) {
    }
  },
  whileLoop: function() {
    var i = 0, item;

    while (i < array.length) {
      item = array[i];
      i++;
    }
  },
  whileLoopCachedLength: function() {
    var i = 0, l = array.length, item;

    while(i < l) {
      item = array[i];
      i++;
    }
  },
  reversedWhileLoop: function() {
    var l = array.length, item;

    while(l--) {
      item = array[l];
    }
  },
  doubleReversedWhileLoop: function() {
    var l = array.length, i = 1, item;

    while(i--) {
      item = array[l - i - 1];
    }
  }
};

runBenchmark('for loop', loopPerfTests.forLoop);
runBenchmark('array map', loopPerfTests.arrayMap);
runBenchmark('for loop cached length', loopPerfTests.forLoopCachedLength);
runBenchmark('for loop direct access', loopPerfTests.forLoopDirectAccess);
runBenchmark('while loop', loopPerfTests.whileLoop);
runBenchmark('while loop cached length', loopPerfTests.whileLoopCachedLength);
runBenchmark('reversed while loop', loopPerfTests.reversedWhileLoop);
runBenchmark('double reversed while loop', loopPerfTests.doubleReversedWhileLoop);



// FIND LONGEST WITH ARRAY.reduce

function findLongestString(arr) {
  return arr.reduce(function(longest, entry) {
    return entry.length > longest.length ? entry : longest;
  }, '');
}
findLongestString(['abc', 'fddede', 'cbcccded', 'eeeeeeeeeee']);



function countOccurences(regex, str) {
  return (str.match(regex) || []).length;
}



// CLOSURE EXAMPLE WITH FOR LOOP AND SETTIMEOUT

for (var i = 0; i < 100; i++) {
  setTimeout(function(x) {
    return function() {
      console.log(x);
    }
  }(i), 100);
}



// USING REDUCE TO DO GROUPING

var list = [
  { name: 'Dave', age: 40 },
  { name: 'Dan', age: 35 },
  { name: 'Kurt', age: 44 },
  { name: 'Josh', age: 33 }
];

list.reduce(function(acc, item) {
  var key = item.age < 40 ? 'under40' : 'over40';
  acc[key] = acc[key] || [];
  acc[key].push(item);
  return acc;
}, {} );



// GREATEST COMMON DIVISOR
function greatestCommonDivisor(a, b) {
  var divisor = 2;
  var greatestDivisor = 1;

  while(a >= divisor && b >= divisor) {
    if(a % divisor === 0 && b % divisor === 0) {
      greatestDivisor = divisor;
    }
    divisor++;
  }
  return greatestDivisor;
}



// SWAP NUMBERS WITHOUT TEMP

function swap(a, b) {
  console.log('before swap:: ', 'a: ', a, ' b: ', b);
  b = b - a;
  a = a + b;
  b = a - b;
  console.log('after swap:: ', 'a: ', a, ' b: ', b);
}
swap(2,3);



// Use recursion to compute sum
var numbers = [3,4,6,7,8];

function recursiveSum(arr, n) {
  if(n == 0) {
    return arr[n];
  }
  else return arr[n] + recursiveSum(arr, n-1);
}

recursiveSum(numbers, numbers.length - 1);



// FIX THIS TO HANDLE NEGATIVE NUMBERS
var data = [1, 2, 3, 4, 5];

function rotate(arr, n) {
	return arr.slice(arr.length - n).concat(arr.slice(0, arr[arr.length - 2])).slice(0,arr.length);
}
rotate(data, 2) // => [3, 4, 5, 1, 2]



// Merges two lists
// For example: given the two lists [a, b, c] and [1, 2, 3], the function should return [a, 1, b, 2, c, 3].

var list1 = ['a', 'b', 'c'];
var list2 = [1, 2, 3];

function merge(arr1, arr2) {
  var result = [];
  var arrlength = arr1.length;
  var i = 0;
  var j = 0;
  for(; i < arrlength; i++, j++) {
    result.push(arr1[i], arr2[j]);
  }
  return result;
}

merge(list1, list2);



function walkTheDOM(node, func) {
  if (node.nodeType === 1) {
  	func(node);
    node = node.firstChild;

    while (node) {
      walkTheDOM(node, func);
      node = node.nextSibling;
    }
  }
}
function log(node) {
	console.log(node);
}

walkTheDOM(document.body, log);



// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.

// The debounce function will not allow a callback to be used more than once per given time frame.
// This is especially important when assigning a callback function to frequently-firing events.
function debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this;
    var args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

var myEfficientFn = debounce(function() {
  for (var i =0; i < 1000; i++) {
    console.log(i);
  }
}, 250); // true can be passed in as last parameter here for immediate execution

myEfficientFn();

// window.addEventListener('resize', myEfficientFn);
// best used for taxing functions like resizing and scrolling



// Poll is almost the same as debounce, but it keeps checking if
// a function can be run, at intervals, before running a callback

function poll(fn, callback, errback, timeout, interval) {
  var endTime = Date.now() + (timeout || 6000);
  interval = interval || 100;

  (function p() {
    // if the condition is met, we're done!
    if(fn()) {
      callback();
    }
    // if the condition isn't met but the timeout hasn't elapsed, try again
    else if(Date.now() < endTime) {
      setTimeout(p, interval);
    }
    // Didn't match and too much time, reject!
    else errback(new Error('timed out for ' + fn + ': ' + arguments));
  })();
}

// Usage: ensure element is visible

poll(
  function() {
    return document.getElementById('lightbox').offsetWidth > 0;
  },
  // wait 5 seconds to create #lightbox to test
  setTimeout(function() {
    var div = document.createElement('div');
    var text = document.createTextNode('Hi I\'m a lightbox');
    div.appendChild(text);
    div.style.fontSize = '3em';
    div.setAttribute('id', 'lightbox');
    document.body.appendChild(div);
  }, 5000),
  function() {
    console.log('error');
  }
);



function once(fn, context) {
  var result;

  return function() {
    if(fn) {
      result = fn.apply(context || this, arguments);
      fn = null;
    }

    return result;
  }
}

var canOnlyFireOnce = once(function() {
  console.log('hey');
});

canOnlyFireOnce();

// Or if you want to just run a function once without having a once()
// wrapper to use with any other function
function onceFn() {
   console.log('hello');
   onceFn = null;
}

onceFn();



// Calls a function only once
function once(fn) {
  var done = false;

  return function() {
    return done ? void 0 : ((done = true), fn.apply(this, arguments));
  }
}



function isPrime(n) {
  var divisor = 2;

  while (n > divisor) {
    if (n % divisor === 0) {
      return false;
    }
    else divisor++;
  }
  return true;
}

// OR

function isPrime(n) {
  if (n == 2) {
    return true;
  } else if ((n < 2) || (n % 2 == 0)) {
    return false;
  } else {
    for (var i = 3; i <= Math.sqrt(n); i += 2) {
      if (n % i == 0)
        return false;
    }
    return true;
  }
}



function primeFactors(n) {
  var factors = [];
  var divisor = 2;

  while (n > 2) {
    if (n % divisor === 0) {
      factors.push(divisor);
      n = n / divisor;
    }
    else divisor++;
  }
  return factors;
}



// Find the maximal product of any triplet.

var arr = [-3, 1, 2, -2, 5, 6];

function maximalProduct(A) {
  return A.sort(function(a,b) {
    return b < a;
  }).splice(-3).reduce(function(a,b) {
    return a * b;
  });
}

maximalProduct(arr);



// Use reduce to concatenate a list of names into a string, taking into account commas and ampersands

function list(names) {
  return names.reduce((acc,curr,i) => {
    return i === 0 ? curr.name : i === names.length - 1 ? `${acc} & ${curr.name}` : `${acc}, ${curr.name}`;
  }, '');
 }

 list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}]); //=> "Bart, Lisa, Maggie, Homer & Marge"



 class DI {
   constructor(dependency) {
     this.dependency = dependency;
   }

   inject(fn) {
     return function() {
       const args = fn.toString().match(/\((.*?)\)/)[1].split(', ');
       if (args.every(v => v === '')) return 0;
       const funcArr = args.map(arg => this.dependency[arg]);
       return fn.apply(this, funcArr);
     }.bind(this);
   }
 }

 let deps = {
   'dep1': function() { return 'this is dep1'; },
   'dep2': function() { return 'this is dep2'; },
   'dep3': function() { return 'this is dep3'; },
   'dep4': function() { return 'this is dep4'; }
 };

 let di = new DI(deps);

 let myFunc = di.inject(function(dep3, dep1, dep2) {
   return [dep1(), dep2(), dep3()].join(' -> ');
 });

 myFunc();



 // PARTIAL APPLICATION IN ES6

 const mapWith = (unaryFn) => (collection) => collection.map(unaryFn);
 const square = (n) => n * n;
 const partiallyAppliedMapWith = mapWith(square);

 const result = partiallyAppliedMapWith([1,2,3]);

 console.log(result);


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




 // DESTRUCTURING OBJECTS

 const complicatedObj = {
 	arrayProp: [
 		'Eddard',
 		{ second: 'Stark' }
 	]
 };
 const { arrayProp: [first, { second }] } = complicatedObj;
 console.log(first); // 'Eddard'
 console.log(second); // 'Stark'



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
