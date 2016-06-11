
// Recursive Fibonacci

function fibo(n) {
  console.log(n);
  if (n<2) {
      return n;
  }
  else return fibo(n-1) + fibo(n-2);
}

fibo(10);

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
  for(var i = 0; i <= word1.length; ++i) {
    for(var j = 0; j <= word2.length; ++j) {
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
    for(var i = index-max; i <= max; ++i) {
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



// PATH FINDING ALGORITHM // BREADTH-FIRST SEARCH

var q = [];

