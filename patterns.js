// Clone a deeply nested object/array
function deepClone(obj) {
  const clone = Array.isArray(obj) ? [] : {};

  for (const key of Object.getOwnPropertyNames(obj)) {
    if (typeof obj[key] === 'object') {
      clone[key] = deepClone(obj[key]);
    }
    else {
      clone[key] = obj[key];
    }
  }

  return clone;
}

const originalObj = {
  a: {
    b: [ 1, 2, 3 ],
    c: { 
      d: 4
    }
  },
  e: 5
};
const clone = deepClone(originalObj);

clone.a.b = null;

console.log(clone.a.b); //=> null
console.log(originalObj.a.b); //=> [ 1, 2, 3 ]



// Traverse a deeply nested object/array, running a callback on each value
function traverseObj(obj, fn) {
  for (const key in obj) {
    if (typeof obj[key] === 'object') {
      traverseObj(obj[key], fn);
    }
    else obj[key] = fn(obj[key]);
  }
}

const double = (n) => typeof n === 'number' ? n * 2 : n;
const obj = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3
    },
    f: [ 4, 6, 7, 8, { h: 9 } ]
  },
  g: 5,
};

traverseObj(obj, double);
console.log(JSON.stringify(obj, null, 2));
/*
{
  "a": 2,
  "b": {
    "c": 4,
    "d": {
      "e": 6
    },
    "f": [
      8,
      12,
      14,
      16,
      {
        "h": 18
      }
    ]
  },
  "g": 10
}
*/



// using Proxies to intercept
function logPropAccess(obj) {
  return new Proxy(obj, {
    get(target, key) {
      console.log('Accessing:', key);
      return Reflect.get(target, key);
    },
    set(target, key, value) {
      console.log('Setting key', key, 'to', value);
      Reflect.set(target, key, value);
    }
  });
}

const user = { name: 'Dave', age: 42 };

const userWithLogging = logPropAccess(user);
userWithLogging.name; //=> "Accessing: name"; "Dave"
userWithLogging.age = 99; //=> "Setting key age to 99"; 99



// retursion: a function that returns itself as opposed to a recursive function that calls itself;
function addg(first) {
  if (first !== undefined) return more;

  function more(next) {
    if (next === undefined) return first;
    first += next;
    return more;
  }
}

addg(2)(5)(1)(4)(); //=> 12



// One-liner to shuffle an array with sort
[1,2,3,4,5,6,7,8,9,10].sort(() => [-1, 1][~~(Math.random() * 2)]);



// Use Set to return only chars with an odd number of occurrences (in order)
function oddOccurrences(str) {
  let chars = new Set();

  for (let char of str) {
    if (chars.has(char)) chars.delete(char);
    else chars.add(char);
  }

  return [...chars].join('');
}

oddOccurrences('Hello World!') //=> "He Wrld!"



// Performant palindrome permutation checker
function isPalindromePermutation(str) {
  str = str.toLowerCase();
  let unmatched = new Set();

  for (let curr of str) {
    unmatched.has(curr) ? unmatched.delete(curr) : unmatched.add(curr);
  }

  return unmatched.size <= 1;
}

isPalindromePermutation('Eve'); // true
isPalindromePermutation('Evee'); // false
isPalindromePermutation('A man a plan a canal Panama'); // true



// Use a modifier to sort upper before lower
function sortCaseSensitive(arr) {
  return arr.sort((a,b) => a.localeCompare(b,'en-US-u-kf-upper'));
}

sortCaseSensitive('abcdABCD'.split(''));



// recursive Fibonacci with caching
function fib(num, cache = {}) {
  return cache[num] ? cache[num] : num < 2 ? num : cache[num] = fib(num - 1, cache) + fib(num - 2, cache);
}



// complex function caches results and uses cache version if arguments are the same
function cache(fn) {
  let calls = {};

  return function(...args) {
    let key = JSON.stringify(args);

    if (!(key in calls)) {
      calls[key] = fn(...args);
    }

    return calls[key];
  };
}

const add = (a,b) => a + b;
const cachedAdd = cache(add);

cachedAdd(5,6); // runs add function and caches result
cachedAdd(5,6); // returns cached result without running function again



// Get the type of any object
function type(val) {
  return {}.toString.call(val).slice(8, -1).toLowerCase();
}

type(2); //=> "number"
type({}); //=> "object"
type([]); //=> "array"
type(new Date()); //=> "date"
type(() => 'x'); //=> "function"
type(function* gen() {return 'x'}); //=> "generatorfunction"
type(null); //=> "null"
type(undefined); //=> "undefined"
type(true); //=> "boolean"
type(new RegExp()); //=> "regexp"
type(NaN); //=> "number"
type(Symbol('x')); //=> "symbol"
type(new Error()); //=> "error"



// Simple esolang interpreter to flip bits using bitwise xor op
function interpreter(tape, input) {
  input = input.split('');

  for (let i = 0, j = 0; j < input.length; ++i) {
    switch (tape[i % tape.length]) {
      case '1': input[j] ^= 1; break;
      case '0': j++; break;
    }
  }

  return input.join('');
}



// Use regex and spread to convert a string of two digit character codes in one line
function convert(str) {
  return String.fromCharCode(...str.match(/../g));
}

convert('74658665836782738084'); //=> "JAVASCRIPT"



// Use XOR operator to return the only unique number in array of duplicates
// Also works to find the only number occuring an odd number of times
function findUnique(numbers) {
  return numbers.reduce((a, b) => a ^ b);
}

findUnique([ 1, 8, 4, 4, 6, 1, 8 ]); //=> 6



// Transform 'a' => 'z', 'b' => 'y', 'c' => 'x', etc.
function decode(message) {
  return message.replace(/[a-z]/g, (m) => {
    return String.fromCharCode(219 - m.charCodeAt());
  });
}

decode('svool'); //=> "hello"



// Transpose a matrix's rows and columns
function transpose(matrix) {
  return matrix[0].map((_,i) => {
    return matrix.map((_,j) => {
      return matrix[j][i];
    });
  });
}



/*
Write function scramble(str1,str2) that returns true if a portion of str1 characters can be
rearranged to match str2, otherwise returns false.
*/

// imperative
function substringInString(str1, str2) {
  const arr1 = str1.replace(new RegExp('[^' + str2 + ']', 'g'), '').split('').sort();
  const arr2 = str2.split('').sort();
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] === arr2[j]) j++;
    i++;
  }

  return i <= arr1.length;
}

// functional
function substringInString(str1, str2) {
  let occurrenceMap = str1
    .split('')
    .reduce((obj,key) => {
      obj[key] ? obj[key]++ : obj[key] = 1;
      return obj;
    }, {});

  return str2.split('').every(letter => occurrenceMap[letter]-- > 0);
}

substringInString('rkqodlw', 'world'); //=> true
substringInString('cedewaraaossoqqyt', 'codewars'); //=> true
substringInString('katas', 'steak'); //=> false



// Get count of most frequent values using .values() method of Map()
function mostFrequentItemCount(collection) {
  return Math.max(...collection
    .reduce((map,key) => {
      map.has(key) ? map.set(key, map.get(key) + 1) : map.set(key, 1);
      return map;
    }, new Map())
    .values()
  )
}

mostFrequentItemCount([3,3,3,4,2,2,2,2,2]); //=> 5



// Returns a currency formatted number with commas
const groupByCommas = (n) => n.toLocaleString();
groupByCommas(35235235); //=> "35,235,235"



// Sort characters alphabetically, upper-case first
function sortAlphaUpperFirst(str) {
  return str
    .split('')
    .sort((a,b) => a.localeCompare(b,'kf', { caseFirst: 'upper' }))
    .join('');
}

sortAlphaUpperFirst('baAbaBb'); //=> "AaaBbbb"



// Get summation of n without adding every number between 1 and n
// e.g., summation(8) => 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 => 36
const summation = (n) => n * (n + 1) / 2;



// For problems where you have to figure out if the sum of several numbers equals the product of a known number and
// an unknown number (k), check if the sum is divisible by the known number. If it is, then k is the sum divided by the
// known number.
function digPow(n, p, sum = 0) {
  const digits = String(n).split('');

  for (let i = 0, j = p; i < digits.length; i++, j++) {
    sum += (+digits[i]) ** j;
  }

  return sum % n === 0 ? sum / n : -1;
}



// Simple generator
function* multiplier(a, b = 1) {
  while (true) yield `${a} x ${b} = ${a * b++}`;
}

let mult = multiplier(1);
mult.next().value; //=> "1 x 1 = 1"
mult.next().value; //=> "1 x 2 = 2"
mult.next().value; //=> "1 x 3 = 3"



// Simple Counter iterator
let counter = {
  [Symbol.iterator]() {
    let count = 0;
    return {
      next() {
        return { done: false, value: count++ };
      }
    }
  }
}

for (var n of counter) {
  if (n > 10) {
    break;
  }
  console.log(n);
}



// Remove duplicates using regex backreference '\1'
function removeDupes(nums) {
  return nums
    .map(String)
    .sort()
    .join('')
    .replace(/(.)\1/g, '');
}

removeDupes([2,3,5,5,3,2,1,1,1,2,5,3,4,4,4]); //=> "12345"



// Use Map() to get a tally by order of insertion
const arr = [1,1,1,2,2,2,3,3,3,3,3,4,4];

const tally = arr.reduce((map,key) => {
  map.has(key) ? map.set(key, map.get(key) + 1) : map.set(key, 1);
  return map;
}, new Map());

console.log(tally); //=> {1 => 3, 2 => 3, 3 => 5, 4 => 2}
console.log(tally.entries()); //=> {[1, 3], [2, 3], [3, 5], [4, 2]}



// check if subsequence can be found in a sequence... same as ransom note from magazine (sorted) problem
function isSubsequence(s, t) {
  let match = 0;

  for (let i = 0; i < t.length; i++) {
    if (s[match] === t[i]) {
      match++;
    }
  }

  return s.length === match;
}

isSubsequence('abc', 'ahbgdc'); //=> true



function findSubstringInString(substring, string) {
  return (string + string).indexOf(substring);
}

findSubstringInString('david', 'efdavidra'); //=> 2



// Use regex capturing to create a string sequence of numbers from an array
function createPhoneNumber(n) {
  return n.join('').replace(/(...)(...)(....)/, '($1) $2-$3');
}

createPhoneNumber([1,2,3,4,5,6,7,8,9,0]); //=> "(123) 456-7890"



// Replicate the 'new' operator
function NEW(constructor, ...args) {
  const newObj = Object.create(constructor.prototype);

  const result = constructor.apply(newObj, args);

  return result === Object(result) ? result : newObj;
}

function Person(name) {
  this.name = name;
}

Person.prototype.sayHi = function() {
  return 'Hi, I am ' + this.name;
}

let guy = NEW(Person, 'Guy');

guy.name; //=> 'Guy'
guy.sayHi(); //=> 'Hi, I am Guy'



// Extend the Function prototype with a pipe method
const addOne = (v) => v + 1;
const square = (v) => v * v;

Function.prototype.pipe = function(fn) {
  return (arg) => fn(this(arg));
};

[1,2,3,4,5].map(addOne.pipe(square)); //=> [4, 9, 16, 25, 36]



// curried add function using recursion and valueOf
function curriedAdd(n) {
  let acc = (x) => curriedAdd(n + x);

  acc.valueOf = () => n;

  return acc;
}

curriedAdd(1)(2)(3)(4)(5); //=> 15



// Calculating with functions
const zero = (fn) => fn ? fn(0) : 0;
const one = (fn) => fn ? fn(1) : 1;
const two = (fn) => fn ? fn(2) : 2;
const three = (fn) => fn ? fn(3) : 3;
const four = (fn) => fn ? fn(4) : 4;
const five = (fn) => fn ? fn(5) : 5;
const six = (fn) => fn ? fn(6) : 6;
const seven = (fn) => fn ? fn(7) : 7;
const eight = (fn) => fn ? fn(8) : 8;
const nine = (fn) => fn ? fn(9) : 9;

const plus = (a) => (b) => b + a;
const minus = (a) => (b) => b - a;
const times = (a) => (b) => b * a;
const dividedBy = (a) => (b) => b / a;

seven(times(five())); //=> 35
four(plus(nine())); //=> 13
eight(minus(three())); //=> 5
six(dividedBy(two())); //=> 3



// Using a positive lookahead to string replace all but the last four characters...
function mask(cc) {
  return cc.replace(/.(?=....)/g, '#');
}

mask('4556364607935616') //=> "############5616"



// Get the sum of two values using bitwise operators rather than + operator
function getSum(a, b) {
  while (b) {
    // The bitwise AND operator returns a one in each bit position for which the corresponding bits of both operands are ones.
    // For example, given a=5=101 and b=7=111, a & b = 101 (in bits) or 5 (in decimal)
    // Then when the result is shifted by 1 bit, it is the carry.
    // For example, 101 << 1 = 1010 (in bits) or 10 (in decimal)
    let carry = (a & b) << 1;
    // The bitwise XOR operator returns a zero in each bit position for which the corresponding bits are the same,
    // and returns a one in each bit position for which the corresponding bits are different.
    // For example, given a=5=101 and b=7=111, a ^ b = 010 (in bits) or 2 (in decimal)
    a = a ^ b;
    b = carry;
  }

  return a;
}

getSum(5,7);



// Find duplicates in an array where 1 ≤ a[i] ≤ size of array, without using filter()

// Negate each number's index. Once a value is negated, if it needs to be negated again, it's a duplicate.
function findDuplicates(nums) {
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    let index = Math.abs(nums[i]) - 1;

    if (nums[index] < 0) { // at this point, if number is negative, it's a duplicate
      result.push(Math.abs(index + 1));
    }

    nums[index] = -nums[index];
  }

  return result;
};

findDuplicates([4,3,2,7,8,2,3,14,14,20,30,20,1]); //=> [2,3]



// Alter array in place by moving zeroes (string and number) to the end while still maintaining the same order
function removeZeros(arr) {
  for (let i = 0, j = 0, k = 0; i < arr.length; i++) {
    if (arr[i] !== 0 && arr[i] !== '0') {
      k = i - 1;
      while (k >= j) {
        [arr[i], arr[k]] = [arr[k], arr[i]];
        k--;
        i--;
      }
      j++;
    }
  }

  return arr;
}

removeZeros([13, '0', 0, '0', 0, 78, 0, '0', 19, 14]); //=> "[13, 78, 19, 14, "0", 0, "0", 0, 0, "0"]"



// Returns array with zeroes moved to the right and other values untouched
function moveZeros(arr) {
  return arr
    .filter(v => v !== 0)
    .concat(arr.filter(v => v === 0));
}

moveZeros([false,1,0,1,2,0,1,3,"a"])



// Get sum of a range of numbers (inclusive) without adding them all together
function getSum(a, b) {
  const min = Math.min(a, b);
  const max = Math.max(a, b);

  return (max - min + 1) * (min + max) / 2;
}

getSum(0,100); //=> 5050



/*
You are given a map in form of a two-dimensional integer grid where 1 represents land and 0 represents water.

Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water,
and there is exactly one island (i.e., one or more connected land cells). The island doesn't have "lakes"
(water inside that isn't connected to the water around the island). One cell is a square with side length 1.

The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.
*/

function islandPerimeter(grid) {
  let perimeter = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      let borders = 0;

      if (grid[i][j] === 1) {
        if (grid[i][j - 1] !== 1) borders++;
        if (grid[i][j + 1] !== 1) borders++;
        if (!grid[i - 1] || grid[i - 1][j] !== 1) borders++;
        if (!grid[i + 1] || grid[i + 1][j] !== 1) borders++;
      }

      perimeter += borders;
    }
  }

  return perimeter;
}

islandPerimeter([
 [0,1,0,0],
 [1,1,1,0],
 [0,1,0,0],
 [1,1,0,0]
]); //=> 16



/*
Traverse 2d arrays...

Given an 2D board, count how many battleships are in it. The battleships are represented with 'X's,
empty slots are represented with '.'s. You may assume the following rules:
- You receive a valid board, made of only battleships or empty slots.
- Battleships can only be placed horizontally or vertically. In other words, they can only be made of the
  shape 1xN (1 row, N columns) or Nx1 (N rows, 1 column), where N can be of any size.
- At least one horizontal or vertical cell separates between two battleships - there are no adjacent battleships.
*/

function countBattleships(board) {
  const height = board.length;
  const width = board[0].length;
  let count = 0;
  let traversedPositions = [];
  let x = 0;
  let y = 0;

  while (x < width && y < height) {
    let shipWalker;

    if ( board[y][x] === 'X' && !traversedPositions.includes(y + '-' + x) ) {
      count++;
      traversedPositions.push(y + '-' + x);

      shipWalker = x + 1;

      while (shipWalker < width) {
        if (board[y][shipWalker] === 'X') {
          traversedPositions.push(y + '-' + shipWalker);
          shipWalker++;
        }
        else break;
      }

      shipWalker = y + 1;

      while (shipWalker < height) {
        if (board[shipWalker][x] === 'X') {
          traversedPositions.push(shipWalker + '-' + x);
          shipWalker++;
        }
        else break;
      }
    }

    if (x !== width - 1) {
      x++;
    }
    else {
      x = 0;
      y++;
    }

  }

  return count;
}

countBattleships([
  ['X', '.', '.', 'X', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'X'],
  ['.', 'X', 'X', '.', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', '.'],
  ['X', '.', '.', 'X', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'X'],
  ['X', '.', 'X', '.', 'X', '.', 'X', '.', '.', '.', '.', '.', 'X', '.', '.'],
  ['X', '.', '.', 'X', '.', 'X', '.', 'X', 'X', 'X', 'X', 'X', '.', 'X', 'X'],
  ['X', '.', 'X', '.', 'X', '.', '.', '.', '.', '.', '.', '.', 'X', '.', '.'],
  ['X', '.', '.', '.', '.', 'X', 'X', 'X', 'X', 'X', 'X', '.', 'X', '.', 'X'],
  ['X', '.', 'X', 'X', '.', '.', '.', '.', '.', '.', '.', '.', 'X', '.', '.'],
  ['X', '.', '.', '.', 'X', 'X', '.', 'X', 'X', 'X', 'X', '.', 'X', '.', 'X'],
  ['.', '.', 'X', '.', '.', '.', 'X', '.', '.', '.', '.', '.', 'X', '.', 'X'],
  ['.', 'X', '.', 'X', '.', '.', 'X', '.', '.', 'X', '.', '.', 'X', '.', 'X'],
  ['X', '.', '.', 'X', '.', '.', 'X', '.', '.', 'X', '.', '.', 'X', '.', 'X'],
  ['.', 'X', '.', 'X', '.', '.', 'X', '.', 'X', '.', '.', 'X', '.', '.', 'X'],
  ['.', 'X', '.', 'X', '.', '.', 'X', '.', '.', '.', '.', 'X', '.', 'X', '.'],
  ['X', '.', '.', 'X', '.', '.', 'X', '.', '.', 'X', '.', 'X', '.', '.', 'X']
]); //=> 38

/* Visualized representation with counts
[' 1', ' .', ' .', ' 2', ' .', ' .', ' .', ' .', ' .', ' .', ' .', ' .', ' .', ' .', ' 3'],
[' .', ' 4', ' 4', ' .', ' 5', ' 5', ' 5', ' 5', ' 5', ' 5', ' 5', ' 5', ' 5', ' 5', ' .'],
[' 6', ' .', ' .', ' 7', ' .', ' .', ' .', ' .', ' .', ' .', ' .', ' .', ' .', ' .', ' 8'],
[' 6', ' .', ' 9', ' .', '10', ' .', '11', ' .', ' .', ' .', ' .', ' .', '12', ' .', ' .'],
[' 6', ' .', ' .', '13', ' .', '14', ' .', '15', '15', '15', '15', '15', ' .', '16', '16'],
[' 6', ' .', '17', ' .', '18', ' .', ' .', ' .', ' .', ' .', ' .', ' .', '19', ' .', ' .'],
[' 6', ' .', ' .', ' .', ' .', '20', '20', '20', '20', '20', '20', ' .', '19', ' .', '21'],
[' 6', ' .', '22', '22', ' .', ' .', ' .', ' .', ' .', ' .', ' .', ' .', '19', ' .', ' .'],
[' 6', ' .', ' .', ' .', '23', '23', ' .', '24', '24', '24', '24', ' .', '19', ' .', '25'],
[' .', ' .', '26', ' .', ' .', ' .', '27', ' .', ' .', ' .', ' .', ' .', '19', ' .', '25'],
[' .', '28', ' .', '29', ' .', ' .', '27', ' .', ' .', '30', ' .', ' .', '19', ' .', '25'],
['31', ' .', ' .', '29', ' .', ' .', '27', ' .', ' .', '30', ' .', ' .', '19', ' .', '25'],
[' .', '32', ' .', '29', ' .', ' .', '27', ' .', '33', ' .', ' .', '34', ' .', ' .', '25'],
[' .', '32', ' .', '29', ' .', ' .', '27', ' .', ' .', ' .', ' .', '34', ' .', '35', ' .'],
['36', ' .', ' .', '29', ' .', ' .', '27', ' .', ' .', '37', ' .', '34', ' .', ' .', '38']
*/



// Subclassing in ES6 vs ES5
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}
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



// Destructuring objects
const complicatedObj = {
  arrayProp: [
    'Eddard',
    { second: 'Stark' }
  ]
};
const { arrayProp: [first, { second }] } = complicatedObj;
console.log(first); // 'Eddard'
console.log(second); // 'Stark'



// Maybe function... decorates function to be null-safe
const maybe = function(fn) {
  return function(input) {
    if (!input) return;
    return fn.call(this, input)
  }
}

const notNullSafe = (input) => input.toLowerCase();
notNullSafe(void 0); //=> Uncaught TypeError: Cannot read property 'toLowerCase' of undefined

const nullSafe = maybe(input => input.toLowerCase());
nullSafe(void 0); //=> (No error)



// Dependency injection
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

const deps = {
  dep1() { return 'this is dep1'; },
  dep2() { return 'this is dep2'; },
  dep3() { return 'this is dep3'; },
  dep4() { return 'this is dep4'; }
};

let di = new DI(deps);

const myFunc = di.inject(function(dep3, dep1, dep2) {
  return [dep1(), dep2(), dep3()].join(' -> ');
});

myFunc(); //=> "this is dep1 -> this is dep2 -> this is dep3"



// Use reduce to concatenate a list of names into a string, taking into account commas and ampersands
function list(names) {
  return names.reduce((acc,curr,i) => {
    return i === 0 ? curr.name : i === names.length - 1 ? `${acc} & ${curr.name}` : `${acc}, ${curr.name}`;
  }, '');
}

list([
  { name: 'Bart' },
  { name: 'Lisa' },
  { name: 'Maggie' },
  { name: 'Homer' },
  { name: 'Marge' }
]); //=> "Bart, Lisa, Maggie, Homer & Marge"



// Function that only fires once
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

const canOnlyFireOnce = once(() => console.log('hey'));

canOnlyFireOnce(); //=> "hey"
canOnlyFireOnce(); //=>

// Or if you want to just run a function once without having a once()
// wrapper to use with any other function
function once() {
  console.log('hello');
  once = null;
}

once(); //=> "hello"
once(); //=> TypeError: onceFn is not a function



// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.

// The debounce function will not allow a callback to be used more than once per given time frame.
// This is especially important when assigning a callback function to frequently-firing events.
function debounce(fn, wait, immediate) {
  let timeout;

  return function() {
    let context = this;
    let args = arguments;
    const later = () => {
      timeout = null;
      if (!immediate) fn.apply(context, args);
    };
    let callNow = immediate && !timeout;

    clearTimeout(timeout);

    timeout = setTimeout(later, wait);

    if (callNow) fn.apply(context, args);
  };
}

const efficientFn = debounce(() => {
  for (let i = 0; i < 1000; i++) {
    console.log(i);
  }
}, 250); // true can be passed in as last parameter here for immediate execution

efficientFn();

// Best used for taxing functions like resizing and scrolling, e.g....
// window.addEventListener('resize', efficientFn);



function walkTheDOM(node, fn) {
  if (node.nodeType === 1) {
  	fn(node);
    node = node.firstChild;

    while (node) {
      walkTheDOM(node, fn);
      node = node.nextSibling;
    }
  }
}

const log = (node) => console.log(node);

walkTheDOM(document.body, log);



// Recursive reverse array
function reverse(arr, result = []) {
  return arr.length === 0 ? result : reverse(arr, result.concat( arr.pop() ));
}

reverse([1,2,3,4,5]); //=> [5, 4, 3, 2, 1]



// Sum numbers recursively
function recursiveSum(arr, n) {
  if (n === 0) return arr[n];
  else return arr[n] + recursiveSum(arr, n - 1);
}

recursiveSum([3,4,6,7,8], nums.length - 1); //=> 28



// Recursive reverse string
function recursiveReverse(str) {
  return str.length <= 1 ? str : recursiveReverse(str.slice(1)) + str[0];
}



function recursiveRepeat(n, str) {
  return n < 1 ? str : str + recursiveRepeat(n - 1, str);
}

recursiveRepeat(8, 'nana-') + ' Batman!'; //=> "nana-nana-nana-nana-nana-nana-nana-nana-nana- Batman!"



// Using reduce to do grouping
const list = [
  { name: 'Dave', age: 40 },
  { name: 'Dan', age: 35 },
  { name: 'Kurt', age: 44 },
  { name: 'Josh', age: 33 }
];

const groupedList = list.reduce((acc, item) => {
  let key = item.age < 40 ? 'under40' : 'over40';

  acc[key] = acc[key] || [];
  acc[key].push(item);

  return acc;
}, {});

JSON.stringify(groupedList); //=>
/*
{
  "over40": [
    { "name": "Dave", "age": 40 },
    { "name": "Kurt", "age": 44 }
  ],
  "under40": [
    { "name": "Dan", "age": 35 },
    { "name":"Josh", "age": 33 }
  ]
}
*/



// Closure example with for loop and setTimeout
for (var i = 0; i < 100; i++) {
  setTimeout(function(x) {
    return function() {
      console.log(x);
    }
  }(i), 100);
}

// Or just use let
for (let i = 0; i < 100; i++) {
  setTimeout(function() {
    console.log(i);
  }, 100);
}



// Get longest string with reduce
function longestWord(arr) {
  return arr.reduce((a,b) => b.length > a.length ? b : a);
}

longestWord(['a', 'do', 'the', 'down', 'bring']); //=> "bring"



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
  forLoop() {
    for (let i = 0, item; i < array.length; i++) {
      item = array[i];
    }
  },
  arrayMap() {
    let item;
    array.map(v => item = v);
  },
  forLoopCachedLength() {
    for (let i = 0, l = array.length, item; i < l; i++) {
      item = array[i];
    }
  },
  forLoopDirectAccess() {
    for (let i = 0, item; (item = array[i]); i++) {
    }
  },
  whileLoop() {
    let i = 0, item;

    while (i < array.length) {
      item = array[i];
      i++;
    }
  },
  whileLoopCachedLength() {
    let i = 0, l = array.length, item;

    while (i < l) {
      item = array[i];
      i++;
    }
  },
  reversedWhileLoop() {
    let l = array.length, item;

    while (l--) {
      item = array[l];
    }
  },
  doubleReversedWhileLoop() {
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
/*
Sample test run (results may vary)...
1. for loop: 3ms
2. array map: 68ms
3. for loop cached length: 2ms
4. for loop direct access: 3ms
5. while loop: 1ms
6. while loop cached length: 1ms
7. reversed while loop: 1ms
8. double reversed while loop: 1ms
*/



function drawDiamond(n) {
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

  const reverseStr = str.split('\n').reverse().slice(1).join('\n');

  return str + '\n' + reverseStr + '\n';
}

drawDiamond(5); //=>
/*

  *
 ***
*****
 ***
  *

*/



function drawTriangleRight(n) {
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

drawTriangleRight(5); //=>
/*

    #
   ##
  ###
 ####
#####

*/



function drawTriangleLeft(n) {
  let str = '';

  for (let row = 1; row <= n; row++) {
    for (let character = 1; character <= row; character++) {
      str += '#';
    }
    str += '\n';
  }

  console.log(str);
}

drawTriangleLeft(5); //=>
/*

#
##
###
####
#####

*/



function drawChristmasTree(height) {
  const repeat = (count, el) => new Array(count + 1).join(el);
  const newLine = (line) => line === height ? '' : '\n';
  let tree = '';

  for (let i = height; i > 0; i--) {
    tree = repeat(height - i, ' ') + repeat(i * 2 - 1, '*') + repeat(height - i, ' ') + newLine(i) + tree;
  }

  console.log(tree);
}

drawChristmasTree(3); //=>
/*

  *
 ***
*****

*/



// Don't ever do this
const fizzBuzzShort=()=>{for(i=0;i<100;)console.log((++i%3?'':'Fizz')+(i%5?'':'Buzz')||i)}
fizzBuzzShort();



// Templating function to replace expressions with values
function merge(content, values) {
  return Object.keys(values).map(key => {
    return content.replace('{{' + key + '}}', values[key]);
  }).join('');
}

let mailValues = {};
mailValues.firstName = 'Dave';
let emailTemplate = 'Hi {{firstName}}! Thanks for completing this code challenge.';
merge(emailTemplate, mailValues); //=> "Hi Dave! Thanks for completing this code challenge."



// Alternative to switch statement
function doAction(action) {
  const actions = {
    hack() {
      return 'hack';
    },
    slash() {
      return 'slash';
    },
    run() {
      return 'run';
    }
  };

  if (typeof actions[action] !== 'function') {
    throw new Error('Invalid action.');
  }

  return actions[action]();
}

doAction('hack'); //=> "hack"



// Function that calls two functions on an array and returns the results
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

const minAndMax = doThisDoThat(findMin, findMax);
minAndMax([555,66,7,345,23,45,67]); //=> [7, 555]



// Simple type checker
const typer = (() => {
  return {
    isNumber(x) {
      return typeof x == 'number' && !isNaN(x) || x instanceof Number && !isNaN(x);
    },
    isString(x) {
      return typeof x == 'string' || x instanceof String;
    },
    isArray(x) {
      return Array.isArray(x);
    },
    isFunction(x) {
      return typeof x == 'function';
    },
    isDate(x) {
      return x instanceof Date;
    },
    isRegExp(x) {
      return x instanceof RegExp;
    },
    isBoolean(x) {
      return typeof x == 'boolean' || x instanceof Boolean;
    },
    isError(x) {
      return x instanceof Error;
    },
    isNull(x) {
      return x == null;
    },
    isUndefined(x) {
      return typeof x == 'undefined';
    }
  };
})();

typer.isArray([]); //=> true




// Partial application
function NotificationService() {

  function showMessage(type, message) {
    console[type](message);
  }

  function createShowMessageFunction(type) {
    return function(message) {
      showMessage(type, message);
    }
  }

  return {
    showLog: createShowMessageFunction('log'),
    showWarning: createShowMessageFunction('warn'),
    showError: createShowMessageFunction('error')
  }
}

let notification = new NotificationService();
notification.showLog('Regular message');
notification.showWarning('Warning message');
notification.showError('Error message');



// Display events beginning with 'on' in window Object
function showEventListeners() {
  return Object
    .keys(window)
    .filter(v => /^on/.test(v))
    .join('\n');
}



// Observer pattern
function observe() {
  let subscribers = {};

  function subscribe(type, fn) {
    if (!subscribers[type]) {
      subscribers[type] = [];
    }

    if (!subscribers[type].includes(fn)) {
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
      listeners.splice(index, 1);
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
    subscribe,
    unsubscribe,
    publish
  };
}



// remove random divs from page every half second
setInterval(() => {
  const divs = document.getElementsByTagName('div');
  const randomDiv = divs[Math.floor(Math.random() * divs.length)];
  console.log(randomDiv);
  randomDiv.parentNode.removeChild(randomDiv);
}, 500);

// remove random divs from page on clicks
document.addEventListener('click', () => {
  const divs = document.getElementsByTagName('div');
  const randomDiv = divs[Math.floor(Math.random() * divs.length)];
  console.log(randomDiv);
  randomDiv.parentNode.removeChild(randomDiv);
});



// private variables
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



// get powerset combinations (permutations)
function powerset(set) {
  let result = [[]];

  for (let i = 0; i < set.length; i++) {
    for (let j = 0, len = result.length; j < len; j++) {
      result.push(result[j].concat(set[i]));
    }
  }

  return result;
}

JSON.stringify(powerset([1,2,3])); //=> "[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]"



// Returns an arithmetic list; a list that contains consecutive terms in the sequence.
// The parameters are:
// - first, the first term in the sequence
// - constant, the constant that gets added (since it is an arithmetic sequence...)
// - length, the number of terms that should be returned
function seqList(first, constant, length) {
  return Array
    .from({length})
    .map((_,i) => first + (i * constant));
}

seqList(3, 5, 10); //=> [3, 8, 13, 18, 23, 28, 33, 38, 43, 48]



function Singleton() {
  if (Singleton.instance) {
    return Singleton.instance;
  }

  Singleton.instance = this;
}



function autocomplete(input, dictionary, limit = 5) {
  const nonAlpha = /[^a-zA-Z]/g;
  input = input.replace(nonAlpha, '').toLowerCase();

  return dictionary
    .filter(v => input === v.substr(0, input.length).toLowerCase())
    .slice(0, limit);
}

autocomplete('ai', ['airplane', 'airport', 'apple', 'ball', 'aisle', 'airbender', 'ails', 'aids', 'air']);
//=> ["airplane", "airport", "aisle", "airbender", "ails"]



function nextNDays(date, n) {
  return Array
  .from({length: n})
  .map(_ => {
    date.setDate(date.getDate() + 1);
    return (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
  })
  .join(', ');
}

nextNDays(new Date(), 5);



function range(start, count) {
  return Array.from({length: count}).map((_, i) => start + i);
}

range(5, 10); //=> [5, 6, 7, 8, 9, 10, 11, 12, 13, 14]



function sortListBy(sortBy, list) {
  return list.sort((a,b) => b[sortBy] < a[sortBy]);
}

const list = [
  { key1: 1, key2: 3 },
  { key1: 3, key2: 2 },
  { key1: 2, key2: 40 },
  { key1: 4, key2: 12 }
];

JSON.stringify(sortListBy('key2', list)); //=>
/*
"[
  {"key1": 3, "key2": 2},
  {"key1": 1, "key2": 3},
  {"key1": 4, "key2": 12},
  {"key1": 2, "key2": 40}
]"
*/



// Returns missing number by subtracting the sum of numbers in
// order from the sum of the complete set of numbers
function getMissingNumber(arr) {
  return Array
    .from({length: arr.length + 1})
    .map((_,i) => i)
    .reduce((acc,curr) => acc + curr) - // minus sign
    arr.reduce((acc,curr) => acc + curr);
}

let arr = [0,1,2,4,5,6,7,8,9];

getMissingNumber(arr); //=> 3
