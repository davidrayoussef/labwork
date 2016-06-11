

/**
 * Function converts array of string to array of integers.
 * @param  {Array} of numbers in form of string
 * @return {Array} of integer numbers 
 */
var parseNumbers = function(intStrs) {
  return intStrs.map(function(number) {
    if(number=="0") { return 0; }
    else return parseInt(number);
  });
}


function disemvowel(str) { return str.replace(/[aeiou]/gi, ''); };

disemvowel("This website is for losers LOL!");



function sumDigits(number) {
  return Math.abs(number).toString().split('').reduce(function(a, b) {
    return +a + +b; 
  }, 0);
}

sumDigits(-32); 



var Calculator = {
  average: function() {
    return Array.prototype.slice.call(arguments).reduce(function(prev, next) {
      return prev + next;
    }, 0) / (arguments.length || 1);
  }
};

Calculator.average(4,5,6);



var reindeer = ["Dasher Tonoyan", "Dancer Moore", "Prancer Chua", "Vixen Hall", "Comet Karavani", "Cupid Foroutan", "Donder Jonker", "Blitzen Claus"];

function sortReindeer(reindeerNames) {
  return reindeerNames.sort(function(a,b) {
    return a.split(' ')[1] > b.split(' ')[1]; // instead of indexing ( [1] ), try a.length-1 or something, in case there's three names
  })
}
sortReindeer(reindeer);



function titleCasePhrase(phr) {
  return phr.split(' ').map(function(word) {
    return word.slice(0,1).toUpperCase() + word.slice(1).toLowerCase();
  }).join(' ');
}

var phrase = 'YIN YANG';

titleCasePhrase(phrase);



// Checks if a string ends in a substring, using the RegExp Constructor
function solution(str, ending) { 
  return new RegExp(ending+"$").test(str); 
}
solution('abc', 'bc')



function reject(array, iterator) {
  return array.filter(function(element) {
    return !iterator(element);
  })
}
var odds = reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });



// RETURNS MISSING NUMBER BY SUBTRACTING THE SUM OF NUMBERS IN  
// ORDER IN THE COMPLETE SET OF NUMBERS 
function getMissingElement(superImportantArray){
  return 45 - superImportantArray.reduce(function(a,b) {
    return a+b;
  }) 
}

var arr = [0,1,2,3,4,5,6,7,8,9];

getMissingElement(arr);



Array.prototype.numberOfOccurrences = function(search) {
  return this.filter(function(number) {
    return search===number;
  }).length;
}

arr.numberOfOccurrences(0) === 1;
arr.numberOfOccurrences(4) === 0;
arr.numberOfOccurrences(2) === 2;
arr.numberOfOccurrences("a") === 0;



function sortList (sortBy, list) {
  return list.sort(function(a,b) {
    return b[sortBy] - a[sortBy];
  })
}

var list = [
  {a: 1, b: 3},
  {a: 3, b: 2},
  {a: 2, b: 40},
  {a: 4, b: 12}
];

sortList('b', list);



function elapsedSeconds(startDate, endDate){
  var startTime = startDate.getTime();
  var endTime = endDate.getTime();
  var timeDiff = endTime - startTime;
  timeDiff /= 1000;
  return Math.round(timeDiff);
}



function isLeapYear(year) {
  if(year%400==0) {
      return true;
  }
  else if(year%100==0) {
      return false;
  }
  else if(year%4==0) {
      return true;
  }
  else return false;
}

isLeapYear(400);




// Return the nth triangular number
function triangular(n) {
  return n <= 0 ? 0 : (n * (n + 1) / 2);
}



function searchNames( logins ){
  return logins.filter(function(element, index, array) {
    return element[0].match(/\_$/g);
  }, 0);
}

var logins = [ [ "foo", "foo@foo.com" ], [ "bar_", "bar@bar.com" ], [ "bar_bar", "bar@bar.com" ] ];

searchNames(logins);



function numbers() {
  return [].every.call(arguments, function(value) {
    return typeof value === "number";
  });
}



// BETTER REPEAT SOLUTION

String.prototype.repeatify = function(times) {
    return new Array(times + 1).join(this);
};

'nana'.repeatify(4) + 'Batman';

//ORRRRRRRR ANOTHER WAY OF REPEATING WHILE RETURNING A PREFILLED ARRAY...

// null is used because a this-value is not needed in a non-OO setting
function prefill(num, value) {
  return Array.apply(null, Array(+num)).map(function() { return value })
}

prefill(25, 'string')

// RECURSIVE REPEAT

function recursiveRepeat(n, str) {
  return n < 1 ? str : str + recursiveRepeat(n-1, str);
}
recursiveRepeat(8, 'nana-') + ' Batman!';



function min(a, b){
  if(a===null || b===null) {
    return 0;
  }
  else if(a===NaN || b===NaN) {
    return NaN
  }
  else if(typeof a !== "number" || typeof b !== "number") {
    return NaN;
  }
  else return (a<b)?a:b;
}

function min(array) {
  Array.prototype.min = function(argument) {
    return Math.min.apply(Math, array);
  }
}



function range(start, count) {
  return Array.apply(null, Array(count)).map(function(value, index) {
    return start + index;
  });
}

range(0,100)



function getName(args) {
if (args.length==0) {return arguments.callee.caller.name +'.' }
   return arguments.callee.caller.name +' '+ args[0];
};

function Adam() {return getName(arguments)}
function has() {return getName(arguments)}
function a() {return getName(arguments)}
function dog() {return getName(arguments)}
function The() {return getName(arguments)}
function name() {return getName(arguments)}
function of() {return getName(arguments)}
function the() {return getName(arguments)}
function is() {return getName(arguments)}
function also() {return getName(arguments)}

// The(name(of(the(dog(is(also(Adam())))))));
Adam(has(a(dog())));



//RETURN AN OBJECT'S KEY AND VALUE PARTS AS A STRING OR ARRAY

function keysAndValues(pairs){
  return Object.keys(pairs)
    .map(function(k) { return k + ' = ' + pairs[k] })
    .join(',');
}

var objWithData = {
  key1: 'value1',
  key2: 'value2',
  key3: 'value3'
}

keysAndValues(objWithData)



Array.prototype.reverse = function() {
    var length = this.length;
    var left = 0;
    var right = 0;
    for(left = 0, right = length - 1; left < right; left++, right--) {
        var temp = this[left];
        this[left] = this[right];
        this[right] = temp;
    }
    return this;
};

var input = [1, 2, 3, 4];
input.reverse(); // == [4, 3, 2, 1]
input;



function spread(func, args) {
   return func.apply(null, args);
}

function someFunction(a,b,c,d) {
    console.log(a,b,c,d);
}
spread(someFunction, [1, true, "Foo", "bar"] )



var nextFiveDays = function(date){
    var day = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();
    var dates = [];
    for (var i = 1; i <= 5; i++) {
        var newDate = new Date(year, month, day + i);
        var newMonth = newDate.getMonth();
        var newYear = newDate.getFullYear();
        var newDay = newDate.getDate();
        dates.push((newMonth + 1) + '/' + newDay + '/' + newYear);
    }
    
    return dates.join(', ');
}

nextFiveDays(new Date());

//ORRRRRRRR

var nextFiveDays = function(date){
  return [1,2,3,4,5].map(function(){
    date.setDate(date.getDate() + 1);
    return (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
  }).join(', ');
}



function digitize(n) {
  return String(n).split('').map(Number);
}
digitize(123);



function hamming(a,b) {
  return a.split('').filter(function(v,i) {return a[i]!=b[i]}).length;
}
hamming("I like turtles","I like turkeys");



function validate(n){
    var nums = String(n).split('').map(Number);
    for (var i = nums.length - 2; i >= 0; i-=2) {
        if((nums[i] * 2) > 9) {
            var overNine = String(nums[i] * 2).split('').map(Number);
            nums[i] = overNine[0] + overNine[1];
        }
        else {
            nums[i] *= 2;
        }
    }
    nums = nums.reduce(function(a,b) {
        return a + b;
    })
    return nums % 10 === 0;
}

validate(12121252);

//ORRRRRRRRRRRRRR

function validate(n) {
  // do it in one pass
  return Array.prototype.reduce.call(n.toString(), function(s, d, i, t) {
    if ((t.length - i) % 2 == 0)  d *= 2; // double every other digit
    if (d > 9)                    d -= 9; // replace with sum of digits
    return s+ +d;                         // sum all digits
  }, 0) % 10 == 0;                        // one's digit must be 0
}

validate(12121252);



// RETURN LAST ITEM

function last(list){
  return arguments.length > 1 ? arguments[arguments.length-1] : list[list.length-1]
}



// REDUCING RECURSIVELY
function digital_root(n) {
    var nums = n.toString().split('');
    if(nums.length == 1) {
        return n;
    }
    else {
        return digital_root(nums.reduce(function(a,b) {
            return +a + +b;
        }))
    }
}

digital_root(9425)

//ORRRRRRRRRRRRRR (MATH TRICK)

function digital_root(n) {
  return (n - 1) % 9 + 1;
}



function isPowerOfTwo(x){
  return !(x & (x-1))
}

isPowerOfTwo(131076)




function autocomplete(input, dictionary){
    var letters = /[^a-zA-Z]/g;
    var input = input.replace(letters, '').toLowerCase();
    return dictionary.filter(function(x) {
        return input == x.substr(0,input.length).toLowerCase();
    }).slice(0,5);
}

autocomplete('ai', ['airplane', 'airport', 'apple', 'ball', 'aisle', 'airbender', 'ails', 'aids', 'air']);



function left$( str, i ) {
  if (i === undefined) i = 1;
  if (typeof i === 'string') i = str.indexOf(i);
  return str.slice(0, i);
}

function right$( str, i ){
  if (i === undefined) i = 1;
  if (typeof i === 'string') i = str.length - str.lastIndexOf(i) - i.length;
  return i ? str.slice(-i) : '';
}

right$("Don't Repeat Yourself", "Yourself");



// Must have 10 #s, each # multiplied by position (index + 1) then added together modulo 11 must equal 0. Last # may be 'X' which equals 10
function validISBN10(isbn) {
    return isbn.length == 10 ? isbn.split('').map(function(v, i) {
        return i + 1 == 10 && v == 'X' ? 10 * (i + 1) : v * (i + 1);
    }).reduce(function(a,b) {
        return a + b;
    }) % 11 == 0 : false;
}


validISBN10('1112223339')



// Print the collatz sequence starting with positive integer n.
// Ex: collatz(4) should return "4->2->1"
function collatz(n){
    var str = '';
    var arrow = '->';
    if(n==1) {
        return '1';
    }
    while(n>1) {
        if(n%2==0) {
            str = str + n + arrow;
            n /= 2;
        }
        if(n%2!==0 && n!=1) {
            var x = (3 * n) + 1;
            str = str + n + arrow + x + arrow;
            n = x / 2;
        }
    }
    return str + '1';
}

collatz(2);

//ORRRRRRRRRRRRRR

function collatz(n) {
    return n === 1 ? '1' : n + '->' + collatz(n%2==0 ? n/2 : 3 * n + 1)
}

collatz(5);




function ArrayComprehension(options) {
  var args = options['generator'].split('');
  console.log(args)
}

ArrayComprehension({generator: '1..5'});





// HOW TO DO MEMOIZATION FOR A FUNCTION WITH MORE THAN ONE ARG

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




function goto(level,button){
  return level in [0,1,2,3] && button in [0,1,2,3] ? button - level : 0
}



function mapWith(fn) {
  return function(list) {
    return Array.prototype.map.call(list, function(v) {
      return fn.call(this, v);
    });
  }
}



function once(fn) {
  var done = false;

  return function() {
    return done ? void 0 : ((done = true), fn.apply(this, arguments));
  }
}   



function plural(n) {
  return n===1 ? false : true;
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



Ackermann = function(m,n) {
    console.log(m,n)
    if(m<0 || n<0) {
        return null;
    }
    else if(m==0) {
        return n+1;
    }
    else if(m>0 && n==0) {
        return Ackermann(m-1, 1);
    }
    else {
        return Ackermann(m-1, Ackermann(m, n-1));
    }
}


function validParentheses(parens){
    var count = 0;
    for (var i = 0; i < parens.length; i++) {
        if(parens[i]=='(') {
            count++;
        }
        if(parens[i]==')') {
            count--;
        }
        if(count<0) {
            return false;
        }
    };
    return count==0;
}
validParentheses( "())" )


///ORRRRRRRRRRRRRR

function validParentheses(parens) {
  var cmp = 0;
  parens.split('').forEach(function(v) {
    cmp += v==='(' ? 1 : -1;
    cmp = Math.abs(cmp);
  });
  return cmp === 0;
}


function evilTwin(obj) {
    function Clone() {} 
    Clone.prototype = obj;
    var c = new Clone();
    c.constructor = Clone;
    c.hasGoatee = true;
    return c;
}

var orig = {x: 5};
console.log(orig.x) 
console.log(orig.hasGoatee) 
var twin = evilTwin(orig);
console.log(twin.x) 
console.log(twin.hasGoatee)


//ORRRRRR


function evilTwin(obj) {
  var clone = Object.create(obj);
  clone.hasGoatee = true;
  return clone;
}



function prnt(x,y) {
  console.log(x + ' ' + y);
}
function flip(fn) {
  return function flipped() {
    return fn.apply(this, [].reverse.call(arguments));
  }
}
flip(prnt)(4,5)



function autocorrect(input){
  return input.replace(/\b(you+|u)\b/gi, "your sister");
}



function largest(n,xs){
  return n===0 ? [] : xs.sort(function(a,b) {
    return a - b;
  }).slice(-n);
}

largest(2, [7,6,5,4,3,2,1])



Array.prototype.removeValue = function(thing) {
  return (this.length > 0) && (this.indexOf(thing) != -1) ? 
    this.filter(function(e) {
      return e!==thing;
    }) : false;
};


arr = [1, 2, 1, '1', 3];

arr.removeValue(1);




//Filter functions that only return numbers...

Array.prototype.even = function(){
  return this.filter(function(x) {
    return x % 2 == 0 && !isNaN(x) && typeof(x) === "number" && parseInt(x) == parseFloat(x);
  })
}

Array.prototype.odd = function(){
  return this.filter(function(x) {
    return x % 2 != 0 && !isNaN(x) && typeof(x) === "number" && parseInt(x) == parseFloat(x);
  })
}

Array.prototype.under = function(x){
  return this.filter(function(el) {
    return el < x && !isNaN(el) && typeof(el) === "number" && parseInt(el) == parseFloat(el);
  })
}

Array.prototype.over = function(x){
  return this.filter(function(el) {
    return el > x && !isNaN(el) && typeof(el) === "number" && parseInt(el) == parseFloat(el);
  })
}

Array.prototype.inRange = function(min,max){
  return this.filter(function(x) {
    return (x >= min) && (x <= max) && !isNaN(x) && typeof(x) === "number" && parseInt(x) == parseFloat(x);
  })
}


/* ORRRRRRRR // DOUBLE TILDES IS SHORTHAND FOR MATH.FLOOR and 
actually just removes anything to the right of the decimal. This 
makes a difference when used against a negative number. Also, it 
will always return a number, and will never give you NaN. If it 
can't be converted to a number, you'll get 0. In the below cases it
won't return if i is NOT a whole number */

// DOUBLE BANGS CONVERTS TO BOOLEAN

Array.prototype.even = function(){
  return this.filter( function(i){ return ~~i===i && !(i&1) } )
}

Array.prototype.odd = function(){
  return this.filter( function(i){ return ~~i===i && !!(i&1) } )
}

Array.prototype.under = function(x){
  return this.filter( function(i){ return ~~i===i && i<x } )
}

Array.prototype.over = function(x){
  return this.filter( function(i){ return ~~i===i && i>x } )
}

Array.prototype.inRange = function(min,max){
  return this.filter( function(i){ return ~~i===i && i>=min && i<=max } )
}



var hanoi = function(disks) {
  var count = 0;
  function move(disks, a, b, c) {
    if (disks > 0) {
      move(disks-1, a, c, b);
      move(disks-1, b, a, c);
      count++;
    }
  }
  move(disks, 'A', 'B', 'C');
  return count;
};

hanoi(5);



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



function sumStrings(a,b) {
  if(a=='') a = 0;
  if(b=='') b = 0;
  return (parseInt(a) + parseInt(b)).toString();
}

sumStrings('123','456')



function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgb(r, g, b){
  if(r <= 0) r = '00';
  else if(r > 255) r = 'FF';
  if(g <= 0) g = '00';
  else if(g > 255) g = 'FF';
  if(b <= 0) b = '00';
  else if(b > 255) b = 'FF';
  return (r.toString(16) + g.toString(16) + b.toString(16)).toUpperCase();
}

rgb(255, 255, 255)


function squareSum(numbers){
  return numbers.map(function(x) {
    return x * x;
  }).reduce(function(a,b) {
    return a+b;
  })
}




String.prototype.removeChars = function(character) {
  var regex = new RegExp(character, 'g');
  return this.replace(regex, '');
};

'Thisy isy a stringy with too many whyyyys'.removeChars('y');



function missingNumber(arr) {
  return arr.filter(function(v,i,a){
    return (i+1) != v;
  }).slice(0,1).pop() - 1;
}

missingNumber([1,2,3,4,5,6,8,9,10])



// In this kata, you will write an arithmetic list which is basically a list that contains consecutive terms in the sequence. 
// You will be given three parameters :

// first the first term in the sequence
// c the constant that you are going to ADD ( since it is an arithmetic sequence...)
// l the number of terms that should be returned


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

///ORRRRR

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

//ORRRRRRRRRRRRRR

function powerset(list) {
  return Math.pow(2, list.length);
}



//RETURNS POWERSET COMBINATIONS

function power(s) {
  var ps = [[]];
  for (var i=0; i < s.length; i++) {
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




function getName(args) {
    return arguments.callee.name;
}
function getGetName(args) {
    return getName(args);
}
getGetName('yes') // returns "getName" because callee.name



function getName(args) {
    return arguments.callee.caller.name;
}
function getGetName(args) {
    return getName(args);
}
getGetName('yes') // returns "getGetName" because callee.caller.name



function toWeirdCase(string){
  return string.split(' ').map(function(word){
    return word.split('').map(function(letter, index){
      return index % 2 == 0 ? letter.toUpperCase() : letter.toLowerCase()
    }).join('');
  }).join(' ');
}
toWeirdCase( "Weird string case" );
toWeirdCase( "String" ); // "StRiNg"



var moveZeros = function (arr) {
  return arr.filter(function(v) {
    return v !== 0;
  }).concat(arr.filter(function(x) {
    return x === 0;
  }));
}
// returns array with zeroes moved to the right and other values untouched
moveZeros([false,1,0,1,2,0,1,3,"a"])



function isInteger(x) { return (x^0) === x; } 


function isValidIP(str) {
  return str.split('.').filter(function(v) {
    return v.match(' ') ? false : (v<256);
  }).length==4;
}

isValidIP('0.0.0.0')

//ORRR


function isValidIP(str) {
  return /^(([1-9]?\d|1\d\d|2[0-4]\d|25[0-5])(\.(?!$)|$)){4}$/.test(str);
}


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
  return tree;
}

christmasTree(3)



function ho() {
  return arguments.length == 0 ? 'Ho!' : 'Ho ' + arguments[0];
}

ho(ho(ho()))



function toInteger(n) {
  return n^0;
}

toInteger("4.55")

//ORRR
function toInteger(n) {
  return 0|n;
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



// GET NTH FIBONACCI NUMBER

function fibonacci(n) {
  var fibo = [0,1];

  if(n < 2) {
    return 1;
  }

  for(var i = 2; i <= n; i++) {
    fibo[i] = fibo[i-1] + fibo[i-2];
    console.log(fibo);
  }
  return fibo[n];
}

// RECURSIVE FIBONACCI 

function fibonacci(n) {
  if(n <= 1) {
    return n;
  }
  else return fibonacci(n-1) + fibonacci(n-2);
}

// MEMOIZED FIBONACCI

var memo = [];
function fibonacci(n) {
  if (memo[n]) {
      return memo[n];
  }
  if (n >= 2) {
      return memo[n] = fibonacci(n - 2) + fibonacci(n - 1);
  }
  return n;
}

// FIBONACCI USING ARRAY.APPLY

function fibo(n) {
  return Array.apply(0, Array(n)).reduce(function(x,y,z) {
    return x.concat((z < 2) ? z : x[z-1] + x[z-2]);
  }, []);
}

fibo(10);



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
    return value+str;
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



function makePalindrome(text){

  if(text === text.split('').reverse().join('')) return text;

  var reversedString = '';

  for (var i = text.length-1; i >= 0; i--) {
    reversedString = reversedString + text[i];
    console.log(reversedString+text)
    if((reversedString+text) === (reversedString+text).split('').reverse().join('')) {
        return reversedString + text;
    }
  }
}

makePalindrome('leveled')



var string = '<p>foo</p>';
var regex = /<.+?>/g;

function testReg(str, reg) {
  if(reg.test(str)) {
    console.log(str.match(reg));
  }
}
testReg(string, regex); // ["<p>", "</p>"] 



function wordCount(text) {
  return text.match(/\w+/g).length;
}
wordCount('one two three words');


var string = 'f&n%e)m#l@';
var regex = /\b/g;

function testReg(str, reg) {
  if(reg.test(str)) {
    console.log(str.match(reg).join(', '));
  }
}
testReg(string, regex);



// BUILD OBJECT OUT OF ARRAY

var obj = arr.reduce(function (newObj, item) {
  newObj[item.key] = item;
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

if (!Function.prototype.bind) {
    Function.prototype.bind = function() {
      var fToBind = this,
          original = fToBind,
          extraArgs = Array.prototype.slice.call(arguments),
          thisObj = extraArgs.shift(),
          func = function() {
            var thatObj = thisObj;
            return original.apply(thatObj, extraArgs.concat(
                Array.prototype.slice.call(
                    arguments, extraArgs.length
                )
            ));
          };
      func.bind = function() {
          var args = Array.prototype.slice.call(arguments);
          return Function.prototype.bind.apply(fToBind, args);
      }
      return func;
    };
}


// ORRR

Function.prototype.bind = function (ctx) {
  var rebind = function() {
    return rebind.original.call(ctx);
  }
  rebind.original = this.original || this;

  return rebind;
};



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




function cakes(recipe, available) {
  var amounts = [];
  var isAvailable = Object.keys(recipe).map(function(v) {
    return available.hasOwnProperty(v);
  }).every(function(y) {
    return y;
  });
  if(isAvailable) { 
    for(var r in recipe) {
      for(var a in available) {
        if(r==a) {
            amounts.push(~~(available[a]/recipe[r]))
        }
      }
    }
    return Math.min.apply(Math, amounts);
  }
  else return 0;
}

//ORRRRRRR

function cakes(recipe, available) {
  return Object.keys(recipe).reduce(function(val, ingredient) {
    return Math.min(Math.floor(available[ingredient] / recipe[ingredient] || 0), val)
  }, Infinity)  
}



recipe = {flour: 500, sugar: 200, eggs: 1};
available = {flour: 1200, sugar: 1200, eggs: 5, milk: 200};
cakes(recipe, available)



// remove random elements from page on clicks

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
  var i = '',
      out = [];

  for(i in window) {
    if(/^on/.test(i)) {
        out[out.length] = i;
    }
  }
  console.log(out.join(', '));
}
showEventListeners();



function typing(param){
  console.log(Array.isArray(param))
  if((typeof param)=='string') {
    return (typeof param) + '=' + '"' + param + '"';
  }
  else if(Array.isArray(param)) {
    return (typeof param) + '=' + '[' + param + ']';
  }
  else if((typeof param)=='object') {
    return (typeof param) + '=' + '{"' + 
    Object.keys(param)
    .map(function(k) { return k + '":"' + param[k] }) +'"}';
  }
  else if(typeof param == 'undefined') {
      return 'undefined';
  }
  else return (typeof param) + '=' + param;
}


// ORRRRR

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



var nato = (function() {
  var letters =  {
    "A": "Alpha",  "B": "Bravo",   "C": "Charlie",
    "D": "Delta",  "E": "Echo",    "F": "Foxtrot",
    "G": "Golf",   "H": "Hotel",   "I": "India",
    "J": "Juliett","K": "Kilo",    "L": "Lima",
    "M": "Mike",   "N": "November","O": "Oscar",
    "P": "Papa",   "Q": "Quebec",  "R": "Romeo",
    "S": "Sierra", "T": "Tango",   "U": "Uniform",
    "V": "Victor", "W": "Whiskey", "X": "X-ray",
    "Y": "Yankee", "Z": "Zulu"
  }
  
  return function(word) {
    return word.split('').map(function(v) {
      return letters[v.toUpperCase()];
    }).join(' ');
  }
})()

nato('hi')



function sign(n){
  if (n < 0) 
    return -1;
  else if (n == 0)
    return 0;
  else if (n > 0)
    return 1;
  else
    return NaN
}



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



function divisors(n) {
  var divs = [];
  for (var i = 2; i < n; i++) {
    if((n/i) == ~~(n/i)) {
        divs.push(n/i);
    }
  }
  return divs.length > 0 ? divs.sort(function(a,b) {
    return a - b;
  }) : n + ' is prime';
}

divisors(12);

//ORRRRR

function divisors(integer) {
  for (var res = [], i = 2; i < integer - 1; i++) {
    if (integer % i == 0) res.push(i)
  }
  
  return res.length ? res : integer + ' is prime'
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



// PARTIAL FUNCTIONS
function add(x,y) { return x + y; }
// UseS bind() to create New function plus1() that is like add(),
// but only requires the parameter y, because x is always 1:
var plus1 = add.bind(null, 1);

add(5);




// TAKES A BINARY FUNC AND RETURNS UNARY FUNC THAT PASSES ARG TO BINARY FUNC TWICE
function twice(func) {
  return function(x) {
    return func(x, x);
  }
}



// Convert to bits (base 2); Gagnam style view count;
(2147483647).toString(2); 



function Article() {
  this.tags = ['js', 'css'];
}

var article = new Article();

function BlogPost() {};

BlogPost.prototype = article;

var blog = new BlogPost();

function StaticPage() {
  Article.call(this);
}

var page = new StaticPage();

console.log(article.hasOwnProperty('tags'));

console.log(blog.hasOwnProperty('tags'));

console.log(page.hasOwnProperty('tags'));



// USING REDUCE TO DO COUNTS WITH A HASH AS INITIAL VALUE
function wordCount(str) {
  return str.split(/[^\w']+/).reduce(function(hash, word){
    hash[word] ? hash[word]++ : hash[word] = 1;
    return hash;
  }, {});
}

var words = "You've recently taken an internship at an up and coming lingustic and natural language centre. Unfortunately, as with real life, the professors have allocated you the mundane task of counting every single word in a book and finding out how many occurences of each word there are. To them, this task would take hours but they are unaware of your programming background (They really didn't assess the candidates much). Impress them with that word count by the end of the day and you're surely in for more smooth sailing."


console.log(JSON.stringify(wordCount(words), null, 2));



// RETURNS INDICES OF FIRST TWO VALUES IN ARRAY THAT ADD UP TO THE NUMBER
var buy = function(x, arr){
  var len = arr.length;
  for (var i = 0; i < len; i++) {
    for(var j = 0; j < len; j++) {
      if((arr[i]+arr[j])==x && i!=j) {
          return [i, j].sort(function(a,b) {
            return a - b;
          });
      }
    }
  }
  return null;
};

buy(5,[1,2,3,4,5])




// EXAMPLE OF CAPTURING IN REGEXP TO CAPTURE WHATS IN OPENING TAG TO USE FOR CLOSING TAG REGEXP

var re = /<(\w+)>(.+)<\/\1>/;



// USE IMMEDIATE FUNCTION CLOSURES INSTEAD OF WITH STATEMENTS

Object.extend(String.prototype.escapeHTML, {
  div:  document.createElement('div'),
  text: document.createTextNode('')
});

(function(s) {
  s.div.appendChild(s.text);
})(String.prototype.escapeHTML);



function getFunction(sequence) {
  var isNonLinear = (function(s) {
    console.log(s.sort(function(a,b) { (a<b) ? a<b : b>a; }) + '!=' + sequence)
    s.sort(function(a,b) { return (a<b) ? a<b : b>a; }) != sequence;
  })(sequence);
  if(isNonLinear) { return 'Non-linear sequence';}
  else if(sequence[1]-sequence[0]==1) {
      return 'f(x) = x';
  }
  else if(sequence[0]<0) {
      return 'f(x) = ' + (sequence[1] - sequence[0]) + 'x - ' + -(sequence[0]);
  }
  else if(sequence[0]>0) {
      return 'f(x) = ' + (sequence[1] - sequence[0]) + 'x + ' + sequence[0];
  }
  else return 'f(x) = ' + (sequence[1] - sequence[0]) + 'x';
}

getFunction([ -1, -888, 768546, -13, -456546 ])



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



// A FUNCTION THAT RETURNS THE RESULT 5 FOR sum(2,3) OR sum(2)(3)

function sum(a,b) {
  return arguments.length > 1 ? a + b :
    function(c) {
      return a + c;
    }
}


// Given an array (or list) of scores, return the array of ranks for each value in the array.

function ranks(a) {
  var ranks = {};
  a.map(function(v) {
    if(ranks[v] == undefined) { ranks[v] = 0; }
    ranks[v]++;
  })
  return ranks;
}
// try to make array of sorted numbers
// make for loop or two to compare orginal array with sorted array
// put ranks in new object or array

ranks([3,3,3,3,3,5,1])



if (!(x in window)) {
    var x = 10;
}

// Excluding functions blocks, JavaScript does not support block scopes 
// (such as if or for loop blocks). This means that x which is defined 
// inside the if statement will be available in window scope even if 
// the if branch is not executed at all.



// RETURN ARRAY OF PARAMS OF FUNCTION BEING PASSED AS ARGUMENT
function dismember(func) {
  var strFunc = func.toString();
  var params = strFunc.slice(strFunc.indexOf('(')+1, strFunc.indexOf(')')).match(/([^\s,]+)/g);
  return params ? params : [];
}

function add(a,b) {
  return a+b;
}

function test() {
  console.log('hello');
}

dismember(test);



// Use Object.defineProperty so that changes to instances carry over to other combined properties eg fullName

function NamedOne(first, last) {
    this.firstName = first;
    this.lastName = last;

  Object.defineProperty(this, 'fullName', {
    get: function() { return this.firstName + ' ' + this.lastName; },
    set: function(newValue) { 
      if((/\s/).test(newValue)) {
        this.firstName = newValue.split(' ')[0],
        this.lastName = newValue.split(' ')[1]
      }
    }
  });
}

var named = new NamedOne('john', 'doh');
named.firstName = 'jane';
named.fullName = 'new name';
named.fullName;



// Use Object.defineProperty to create immutable properties

function OnceNamedOne(first, last) {
    this.firstName = first;
    this.lastName = last;
    this.fullName = this.firstName + ' ' + this.lastName;

  Object.defineProperties(this, {
    firstName: { writable: false },
    lastName: { writable: false },
    fullName: { writable: false }
  });
}
// or just Object.freeze(this)



// Calculating Crosswind and Headwind, info on degrees and radians

function windComponents(rwy, windDirection, windSpeed) {
  var deg = (windDirection - (+(rwy.substr(0,2)+'0')));
  var rad = deg * Math.PI / 180;
  var headWind = Math.cos(rad) * windSpeed;
  var crossWind = Math.sin(rad) * windSpeed;
  var headOrTail = headWind > 0 ? 'Head' : 'Tail';
  var leftOrRight = crossWind > 0 ? 'right' : 'left';

  return headOrTail + 'wind ' + Math.abs(Math.round(headWind)) + ' knots. Crosswind ' + Math.abs(Math.round(crossWind)) + ' knots from your ' + leftOrRight + '.';
}

windComponents("18L",240,15);





// Method       Parameters       Negative Start Support
// substring    Start, End       No
// substr       Start, Length    Yes
// slice        Start, End       Yes



// INVOKE FILTER ARRAY METHOD ON STRING USING CALL THEN CONVERT BACK TO StRiNg

var original = 'There is 1 number.';

var updated = [].filter.call(original, function(v) {
  return v.match(/1/);
}).join('');

updated;



function AssertionFailed(message) {
  this.message = message;
}

AssertionFailed.prototype = Object.create(Error.prototype);

function assert(test, message) {
  if(!test) throw new Error(message);
}

assert(5+5==0, 'does five and five equal zero');



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

function doThisDoThat(fun1, fun2) {
  return function(arr) {
    return [fun1(arr), fun2(arr)];
  }
}

var minAndMax = doThisDoThat(findMin, findMax);

minAndMax([555,66,7,345,23,45,67]);



// SAVING THIS CAUSE IT MIGHT BE IN CODEWARS
var store = window.store || {};
if (!store["basket"]) {
  store.basket = {};
}
if (!store.basket["core"]) {
  store.basket.core = {};
}
store.basket.core = {
  // ...rest of our logic
}



// USE INSTEAD OF SWITCH STATEMENT...

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



// TEMPLATING ENGINE TO REPLACE PLACEHOLDERS WITH VALUES

function merge(content, values) {
  return Object.keys(values).map(function(key){
    return content.replace('{{' + key + '}}', values[key]);
  });
}

var mailValues = {};

mailValues.first_name = "Janet";

var emailTemplate = "Hi {{first_name}}! Thanks for completing this code challenge :)";

var mergedContent = merge(emailTemplate, mailValues);


function fizzBuzz() {
  for (var i = 1; i <= 100; i++) {
    if(i%15==0) {
        console.log('fizzbuzz');
    }
    else if(i%3==0) {
        console.log('fizz');
    }
    else if(i%5==0) {
        console.log('buzz');
    }
    else { console.log(i); }
  }
}
fizzBuzz();

function fizzBuzzShort() {
  for(i = 0; i < 100;)console.log((++i%3?'':'Fizz')+(i%5?'':'Buzz')||i);
}
fizzBuzzShort();



// ITERATE OVER DOM COLLECTION

var numButton = document.getElementsByClassName('num-button');

[].forEach.call(numButton, function(v) {
  v.addEventListener('click', function() {
    console.log(this.innerHTML);
  });
})



// PIGLATINIZER

function englishToPigLatin(word) {
  return word.slice(1) + word.split('')[0] + 'ay';
}

englishToPigLatin('beast');



// FOR ANIMATION, LAST LINE IS USED TO INCREMENT AND REVERT BACK TO ZERO WITHOUT USING IF STATEMENTS. 

var animate = function() {
  ctx.clearRect(0,0,canvas.width, canvas.height);
  ctx.drawImage(frames[currentFrame], 192, 192);
  // will increment currentFrame until amount of frames is reached and ...
  // will become zero again when value of currentFrame and frames.length ...
  // is the same, so will have zero (0) remainder.
  currentFrame = (currentFrame + 1) % frames.length;
};



function triangle(n) {
  var triString = '';
  for (var row = 1; row <= n; row++) {
    for (var character = 1; character <= row; character++) {
      triString += '*';
    }
    triString += '\n';
  }
  console.log(triString);
}

triangle(5);



function diamond(n) {
  var diaString = '';
  for (var topRows = 1; topRows < n; topRows += 2) {
    for (var space = 0; space < (n-1) - topRows / 2; space++) {
      diaString += ' ';
    }   
    for (var character = 0; character < topRows; character++) {
      diaString += '*';
    }
    diaString += '\n';
  }
  for (var bottomRows = (n+1); bottomRows > 0; bottomRows -= 2) {
    for (var space = 0; space < (n-1) - bottomRows / 2; space++) {
      diaString += ' ';
    }   
    for (var character = 0; character < bottomRows; character++) {
      diaString += '*';
    }
    diaString += '\n';
  }
  console.log(diaString);
}

diamond(10);




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
      return a+b;
    });
  }
  var evenNumbers = onlyEvens(fibs);
  console.log(evenNumbers);
};

fibEvensSum();



// A simple testCase function

String.prototype.trim = function() {
  return this.replace(/^\s+/, '');
};

function assert(expr) {
  if(!expr) {
    throw new Error();
  }

  assert.count++;

  return true;
}

function output(text, color) {
  var p = document.createElement('p');
  p.innerHTML = text;
  p.style.color = color;
  document.body.appendChild(p);
}

function testCase(name, tests) {
  assert.count = 0;
  var successful = 0;
  var testCount = 0;

  for (var test in tests) {
    if (!/^test/.test(test)) {
      continue;
    }

    testCount++

    try {
      tests[test]();
      output(test, '#0c0');
      successful++;
    } catch(e) {
      output(test + ' failed: ' + e.message, '#c00');
    }
  }
  var color = successful == testCount ? '#0c0' : '#c00';

  output("<strong>" + testCount + " tests, " + 
    (testCount - successful) + " failure(s)</strong>", color);
}

testCase('String trim test', {
  'test trim should remove leading white-space':
  function() {
    assert('a string' === '   a string'.trim());
  },
  'test trim should remove trailing white-space':
  function() {
    assert('a string' === 'a string   '.trim());
  }
});



// A BENCHMARK RUNNER

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




var makeAcronym = function(string) {
  if (typeof string != 'string') return 'Not a string';
  if (/[^a-z ]/ig.test(string)) return 'Not letters';
  return string.split(' ').map(function(v) {
    return v.slice(0,1);
  }).join('').toUpperCase();
};

makeAcronym('y cbci LqDR1yUDNDD');
makeAcronym('QQ m KNEnkBuzdXkL1LCpPpS8');


var dict = {
  "D": "disturbing",
  "G": "gregarious",
  "M": "mustache"
}


var makeBackronym = function(string){
  return string.split('').map(function(v) {
    return dict[v.toUpperCase()];
  }).join(' ');
};

makeBackronym('dgm');



// WORK ON THIS TOO FOR ZEROS AND NEGATIVES
var data = [1, 2, 3, 4, 5];

function rotate(arr, n) {
  return arr.slice(arr.length - n).concat(arr.slice(0, arr[arr.length - 2])).slice(0,arr.length);
}
rotate(data, 0) // => [1, 2, 3, 4, 5]


function isPangram(n) {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz';
  var sorted = n.toLowerCase().split('').sort().join('').match(/\S/g);
  var unique = sorted.filter(function(v,i,a){ return i==a.indexOf(v); }).join('');
  console.log(unique);
  console.log(alphabet);
    return unique === alphabet ? 1 : 0 ;
}
isPangram('We promptly judged antique ivory buckles for the prize');


function getIntegerComplement(n) {
    var binary = (n >>> 0).toString(2);
    var inverted = binary.split('').map(function(v){ return v == 1 ? 0 : 1}).join('');
    return parseInt(inverted, 2);
}
getIntegerComplement(50);




// SEARCHING WITH ARRAY.SOME

function findEmployee(id) {
  var employee;
  employees.some(function(e) {
    if(e.id === id) {
      employee = e;
      return true;
    }
  });
  return employee;
}



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

for (var i = 0; i < 100; ++i) {
  setTimeout(function(x) {
    return function() {
      console.log(x);
    }
  }(i), 100);
}



// FUNCTION FACTORIES (closure demo)

function makeGreeting(language) {
  
  return function(firstname, lastname) {
    
    if(language ==='en') {
      console.log('Hello ' + firstname + ' ' + lastname);
    }

    if(language ==='es') {
      console.log('Hola ' + firstname + ' ' + lastname);
    }

  }

}

var greetEnglish = makeGreeting('en');
var greetSpanish = makeGreeting('es');



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



// Write function that computes the sum of numbers in list using recursion.
var numbers = [3,4,6,7,8];

function recursiveSum(arr, n) {
  if(n == 0) {
    return arr[n];
  }
  else return arr[n] + recursiveSum(arr, n-1); 
}

recursiveSum(numbers, numbers.length - 1);



// Write a function that combines two lists by alternatingly taking elements. 
// For example: given the two lists [a, b, c] and [1, 2, 3], the function should return [a, 1, b, 2, c, 3].

var list1 = ['a', 'b', 'c'];
var list2 = [1, 2, 3];

function combineLists(arr1, arr2) {
  var result = [];
  var arrlength = arr1.length;
  var i = 0;
  var j = 0;
  for(; i < arrlength; i++, j++) {
    result.push(arr1[i], arr2[j]);
  }
  return result;
}

combineLists(list1, list2);



// Write a function that computes the list of the first 100 Fibonacci numbers. 

function fibNumbers() {
  var first = 0;
  var second = 1;
  var result = [0, 1];
  var temp;
  for(var i = 0; i < 98; i++) {
    result.push(first + second);
    temp = second;
    second = first + second;
    first = temp;
  }
  return result;
}



// Write a function that given a list of non negative integers, arranges them such that they form the largest possible number. 
// For example, given [50, 2, 1, 9], the largest formed number is 95021.

// THIS SOLUTION DOESN'T ALWAYS WORK
var numbers = [50, 2, 1, 9];

function largestPossibleNumber(arr) {
  return +(arr.sort().reverse().join(''));
}

largestPossibleNumber(numbers);



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
      if(!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if(callNow) func.apply(context, args);
  };
}

var myEfficientFn = debounce(function() {
  for(var i =0; i < 1000; i++) {
    console.log(i);
  }
}, 250); // true can be passed in as last parameter here for immediate execution

myEfficientFn();

// window.addEventListener('resize', myEfficientFn); // best used for taxing functions like resizing and scrolling



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



function isPrime(n) {
  var divisor = 2;

  while(n > divisor) {
    if(n % divisor === 0) {
      return false;
    }
    else divisor++;
  }
  return true;
}

// BETTER

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

  while(n > 2) {
    if(n % divisor === 0) {
      factors.push(divisor);
      n = n / divisor;
    }
    else divisor++;
  }
  return factors;
}



function fib(n) {
  if(n <= 1) {
    return n;
  }
  else return fib(n-1) + fib(n-2);
}
fib(100);

function fib(n) {
  var fibo = [0, 1];

  if(n <= 2) return n;

  for(var i = 2; i <= n; i++) {
    fib[i] = fib[i-1] + fib[i-2];
  }

  return fib[n];
}



var arr = [2,3,1,5];


// A permutation is a sequence containing each element from 1 to N once, and only once.
// The goal is to check whether A is a permutation

function isPermutation(A) {
  // write your code in JavaScript (Node.js 4.0.0)
  var boolean = A.sort(function(a,b) {
      return b < a;
  }).every(function(v,i){
      return v === i + 1;
  });
  return boolean ? 1 : 0;
}

solution(arr);



// A zero-indexed array A consisting of N different integers is given. The array contains integers in the range [1..(N + 1)], 
// which means that exactly one element is missing.

// Your goal is to find that missing element.

function missingElement(A) {
  return A.sort(function(a,b){
      return b < a;
  }).filter(function(v,i){
      return v !== i+1;
  }).shift() - 1;
}



// Your goal is to find the maximal product of any triplet.

var arr = [-3, 1, 2, -2, 5, 6];

function maximalProduct(A) {
  return A.sort(function(a,b) {
    return b < a;
  }).splice(-3).reduce(function(a,b) {
    return a * b;
  });
}

solution(arr);


// FIND DUPLICATES

function duplicates(arr) {
  return arr.filter(function(v, i, a) {
    return v == a[i+1];
  });
}

duplicates([2,2,4,4,4,5,6,7,8,9,9]);



// REMOVE DUPLICATES

function removeDuplicates(arr) {
  return arr.filter(function(v, i, a) {
    return v !== a[i+1];
  });
}

removeDuplicates([1,3,3,3,1,5,6,7,8,1]);



// IF THE ABOVE DOESN'T WORK & TO USE STRINGS...

function removeDuplicates(arr) {
  if(typeof arr === 'string') arr = arr.split('');
  return arr.filter(function(v, i, a) {
      return a.indexOf(v) == i;
  }).join('');
}

removeDuplicates('dirdi');



function multiplicationTables(max) {
  var str = '';
  for(var i = 1; i <= max; i++) {
    for(var j = 1; j <= max; j++) {
      // conditionals for number padding based on character length
      var charLength = (j * i).toString().split('').length;
      if(charLength === 3) {
        str += ' ' + (j * i);
      }
      else if(charLength === 2) {
        str += '  ' + (j * i);
      }
      else {
        str += '   ' + (j * i);
      }
    }
    str += '\n';
  }
  console.table(str);
}

multiplicationTables(12);



// CHECKING IF A VARIABLE EXISTS WITHOUT GETTING AN ERROR

if(window.someVariable) { ... };

// or

if(typeof someVariable !== 'undefined') { ... };



// bring in the other Object composition stuff and put defineproperty somewhere close

function Book(name) {
  Object.defineProperty(this, name, {
    get: function() {
      return 'Book: ' + name;
    },
    set: function(newName) {
      name = newName;
    },
    configurable: false
  });
}


var getUniqueId = (function() {
  var id = 0;
  return function(element) {
    if (!element.id) {
      element.id = 'generated-uid-' + id++;
    }
    return element.id;
  }
})();

var elementWithId = document.createElement('p');
elementWithId.id = 'foo-bar';
var elementWithoutId = document.createElement('p');






// * Creates a new object out of a list key-value pairs.
// * R.fromPairs([['a', 1], ['b', 2],  ['c', 3]]); //=> {a: 1, b: 2, c: 3}

// MAKE THIS OBJECTIFY

function objectify(keysAndValues) {
  return Object.keys(keysAndValues).map(function(v,i) {
    console.log(keysAndValues[i]);
    return keysAndValues[i][0] = keysAndValues[i][1];
  }, {})
  // out[pairs[idx][0]] = pairs[idx][1];
}

objectify(['a',1,'b',2,'c',3]);



// MAKE THIS IFELSIFY?

var ifElse = _curry3(function ifElse(condition, onTrue, onFalse) {
    return curryN(Math.max(condition.length, onTrue.length, onFalse.length), function _ifElse() {
        return condition.apply(this, arguments) ? onTrue.apply(this, arguments) : onFalse.apply(this, arguments);
    });
});


// ONCEIFY // BUT GET THE OTHER ONE FROM ES5

var once = _curry1(function once(fn) {
    var called = false, result;
    return function () {
        if (called) {
            return result;
        }
        called = true;
        result = fn.apply(this, arguments);
        return result;
    };
});



ajaxify


randomify change to rotate ads

function unless(test, then) {
  if(!test) then();
}