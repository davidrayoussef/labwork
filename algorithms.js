// Basic prime number check with while loop
function isPrime(n) {
  if (n < 2) return false;

  let divisor = 2;

  while (n > divisor) {
    if (n % divisor === 0) return false;
    else divisor++;
  }

  return true;
}



// More efficient isPrime that increments by two, only up to square root
function isPrime(n) {
  if (n === 2) return true;
  if (n < 2 || n % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i == 0) return false;
  }

  return true;
}



function primeFactors(n) {
  let factors = [];
  let divisor = 2;

  while (n > 2) {
    if (n % divisor === 0) {
      factors.push(divisor);
      n /= divisor;
    }
    else divisor++;
  }

  return [...new Set(factors)];
}



function largestPrimeFactor(n) {
  const isPrime = (num) => {
    if (num === 2) return true;
    if (num % 2 === 0 || num <= 1) return false;

    for (let i = 3; i <= Math.sqrt(num); i += 2) {
      if (num % i === 0) return false;
    }

    return true;
  };

  for (let i = 0; i < n; i++) {
    if ( n % i === 0 && isPrime(n / i) ) return n / i;
  }
}



// Iterative GCD
function greatestCommonDivisor(a, b) {
  let divisor = 2;
  let greatestDivisor = 1;

  while (a >= divisor && b >= divisor) {
    if (a % divisor === 0 && b % divisor === 0) {
      greatestDivisor = divisor;
    }
    divisor++;
  }

  return greatestDivisor;
}



// Recursive GCD
function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}



// Iterative Fibonacci
function fibonacci(n) {
  let last = 1;
  let nextToLast = 1;
  let result = 1;

  for (let i = 2; i < n; i++) {
    result = last + nextToLast;
    nextToLast = last;
    last = result;
  }

  return result;
}



// Iterative Fibonacci with array
function fibonacci(n) {
  if (n < 2) return 1;

  let fibs = [0,1];

  for (let i = 2; i <= n; i++) {
    fibs[i] = fibs[i - 1] + fibs[i - 2];
  }

  return fibs[n];
}



// Recursive fibonacci
function fib(n) {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
}



// Recursive fibonacci with caching
function fib(n, cache = {}) {
  return cache[n] ? cache[n] : n < 2 ? n : cache[n] = fib(n - 1, cache) + fib(n - 2, cache);
}



// Functional fibonacci
function fibonacci(n) {
  return Array
    .from({length: n + 1})
    .reduce((acc,curr,i) => {
      return acc.concat(i < 2 ? i : acc[i - 1] + acc[i - 2]);
    }, [])[n];
}



// Iterative factorial
function factorial(n) {
  let result = 1;

  for (let i = 1; i <= n; i++) {
    result *= i;
  }

  return result;
}



// Recursive factorial
function factorial(n) {
  return n < 2 ? n : n * factorial(n - 1);
}



// Rotate a matrix clockwise in place by reversing then swapping symmetry
function rotate(matrix) {
  matrix.reverse();
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < i; j++) {
      [ matrix[j][i], matrix[i][j] ] = [ matrix[i][j], matrix[j][i] ];
    }
  }
}



// Word wrap problem
function wordWrap(str, charCount = 25) {
  let arr = str.split('');
  let result = [];

  while (arr.length) {
    let chunk = arr.slice(0, charCount);
    arr = arr.slice(charCount);

    if (/[a-z]/i.test(chunk[chunk.length - 1]) && /[a-z]/i.test(arr[0])) {
      arr.unshift(chunk.pop());
      chunk.push('-');
    }

    result.push(chunk.join(''));
  }

  return result.join('\n');
}



// Maximum Sum Contiguous Subarray
function maxSequence(arr, max = 0) {
  return arr.reduce((acc,curr) => {
    max = Math.max(max + curr, 0);
    return Math.max(max, acc);
  }, 0);
}

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]); //=> [4, -1, 2, 1] => 6



// Find the median of two sorted arrays
function median(nums1, nums2) {
  let result = [];

  function mergeSorted(left, right) {
    let merged = [];

    while (left.length && right.length) {
      if (left[0] < right[0]) {
        merged.push( left.shift() );
      }
      else merged.push( right.shift() );
    }

    return merged.concat(...left, ...right);
  }

  const arr = mergeSorted(nums1, nums2);

  if (arr.length % 2 !== 0) {
    return arr[Math.floor(arr.length / 2)];
  }
  else {
    return (arr[arr.length / 2 - 1] + arr[arr.length / 2]) / 2;
  }
}



// Finds the permutations of an array of numbers
function permuteArr(nums) {
  let result = [];
  const dfs = (nums, temp) => {
    if (nums.length === temp.length) result.push(temp.slice());
    else {
      for (let num of nums) {
        if (!temp.includes(num)) {
          temp.push(num);
          dfs(nums, temp);
          temp.pop();
        }
      }
    }
  }

  dfs(nums, []);

  return result;
}

permuteArr([1,2,3]); //=> "[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]"



// Finds the permutations of a string
function permuteStr(str) {
  let result = [];
  const dfs = (str, temp) => {
    if (str.length === temp.length) result.push(temp);
    else {
      for (let char of str) {
        if (!temp.includes(char)) {
          temp += char;
          dfs(str, temp);
          temp = temp.slice(0, -1);
        }
      }
    }
  }

  dfs(str, '');

  return result;
}

permuteStr('abc'); //=> ["abc", "acb", "bac", "bca", "cab", "cba"]



// Towers of Hanoi
function hanoi(discs, src, aux, dest) {
  if (discs > 0) {
    hanoi(discs - 1, src, dest, aux);
    console.log(`Moving disc ${discs} from ${src} to ${dest}`);
    hanoi(discs - 1, aux, src, dest);
  }
}

hanoi(3, 'source', 'buffer', 'destination');



// Spiral Matrix
function printSpiralMatrix(matrix) {
  let top = 0;
  let right = matrix[0].length - 1;
  let bottom = matrix.length - 1;
  let left = 0;

  while (left <= right && top <= bottom) {
    for (let x = left; x <= right; x++) {
      console.log( matrix[top][x] );
    }

    top++;

    for (let y = top; y <= bottom; y++) {
      console.log( matrix[y][right] );
    }

    right--;

    for (let x = right; x >= left; x--) {
      console.log( matrix[bottom][x] );
    }

    bottom--;

    for (let y = bottom; y >= top; y--) {
      console.log( matrix[y][left] );
    }

    left++;
  }
}

printSpiralMatrix([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
]);



// Brute force Longest Palindromic Substring
function longestPalindromicSubstring(str) {
  const isPalindrome = (s) => s === s.split('').reverse().join('');
  let longest = '';

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      const substring = str.slice(i, j);

      if ( isPalindrome(substring) && substring.length > longest.length ) {
        longest = substring;
      }
    }
  }

  return longest;
}

longestPalindromicSubstring('bananas'); //= "anana"



// Returns all valid (i.e., properly opened and closed) combinations of n-pairs of parentheses.
function generateParens(n) {
  const set = new Set();

  if (n === 0) set.add('');
  else {
    const prev = generateParens(n - 1);

    for (let str of prev) {
      for (let i = 0; i < str.length; i++) {
        if ( str[0] === '(' ) {
          set.add( str.slice(0, i + 1) + '()' + str.slice(i + 1) );
        }
      }

      set.add('()' + str);
    }
  }

  return set;
}

generateParens(3); //=> {"(()())", "((()))", "(())()", "()(())", "()()()"}



/*
"Paint fill" function that one might see on many image editing programs. That is, given a
screen (represented by a two-dimensional array of colors), a point, and a new color, fills
in the surrounding area until the color changes from the original color to the new color.
*/

function paintFill(matrix, y, x, oldColor, newColor) {
  if ( isOutside(matrix, y, x) || matrix[y][x] === newColor ) {
    return false;
  }

  matrix[y][x] = newColor;

  paintFill(matrix, y - 1, x, oldColor, newColor);
  paintFill(matrix, y + 1, x, oldColor, newColor);
  paintFill(matrix, y, x - 1, oldColor, newColor);
  paintFill(matrix, y, x + 1, oldColor, newColor);
}

function isOutside(matrix, y, x) {
  if ( y < 0 || y >= matrix.length || x < 0 || x >= matrix[0].length ) {
    return true;
  }
}

const matrix = [
  [ 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue' ],
  [ 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue' ],
  [ 'blue', 'blue', 'red', 'red', 'red', 'blue', 'blue' ],
  [ 'blue', 'blue', 'red', 'red', 'red', 'blue', 'blue' ],
  [ 'blue', 'blue', 'red', 'red', 'red', 'blue', 'blue' ],
  [ 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue' ],
  [ 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue' ],
];

paintFill(matrix, 2, 2, matrix[2][2], 'blue');
console.dir(matrix);



// Sieve Of Eratosthenes
function sieveOfEratosthenes(n) {
  const isPrime = Array(n + 1).fill(true);
  isPrime[0] = false;
  isPrime[1] = false;

  const primes = [];

  for (let i = 2; i < n; i++) {
    if ( isPrime[i] ) {
      primes.push(i);

      let num = i * i;

      while (num <= n) {
        isPrime[num] = false;
        num += i;
      }
    }
  }

  return primes;
}

sieveOfEratosthenes(20); //=> [2, 3, 5, 7, 11, 13, 17, 19]



// Pascal's Triangle
function pascalsTriangle(n, result = [1]) {
  for (let i = 1; i < n + 1; i++) {
    result[i] = result[i - 1] * (n - i + 1) / i;
  }

  return result;
}

pascalsTriangle(3); //=> [1, 3, 3, 1]



// O(n) solution to twoSum
function twoSum(arr, sum) {
  const map = {};
  const results = [];

  for (const num of arr) {
    if (num in map) {
      results.push([num, map[num]]);
    }
    else map[sum - num] = num;
  }

  return results;
}

twoSum([7, 0, -4, 5, 2, 3], 5); //=> [ [ 5, 0 ], [ 3, 2 ] ]


// Longest Common Subsequence
// TODO Refactor
function longestCommonSubsequence(str1, str2) {
  const matrix = Array
    .from({length: str2.length + 1})
    .map((_,y) => Array
      .from({length: str1.length + 1})
      .map((_,x) => x === 0 || y === 0 ? 0 : null)
    );
  
  for (let y = 1; y <= str2.length; y++) {
    for (let x = 1; x <= str1.length; x++) {
      if ( str2[y - 1] === str1[x - 1] ) {
        matrix[y][x] = matrix[y - 1][x - 1] + 1;
      }
      else matrix[y][x] = Math.max(
        matrix[y - 1][x],
        matrix[y][x - 1]
      );
    }
  }
  
  let result = '';
  let x = str1.length;
  let y = str2.length;

  if ( matrix[y][x] === 0 ) return '';

  while (x > 0 || y > 0) {
    if (str1[x - 1] === str2[y - 1]) {
      result = str1[x - 1] + result;
      x--;
      y--;
    }
    else if (matrix[y][x] === matrix[y][x - 1]) x--;
    else y--; 
  }

  return result;
}

longestCommonSubsequence('abcdef', 'abc'); //=> "abc"



// TODO
// The knapsack problem
// The coin change problem
// Huffman Coding
// Longest Increasing Subsequence
// Longest Palindromic Subsequence
// Maximum Length of Pair Chain
// Minimum number of jumps to reach end
// Maximal Rectangle in matrix
// Minimum number of coins that make a given value
// ...
