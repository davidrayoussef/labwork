
// Checks if a string ends in a substring, using the RegExp Constructor
function solution(str, ending) {
  return new RegExp(ending + '$').test(str);
}
solution('abc', 'bc')



function reject(array, iterator) {
  return array.filter(function(element) {
    return !iterator(element);
  });
}

let numArray = [1, 2, 3, 4, 5, 6];
let isOdd = function(num) { return num % 2 == 0; };
let odds = reject(numArray, isOdd);
console.log(odds); //=> [1, 3, 5]



// Returns missing number by subtracting the sum of numbers in
// order from the sum of the complete set of numbers

function getMissingNumber(arr) {
  return Array
    .from({length: arr.length + 1})
    .map((_,i) => i)
    .reduce((acc,curr) => acc + curr) -

    arr.reduce((acc,curr) => acc + curr);
}

let arr = [0,1,2,4,5,6,7,8,9];

getMissingNumber(arr); //=> 3



function sortList(sortBy, list) {
  return list.sort(function(a, b) {
    return b[sortBy] < a[sortBy];
  });
}

const list = [
  { key1: 1, key2: 3 },
  { key1: 3, key2: 2 },
  { key1: 2, key2: 40 },
  { key1: 4, key2: 12 }
];
// Sorts objects ascending by key2
sortList('key2', list);



function elapsedSeconds(startDate, endDate){
  let startTime = startDate.getTime();
  let endTime = endDate.getTime();
  let timeDiff = endTime - startTime;
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



// RECURSIVE REPEAT

function recursiveRepeat(n, str) {
  return n < 1 ? str : str + recursiveRepeat(n - 1, str);
}

recursiveRepeat(8, 'nana-') + ' Batman!';



function range(start, count) {
  return Array.from({length: count}).map((_, i) => start + i);
}

range(0, 100);



// Return an object's key and value pairs as a string or array

function keysAndValues(obj){
  return Object
    .keys(obj)
    .map(key => `${key} = ${obj[key]}`)
    .join(', ');
}

const data = {
  key1: 'value1',
  key2: 'value2',
  key3: 'value3'
}

keysAndValues(data); //=> key1 = value1, key2 = value2, key3 = value3



function nextNumDays(date, num){
  return Array
  .from({length: num})
  .map(_ => {
    date.setDate(date.getDate() + 1);
    return (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
  })
  .join(', ');
}

nextNumDays(new Date(), 5);



// Return number of differences between two strings

function hamming(a, b) {
  return a
    .split('')
    .filter((v,i) => a[i] !== b[i])
    .length;
}
hamming('I like turtles', 'I like turkeys'); //=> 3



// Return last item whether array or args

function last(list) {
  return arguments.length > 1 ? arguments[arguments.length - 1] : list[list.length - 1]
}



function autocomplete(input, dictionary){
  const letters = /[^a-zA-Z]/g;
  input = input.replace(letters, '').toLowerCase();

  return dictionary
    .filter(v => input === v.substr(0, input.length).toLowerCase())
    .slice(0,5);
}

autocomplete('ai', ['airplane', 'airport', 'apple', 'ball', 'aisle', 'airbender', 'ails', 'aids', 'air']);



// Memoize a function with more than one arg

function cache(func) {
  let cacheObj = {};

  return function() {
    const key = JSON.stringify(Array.prototype.slice.call(arguments));

    return key in cacheObj ? cacheObj[key] : cacheObj[key] = func.apply(this, arguments);
  }
}

const complexFunction = (arg1, arg2) => arg1 + arg2;
const cachedFunction = cache(complexFunction);
cachedFunction('foo', 'bar');



function mapWith(fn) {
  return function(list) {
    return Array.prototype.map.call(list, function(v) {
      return fn.call(this, v);
    });
  }
}



let Singleton = function() {
  if (Singleton.instance) {
    return Singleton.instance;
  }
  if (!(this instanceof Singleton)) {
    return new Singleton();
  }
  Singleton.instance = this;
}




// Return largest n numbers from array

function largest(n,xs) {
  return n === 0 ? [] : xs.sort((a,b) => a - b).slice(-n);
}

largest(2, [7,6,5,4,3,2,1]); //=> [6, 7]



function ipToNum(ip) {
  return parseInt(ip.split('.').map(v => {
    return '00000000'.concat(parseInt(v).toString(2)).slice(-8);
  }).join(''), 2);
}

function numToIp(number) {
  let ip = number % 256;

  for (let i = 1; i <= 3; i++) {
    number = Math.floor(number / 256);
    ip = number % 256 + '.' + ip;
  }

  return ip;
}



function rgbToHex(r, g, b) {
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
  let regex = new RegExp(character, 'g');

  return this.replace(regex, '');
};

'Thisy isy a stringy with too many whyyyys'.removeChars('y');



// Write an arithmetic list which is basically a list that contains consecutive terms in the sequence.
// You will be given three parameters :

// first, the first term in the sequence
// c, the constant that you are going to ADD ( since it is an arithmetic sequence...)
// l, the number of terms that should be returned


function seqlist(first, c, l) {
  let arr = [];

  if (c < 0) {
    for (let i = first; i > l * c + first; i += c) {
      arr.push(i);
    }
  }
  else {
    for (let i = first; i < l * c + first; i += c) {
      arr.push(i);
    }
  }
  return arr;
}

seqlist(6,3,5); //=> [6, 9, 12, 15, 18]

// ORRRRR

function seqlist(f, c, l){
  return Array.from({length: l}).map((_,i) => f + i * c);
}



function powerset(list) {
  return Math.pow(2, list.length);
}



// RETURNS POWERSET COMBINATIONS
function power(s) {
  let ps = [[]];

  for (let i = 0; i < s.length; i++) {
    for (let j = 0, len = ps.length; j < len; j++) {
      ps.push(ps[j].concat(s[i]));
    }
  }

  return ps;
}

power([1,2,3]);




function toWeirdCase(str) {
  return str
    .split(' ')
    .map(word => word
      .split('')
      .map((letter,i) => i % 2 === 0 ? letter.toUpperCase() : letter.toLowerCase())
      .join('')
    ).join(' ');
}

toWeirdCase( "Weird string case" ); // "WeIrD StRiNg CaSe"
toWeirdCase( "String" ); // "StRiNg"



// Returns array with zeroes moved to the right and other values untouched

function moveZeros(arr) {
  return arr
    .filter(v => v !== 0)
    .concat(arr.filter(v => v === 0));
}

moveZeros([false,1,0,1,2,0,1,3,"a"])



function isValidIP(str) {
  return str
    .split('.')
    .filter(v => v.match(' ') ? false : (v < 256))
    .length === 4;
}

isValidIP('0.0.0.0')

// ORRR

function isValidIP(str) {
  return /^(([1-9]?\d|1\d\d|2[0-4]\d|25[0-5])(\.(?!$)|$)){4}$/.test(str);
}



function isIntArray(arr) {
  return Array.isArray(arr) ? arr.every(v => v === null ? false : Math.floor(v) === v, 0) : false;
}



function createSecretHolder(secret) {
  let holder = secret;

  return {
    getSecret: function() {
      return holder;
    },
    setSecret: function(secret) {
      holder = secret;
    }
  }
}



// CHECK IF SENTENCES WITH FULL PUNCTUATION AND SPACES ARE PALINDROMES WITHOUT USING REVERSE

function palindrome(str) {
  str = str.toLowerCase().replace(/[^a-z0-9]+/g, '');

  return str === str.split('').reduce((str,curr) => curr + str, '');
}

palindrome("A man, a plan, a canal: Panama");



// EDIT FUNCTION.PROTOTYPE.BIND TO ALLOW REBINDING

Function.prototype.bind = function(ctx) {
  let rebind = function() {
  	return rebind.original.call(ctx);
  }
  console.log('this.orginal is: ' + this.original + ' and this is: ' + this)
  rebind.original = this.original || this;

  return rebind;
};

let func = function() {
  return this.prop;
};

let obj1 = {prop: 1};
let obj2 = {prop: 2};

func = func.bind(obj1);
func = func.bind(obj2);

func(); //=> 2



// remove random divs from page every half second

setInterval(function() {
  let divs = document.getElementsByTagName('div');
  let randomDiv = divs[Math.floor(Math.random() * divs.length)];
  console.log(randomDiv);
  randomDiv.parentNode.removeChild(randomDiv);
}, 500);


// remove random divs from page on clicks

document.addEventListener('click', function() {
  let divs = document.getElementsByTagName('div');
  let randomDiv = divs[Math.floor(Math.random() * divs.length)];
  console.log(randomDiv);
  randomDiv.parentNode.removeChild(randomDiv);
});


// OBSERVER PATTERN
function observe() {
  let subscribers {};

  function subscribe(type, fn) {
    if (!subscribers[type]) {
      subscribers[type] = [];
    }

    if (subscribers[type].indexOf(fn) == -1) {
      subscribers.push(fn);
    }
  }

  function unsubscribe(type, fn) {
    let listeners = subscribers[type];

    if (!listeners) {
      return;
    }

    let index = listeners.indexOf(fn);

    if (index > -1) {
      listeners.splice(index, 1)
    }
  }

  function publish(type, evtObj) {
    if (!subscribers[type]) {
      return;
    }

    if (!evtObj.type) {
      evtObj.type = type;
    }

    let listeners = subscribers[type];

    for (let ii = 0, ll = listeners.length; ii < ll; ii++) {
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
  return Object
    .keys(window)
    .filter(v => /^on/.test(v))
    .join('\n');
}



function typing(param) {
  let typ = typeof param;

  switch (typ) {
    case 'undefined':
      return 'undefined';
    case 'function':
      return 'function=' + param;
    default:
      return typ + '=' + JSON.stringify(param);
  }
}



function assert(outcome, description) {
  let result = {};

  result.outcome = outcome ? 'PASS' : 'FAIL';
  result.description = description;

  console.log(result.outcome + ' : ' + result.description)

  if (result.outcome === 'FAIL') {
    throw new Error('FAIL');
  }
}

function add(num1, num2) {
  return num1 + num2;
}

let result = add(5, 20);
assert(result === 24, 'checking the add function')
assert(eval("5 + 5") === 10, "5 and 5 is 10");



function divisors(num) {
  let res = [];

  for (let i = 2; i < num - 1; i++) {
    if (num % i == 0) res.push(i);
  }

  return res.length ? res : num + ' is prime';
}



// RECURSIVE REVERSE STRING
function reverse(str) {
  return str.length <= 1 ? str : reverse(str.substr(1)) + str.charAt(0);
}



function cycle(direction, array, current) {
  if (arr.indexOf(cur) === -1) return null;

  let index = arr.indexOf(cur);

  if (index === 0 && dir < 0) {
    return arr[arr.length - 1];
  }
  else if (cur === arr[arr.length - 1] && dir > 0) {
    return arr[0]
  }
  else return dir > 0 ? arr[index + dir] : arr[index - Math.abs(dir)];
}

cycle(1, [1,2,3], 3)

//ORRRR

function cycle(dir, arr, cur) {
  let len = arr.length;
  let idx = arr.indexOf(cur);

  return ~idx ? arr[(idx + dir + len) % len] : null;
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

let notification = new NotificationService();
notification.showWarning('This becomes a warning message');



// wraps returned function, creates closure, stores private data

let setup = function() {
let count = 0;

return function() {
	return count++;
};
};

let next = setup();

next(); // 1
next(); // 2



// Use reduce to do tally with hash map

function wordCount(str) {
  return str.split(/[^\w']+/).reduce((hash, word) => {
    hash[word] ? hash[word]++ : hash[word] = 1;
    return hash;
  }, {});
}

let words = "You've recently taken an internship at an up and coming lingustic and natural language centre. Unfortunately, as with real life, the professors have allocated you the mundane task of counting every single word in a book and finding out how many occurences of each word there are. To them, this task would take hours but they are unaware of your programming background (They really didn't assess the candidates much). Impress them with that word count by the end of the day and you're surely in for more smooth sailing."
console.log(JSON.stringify(wordCount(words), null, 2));



// USE IMMEDIATE FUNCTION CLOSURES INSTEAD OF WITH STATEMENTS

Object.extend(String.prototype.escapeHTML, {
  div:  document.createElement('div'),
  text: document.createTextNode('')
});

(function(s) {
  s.div.appendChild(s.text);
})(String.prototype.escapeHTML);



let typer = (function() {

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




// FUNCTION THAT CALLS TWO FUNCTIONS ON AN ARRAY AND RETURNS THE RESULTS

function findMin(arr) {
  return Math.min(...arr);
}

function findMax(arr) {
  return Math.max(...arr);
}

function doThisDoThat(fn1, fn2) {
  return function(arr) {
    return [fn1(arr), fn2(arr)];
  }
}

let minAndMax = doThisDoThat(findMin, findMax);
minAndMax([555,66,7,345,23,45,67]); //=> [7, 555]



// Alternative to switch statement

function doAction(action) {
  let actions = {
    'hack': function() {
      return 'hack';
    },

    'slash': function() {
      return 'slash';
    },

    'run': function() {
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

let mailValues = {};
mailValues.firstName = "Janet";
let emailTemplate = "Hi {{firstName}}! Thanks for completing this code challenge :)";
let mergedContent = merge(emailTemplate, mailValues);



const fizzBuzzShort=()=>{for (i=0;i<100;)console.log((++i%3?'':'Fizz')+(i%5?'':'Buzz')||i)}
fizzBuzzShort();



function christmasTree(height) {
  let tree = '';

  for (let i = height; i > 0; i--) {
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
  let str = '';

  for (let row = 1; row <= n; row++) {
    for (let character = 1; character <= row; character++) {
      str += '*';
    }
    str += '\n';
  }

  console.log(str);
}

triangleLeft(5);



function triangleRight(n) {
  let str = '';

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
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
  if (n < 3 || n % 2 === 0) return null;
  let str = '';

  for (let i = 1; i <= n; i += 2) {
    for (let space = 0; space < (n - i) / 2; space++ ) {
      str += ' ';
    }
    for (let star = 0; star < i; star++) {
      str += '*';
    }
    str += i === n ? '' : '\n';
  }

  let reverseStr = str.split('\n').reverse().slice(1).join('\n');

  return str + '\n' + reverseStr + '\n';
}



// A benchmark runner for for-loops vs while-loops vs map

let ol;

function runBenchmark(name, test) {
  if (!ol) {
    ol = document.createElement('ol');
    document.body.appendChild(ol);
  }

  setTimeout(() => {
    let start = new Date().getTime();
    test();
    let total = new Date().getTime() - start;

    let li = document.createElement('li');
    li.innerHTML = name + ': ' + total + 'ms';
    ol.appendChild(li);
  }, 15);
}

let array = function populateArray() {
  let loopLength = 500000;
  let array = [];
  for (let i = 0; i < loopLength; i++) {
    array[i] = 'item' + i;
  }
  return array;
}();

let loopPerfTests = {
  forLoop: function() {
    for (let i = 0, item; i < array.length; i++) {
      item = array[i];
    }
  },
  arrayMap: function() {
    let item;
    array.map(v => item = v);
  },
  forLoopCachedLength: function() {
    for (let i = 0, l = array.length, item; i < l; i++) {
      item = array[i];
    }
  },
  forLoopDirectAccess: function() {
    for (let i = 0, item; (item = array[i]); i++) {
    }
  },
  whileLoop: function() {
    let i = 0, item;

    while (i < array.length) {
      item = array[i];
      i++;
    }
  },
  whileLoopCachedLength: function() {
    let i = 0, l = array.length, item;

    while (i < l) {
      item = array[i];
      i++;
    }
  },
  reversedWhileLoop: function() {
    let l = array.length, item;

    while (l--) {
      item = array[l];
    }
  },
  doubleReversedWhileLoop: function() {
    let l = array.length, i = 1, item;

    while (i--) {
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
  return arr.reduce((longest, entry) => {
    return entry.length > longest.length ? entry : longest;
  }, '');
}

findLongestString(['abc', 'fddede', 'cbcccded', 'eeeeeeeeeee']);



function countOccurences(regex, str) {
  return (str.match(regex) || []).length;
}



// CLOSURE EXAMPLE WITH FOR LOOP AND SETTIMEOUT

for (let i = 0; i < 100; i++) {
  setTimeout(function(x) {
    return function() {
      console.log(x);
    }
  }(i), 100);
}



// USING REDUCE TO DO GROUPING

let list = [
  { name: 'Dave', age: 40 },
  { name: 'Dan', age: 35 },
  { name: 'Kurt', age: 44 },
  { name: 'Josh', age: 33 }
];

list.reduce((acc, item) => {
  let key = item.age < 40 ? 'under40' : 'over40';
  acc[key] = acc[key] || [];
  acc[key].push(item);
  return acc;
}, {} );







// SWAP NUMBERS WITHOUT TEMP

function swap(a, b) {
  console.log(`before swap: a => ${a}  b => ${b}`);
  b = b - a;
  a = a + b;
  b = a - b;
  console.log(`after swap: a => ${a}  b => ${b}`);
}
swap(2,3);



// Use recursion to compute sum
let numbers = [3,4,6,7,8];

function recursiveSum(arr, n) {
  if (n == 0) return arr[n];
  else return arr[n] + recursiveSum(arr, n - 1);
}

recursiveSum(numbers, numbers.length - 1);



// Merges two lists
// For example: given the two lists [a, b, c] and [1, 2, 3], the function should return [a, 1, b, 2, c, 3].

let list1 = ['a', 'b', 'c'];
let list2 = [1, 2, 3];

function merge(arr1, arr2) {
  let result = [];
  let arrlength = arr1.length;
  let i = 0;
  let j = 0;

  for (; i < arrlength; i++, j++) {
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

const log = (node) => console.log(node);

walkTheDOM(document.body, log);



// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.

// The debounce function will not allow a callback to be used more than once per given time frame.
// This is especially important when assigning a callback function to frequently-firing events.
function debounce(func, wait, immediate) {
  let timeout;

  return function() {
    let context = this;
    let args = arguments;
    let later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    let callNow = immediate && !timeout;

    clearTimeout(timeout);

    timeout = setTimeout(later, wait);

    if (callNow) func.apply(context, args);
  };
}

let myEfficientFn = debounce(function() {
  for (let i =0; i < 1000; i++) {
    console.log(i);
  }
}, 250); // true can be passed in as last parameter here for immediate execution

myEfficientFn();

// window.addEventListener('resize', myEfficientFn);
// best used for taxing functions like resizing and scrolling



// Poll is almost the same as debounce, but it keeps checking if
// a function can be run, at intervals, before running a callback

function poll(fn, callback, errback, timeout, interval) {
  let endTime = Date.now() + (timeout || 6000);
  interval = interval || 100;

  (function p() {
    // if the condition is met, we're done!
    if (fn()) {
      callback();
    }
    // if the condition isn't met but the timeout hasn't elapsed, try again
    else if (Date.now() < endTime) {
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
  let div = document.createElement('div');
  let text = document.createTextNode('Hi I\'m a lightbox');
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
  let result;

  return function() {
    if (fn) {
      result = fn.apply(context || this, arguments);
      fn = null;
    }

    return result;
  }
}

let canOnlyFireOnce = once(function() {
  console.log('hey');
});

canOnlyFireOnce(); //=> "hey"
canOnlyFireOnce(); //=>

// Or if you want to just run a function once without having a once()
// wrapper to use with any other function
function onceFn() {
  console.log('hello');
  onceFn = null;
}

onceFn();



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

let alphabetFill = new Array(26).fill().map((_, i) => String.fromCharCode(65 + i));



// MAYBE FUNCTION - DECORATES FUNCTION TO BE NULL SAFE

const maybe = function(fn) {
	return function(input) {
		if (!input) return;
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

let sq = function* (initialValue) {
	let num = initialValue || 2;
	let step = 0;
	let current;
	while (true) {
		current = num * step++;
		yield current;
	}
};

let sequence = sq(20);



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



function findSubstringInString(substring, string) {
  return (string + string).indexOf(substring);
}

findSubstringInString('david', 'efdavidyouss');
