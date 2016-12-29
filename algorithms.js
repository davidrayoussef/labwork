// GET NTH FIBONACCI NUMBER
function fibonacci(n) {
  var fibo = [0,1];

  if (n < 2) {
    return 1;
  }

  for (var i = 2; i <= n; i++) {
    fibo[i] = fibo[i-1] + fibo[i-2];
    console.log(fibo);
  }
  return fibo[n];
}



// Dynamic Fibonacci
function dynFib(n) {
  var val = [];
  for (var i = 0; i <=n; ++i) {
    val[i] = 0;
  }
  if (n == 1 || n == 2) { return 1; }
  else {
    val[1] = 1;
    val[2] = 2;
    for (var i = 3; i <= n; ++i) {
      val[i] = val[i-1] + val[i-2];
    }
    return val[n-1];
  }
}



// Iterative Fibonacci
function iterFib(n) {
  var last = 1;
  var nextLast = 1;
  var result = 1;
  for (var i = 2; i < n; ++i) {
    result = last + nextLast;
    nextLast = last;
    last = result;
    console.log('i is: ' + i + ' and result is: ' + result + ' and last is: ' + last + ' and nextLast is: ' + nextLast);
  }
  return result;
}

iterFib(10);



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
  return Array.apply(0, Array(n)).reduce(function(acc, curr, i) {
    return acc.concat((i < 2) ? i : acc[i - 1] + acc[i - 2]);
  }, []);
}

fibo(10);



function factorialize(num) {
  var result = 1;
  for (var i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
}

factorialize(5);



// LONGEST COMMON SUBSTRING
function lcs(word1, word2) {
  var max = 0;
  var index = 0;
  var lcsarr = new Array(word1.length+1);
  for (var i = 0; i <= word1.length; ++i) {
    lcsarr[i] = new Array(word2.length+1);
    for (var j = 0; j <= word2.length; ++j) {
      lcsarr[i][j] = 0;
    }
  }
  console.log('initialization:');
  console.table(lcsarr);
  for (var i = 0; i <= word1.length; ++i) {
    for (var j = 0; j <= word2.length; ++j) {
      if (i == 0 || j == 0) {
        lcsarr[i][j] = 0;
      }
      else {
        if (word1[i-1] == word2[j-1]) {
          lcsarr[i][j] = lcsarr[i-1][j-1] + 1;
        }
        else lcsarr[i][j] = 0;
      }
      if (max < lcsarr[i][j]) {
        max = lcsarr[i][j];
        index = i;
      }

    }
  }
  console.log('after second set of for loops:');
  console.table(lcsarr);

  var str = "";
  if (max == 0) { return ""; }
  else {
    for (var i = index-max; i <= max; ++i) {
      str += word2[i];
    }
    return str;
  }
}

lcs('kabooba', 'habooba');



// THE KNAPSACK PROBLEM - RECURSIVE
function knapsack(capacity, size, value, n) {
  if (n == 0 || capacity == 0 ) { return 0; }

  if (size[n-1] > capacity) {
      return knapsack(capacity, size, value, n-1);
  }
  else {
    return max(value[n-1] + knapsack(capacity-size[n-1], size, value, n-1), knapsack(capacity, size, value, n-1));
  }
}



// THE KNAPSACK PROBLEM - ITERATIVE
function knapsack(capacity, size, value, n) {
  var K = Array.apply(null, new Array(capacity+1)).map(function() { return v = []; }); // returns array with amount (capacity + 1) of arrays

  for (var i = 0; i <= n; i++) {
    for (var w = 0; w <= capacity; w++) {
      if (i == 0 || w == 0) { K[i][w] = 0; }
      else if (size[i-1] <= w) {
        K[i][w] = max(value[i-1] + K[i-1][w-size[i-1]], K[i-1][w]);
      }
      else {
        K[i][w] = K[i-1][w];
      }
    }
    console.log(K[i][w] + ' \n')
  }
  return K[n][capacity];
}

function max(a,b) { return a > b ? a : b; }

var value = [4,5,10,11,13];
var size = [3,4,7,8,9];
var capacity = 16;
var n = 5;

knapsack(capacity, size, value, n);



// THE COIN-CHANGING PROBLEM (GREEDY ALGORITHM EXAMPLE)
function makeChange(amount, coins) {
  var remaining = 0;
  if (amount % .25 < amount) { // see if amount is big enough to give change as quarters by checking for a remainder
    coins[3] = parseInt(amount / .25); // put number of quarters in 4th position of coin array
    remaining = amount % .25; // save remainder of amount (under 25 cents)
    amount = remaining; // put remainder in amount to check for dimes, nickels and pennies after
  }
  if (amount % .10 < amount) {
    coins[2] = parseInt(amount / .10);
    remaining = amount % .10;
    amount = remaining;
  }
  if (amount % .05 < amount) {
    coins[1] = parseInt(amount / .05);
    remaining = amount % .05;
    amount = remaining;
  }
  coins[0] = parseInt(amount / .01);
}

function showChange(coins) {
  if (coins[3] > 0) {
    console.log("Number of quarters: " + coins[3] + " - " + coins[3] * .25);
  }
  if (coins[2] > 0) {
    console.log("Number of dimes: " + coins[2] + " - " + coins[2] * .10);
  }
  if (coins[1] > 0) {
    console.log("Number of nickels: " + coins[1] + " - " + coins[1] * .05);
  }
  if (coins[0] > 0) {
    console.log("Number of pennies: " + coins[0] + " - " + coins[0] * .01);
  }
}

var amount = .63;
var coins = [];
makeChange(amount, coins);
showChange(coins);



// List out all tube stations that don't contain any letters from the word "mackerel"
var searchTerm = "mackerel";
var stations = ["Baker Street", "Charing Cross", "Edgware Road (Bakerloo)", "Elephant and Castle", "Embankment", "Harlesden", "Harrow and Wealdstone", "Kensal Green", "Kenton", "Kilburn Park", "Lambeth North", "Maida Vale", "Marylebone", "North Wembley", "Oxford Circus", "Paddington", "Piccadilly Circus", "Queen's Park", "Regent's Park", "South Kenton", "Stonebridge Park", "Warwick Avenue", "Waterloo", "Wembley Central", "Willesden Junction", "Bank", "Barkingside", "Bethnal Green", "Bond Street", "Buckhurst Hill", "Chancery Lane", "Chigwell", "Debden", "Ealing Broadway", "East Acton", "Epping", "Fairlop", "Gants Hill", "Grange Hill", "Greenford", "Hainault", "Hanger Lane", "Holborn", "Holland Park", "Lancaster Gate", "Leyton", "Leytonstone", "Liverpool Street", "Loughton", "Marble Arch", "Mile End", "Newbury Park", "North Acton", "Northolt", "Notting Hill Gate", "Perivale", "Queensway", "Redbridge", "Roding Valley", "Ruislip Gardens", "Shepherd's Bush", "Snaresbrook", "South Ruislip", "South Woodford", "St Paul's", "Stratford", "Theydon Bois", "Tottenham Court Road", "Wanstead", "West Acton", "West Ruislip", "White City", "Woodford", "Acton Town", "Aldgate East", "Barking", "Barons Court", "Becontree", "Blackfriars", "Bow Road", "Bromley-by-Bow", "Cannon Street", "Chiswick Park", "Dagenham East", "Dagenham Heathway", "Ealing Common", "Earl's Court", "East Ham", "East Putney", "Edgware Road (H & C)", "Elm Park", "Fulham Broadway", "Gloucester Road", "Gunnersbury", "Hammersmith (District and Picc)", "High Street Kensington", "Hornchurch", "Kensington (Olympia)", "Kew Gardens", "Mansion House", "Monument", "Parsons Green", "Plaistow", "Putney Bridge", "Ravenscourt Park", "Richmond", "Sloane Square", "South Kensington", "Southfields", "St. James's Park", "Stamford Brook", "Stepney Green", "Temple", "Tower Hill", "Turnham Green", "Upminster", "Upminster Bridge", "Upney", "Upton Park", "Victoria", "West Brompton", "West Ham", "West Kensington", "Westminster", "Whitechapel", "Wimbledon", "Wimbledon Park", "Aldgate", "Barbican", "Euston Square", "Farringdon", "Great Portland Street", "Hammersmith", "King's Cross St Pancras", "Moorgate", "Bermondsey", "Canada Water", "Canary Wharf", "Canning Town", "Canons Park", "Dollis Hill", "Finchley Road", "Green Park", "Kilburn", "Kingsbury", "London Bridge", "Neasden", "North Greenwich", "Queensbury", "Southwark", "St John's Wood", "Stanmore", "Swiss Cottage", "Wembley Park", "West Hampstead", "Willesden Green", "Amersham", "Chalfont and Latimer", "Chorleywood", "Colliers Wood", "Croxley", "Eastcote", "Harrow on the Hill", "Hillingdon", "Ickenham", "Moor Park", "North Harrow", "Northwick Park", "Northwood", "Northwood Hills", "Pinner", "Rayners Lane", "Rickmansworth", "Ruislip", "Ruislip Manor", "Uxbridge", "Watford", "West Harrow", "Angel", "Archway", "Balham", "Belsize Park", "Borough", "Brent Cross", "Burnt Oak", "Camden Town", "Chalk Farm", "Clapham Common", "Clapham North", "Clapham South", "Colindale", "East Finchley", "Edgware", "Euston", "Finchley Central", "Golders Green", "Goodge Street", "Hampstead", "Hendon Central", "High Barnet", "Highgate", "Kennington", "Kentish Town", "Leicester Square", "Mill Hill East", "Morden", "Mornington Crescent", "Old Street", "Oval", "South Wimbledon", "Stockwell", "Tooting Bec", "Tooting Broadway", "Totteridge and Whetstone", "Tufnell Park", "Warren Street", "West Finchley", "Woodside Park", "Alperton", "Arnos Grove", "Arsenal", "Boston Manor", "Bounds Green", "Caledonian Road", "Cockfosters", "Covent Garden", "Finsbury Park", "Hatton Cross", "Heathrow Terminal 4", "Heathrow Terminal 5", "Heathrow Terminals 123", "Holloway Road", "Hounslow Central", "Hounslow East", "Hounslow West", "Hyde Park Corner", "Knightsbridge", "Manor House", "North Ealing", "Northfields", "Oakwood", "Osterley", "Park Royal", "Russell Square", "South Ealing", "South Harrow", "Southgate", "Sudbury Hill", "Sudbury Town", "Turnpike Lane", "Wood Green", "Blackhorse Road", "Brixton", "Highbury and Islington", "Pimlico", "Seven Sisters", "Tottenham Hale", "Vauxhall", "Walthamstow Central"];

function filterStations(arr, str) {
  const matcher = new RegExp(str.split('').join('|'), 'gi');
  return arr.filter(station => {
    return !station.match(matcher);
  });
}

console.log(filterStations(stations, searchTerm));



// Check if a string has all unique characters
var str ='abcdd';

function areCharactersUnique(str) {
  var result = true;
  [].slice.call(str)
    .sort((a,b) => a > b)
    .map((v, i, a) => {
      if (v === a[i+1]) {
        result = false;
      }
  });
  return result;
}

areCharactersUnique(str);



// Check if one string is a permutation of the other
var str1 = 'abcdefg';
var str2 = 'bdfacge';

function isPermutation(str1, str2) {
  var strs = [str1, str2].map(str => {
    return [].slice.call(str)
      .sort((a,b) => a > b)
      .join('')
  })
  return strs[0] === strs[1];
}

isPermutation(str1, str2);



// Check to see if the numbers in array2 are the result of the numbers in array1 squared
function comp(array1, array2) {
  if (array1 == null || array2 == null) return false;
  array1.sort((a,b) => a - b);
  array2.sort((a,b) => a - b);
  return arr1.every((v, i, a) => arr2[i] === (v * v));
}
var a1 = [ 121, 144, 19, 161, 19, 144, 19, 11 ];
var a2 = [ 121, 14641, 20736, 361, 25921, 361, 20736, 361 ];
comp(a1, a2);



function validParentheses(parens) {
  var cmp = 0;
  parens.split('').forEach(function(v) {
    cmp += v==='(' ? 1 : -1;
    cmp = Math.abs(cmp);
  });
  return cmp === 0;
}
validParentheses( "())" )



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



// Find all permutations of characters in an array
// This solution also gives you repeated characters
// For instance, ['a', 'b', 'c'] gives you 'aaa', 'bbb', 'ccc' among results
let permute = (arr, str = '', perms = []) => {
  if (str.length == arr.length) perms.push(str);
  else {
    for (item of arr) {
      permute(arr, str + item, perms);
    }
  }
  return perms;
}
permute(['a', 'b']); //=> ["aa", "ab", "ba", "bb"]



// A pangram is a sentence that contains every single letter of the alphabet at least once.
function isPangram(str) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  return str
    .split('')
    .map(v => v.toLowerCase())
    .filter(v => /[a-z]/.test(v))
    .filter((v,i,a) => a.indexOf(v) === i)
    .sort()
    .join('') === alphabet ? 'pangram' : 'not pangram';
}

isPangram('The quick brown fox jumps over the lazy dog.'); //=> true



// You are given an array strarr of strings and an integer k.
// Your task is to return the first longest string consisting of k consecutive strings taken in the array.
function longestConsecutiveStrings(strarr, k) {
  if (k <= 0 || k > strarr.length) return '';

  var longest = strarr.slice(0, k).join('');
  var temp = '';

  for (var i = 1; i < strarr.length; i++) {
    temp = strarr.slice(i, i + k).join('');
    if (temp.length > longest.length) {
      longest = temp;
    }
  }
  return longest;
}
longestConsecutiveStrings(['itvayloxrp','wkppqsztdkmvcuwvereiupccauycnjutlv','vweqilsfytihvrzlaodfixoyxvyuyvgpck'], 2);



// Cut the string into chunks of size sz (ignore the last chunk if its size is less than sz).
// If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2, reverse it;
// otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.
function reverseOrRotate(str, sz) {
  if (sz === 0 || sz >= str.length) return '';

  let chunks = new RegExp('.{' + sz + '}', 'g');
  let reverse = s => s.split('').reverse().join('');
  let rotate = s => s.slice(1) + s.slice(0, 1);
  let sumCubes = s => s.split('').reduce((acc, curr) => acc + (+curr * +curr * +curr), 0);

  return str
    .match(chunks)
    .map(chunk => sumCubes(chunk) % 2 === 0 ? reverse(chunk) : rotate(chunk))
    .join('');
}
reverseOrRotate('992845886559874108', 5);

// Use RegExp to grab chunks; better than using a loop. - D.R.
var chunks = '992845886559874108'.match(/.{3}/g); //=> ["992", "845", "886", "559", "874", "108"]



// Merge items from two arrays together
var list1 = [1,3,5,7,9];
var list2 = [2,4,6,8];

function merge(list1, list2) {
  var merged = [];

  while (list1.length > 0 || list2.length > 0) {
    if (list1.length) {
      merged.push(list1.shift());
    }
    if (list2.length) {
      merged.push(list2.shift());
    }

  }
  return merged;
}

merge(list1, list2);

// ORRRRR

function merge(list1, list2) {
  return list1.reduce((acc, curr, i) => {
    return (acc.splice(i * 2, 0, curr), acc);
  }, list2);
}
merge(list1, list2);



// Hash Tables: Ransom Note
// Given two arrays of words, find out if you can print the message in the ransom array
// using only the words from the magazine array. Print 'Yes' or 'No'

// Will fail if there's more than one occurence of a word in the ransom array,
// but only one in the magazine array, so check for that. -D.R.
function hashTables() {
  var magazine = [ 'give', 'me', 'one', 'grand', 'today', 'night' ];
  var ransom = [ 'give', 'one', 'grand', 'today', 'today', 'zombies' ];

  var result = true;

  // Tally up word counts in magazine.
  var magazineHash = magazine.reduce((obj, item) => {
    obj[item] ? obj[item]++ : obj[item] = 1;
    return obj;
  }, {});

  // Iterate through ransom array using its words to check magazine hash table...
  // If ransom word is not found in magazine hash, result is false; i.e. the ransom
  // message can't be made from magazine words.
  // If ransom word is found, decrement the tally count. This checks for dupes,
  // because once all matches decrement to zero, if there's a dupe word,
  // it will trigger the if condition and result will become false;
  ransom.map(ransomItem => {
    if (magazineHash[ransomItem] === 0) result = false;
    magazineHash[ransomItem] ? magazineHash[ransomItem]-- : result = false;
  });

  console.log(result ? 'Yes' : 'No');
}

hashTables();



// Write a function, persistence, that takes in a positive parameter num and
// returns its multiplicative persistence, which is the number of times you
// must multiply the digits in num until you reach a single digit.
function persistence(num) {
  if (num < 10) return 0;
  var count = 0;

  const digitize = num => [num].join(',').split('').map(Number);
  const multiplyAndCount = nums => nums.reduce((acc, curr) => acc * curr);

  while (num > 9) {
    count++;
    num = multiplyAndCount(digitize(num));
  }

  return count;
}
persistence(39); //=> 3



function findLongestWord(str) {
  return str.split(' ').reduce(function(longestLength, curr) {
    if (curr.length > longestLength) longestLength = curr.length;
    return longestLength;
  }, 0);
}

findLongestWord("The quick brown fox jumped over the lazy dog");



// Return an array consisting of the largest number from each provided sub-array.
function largestOfFour(arr) {
  return arr.map(function(subArr) {
    return subArr.sort(function(a,b) {
      return b - a;
    })[0];
  });
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);



// Check if a string ends with the given target string without using .endsWith().
function confirmEnding(str, target) {
  var lastIndex = str.lastIndexOf(target);
  return lastIndex !== -1 && lastIndex === str.length - target.length;
}

confirmEnding("Connor", "n"); //=> false


// USE FOR CHUNKIFY
function chunkArrayInGroups(arr, size) {
  var result = [];
  for (var i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);



// Return true if the string in the first element of the array contains
// all of the letters of the string in the second element of the array.
function mutation(arr) {
  var arr1 = arr[0].toLowerCase().split('');
  var arr2 = arr[1].toLowerCase().split('');

  return arr2.every(function(v) {
    return arr1.indexOf(v) !== -1;
  });
}

mutation(["hello", "hey"]);



// Remove all elements from the initial array that are of the same value as these arguments.
function destroyer(arr) {
  var args = Array.apply(null, arguments).slice(1);
  var reg = new RegExp(args.join('|'));

  return arr.filter(function(v) {
    return !reg.test(v);
  });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);



// Write a function which takes a ROT13 encoded string as input and returns a decoded string.
//A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
// Do not transform any non-alphabetic character but do pass them on.
function rot13(str) { // LBH QVQ VG!

  var chars = Array.apply(null, Array(26)).map(function(v,i) {
    return String.fromCharCode(i + 65);
  });

  chars = chars.concat(chars);

  return str.split('').map(function(v) {
    return !v.match(/[A-Z]/g) ? v : chars[chars.indexOf(v) + 13];
  }).join('');
}

rot13("SERR PBQR PNZC");
