
// SEQUENTIAL SEARCH
// just returns true or false
function seqSearch(arr, data) {
  return arr.some(function(v) { return v == data; });
}

// returns position if data found
function seqSearchPos(arr, data) {
  return +(arr.map(function(v, i) {
      if (v==data) return i;
    }).join(''));
}

var arrayToSearch = [555,66,7,345,23,45,67];

// seqSearchPos(arrayToSearch, 345);

function findMin(arr) {
  var min = arr[0];
  arr.map(function(v) { if (v < min) min = v; });
  return min;
}



function binSearch(arr, data) {
  var upperBound = arr.length-1;
  var lowerBound = 0;
  while(lowerBound <= upperBound) {
    var mid = ~~((upperBound + lowerBound) / 2);
    console.log('Current midpoint is: ' + mid);
    if (arr[mid] < data) lowerBound = mid + 1;
    else if (arr[mid] > data) upperBound = mid - 1;
    else return mid;
  }
  return -1;
}

// var numbers = [];

// for (var i = 0; i < 100; i++) {
//   numbers[i] = i;
// }
// binSearch(numbers, 39);

var words = "Once the file is stored in an array, we can begin searching through the array to find words. Let’s begin with a sequential search and search for the word rhetoric, which is in the paragraph close to the end of the file. Let’s also time the search so we can compare it with a binary search. We covered timing code in Chapter 12 if you want to go back and review that material. Example 13-16 shows the code.".split(' ');

binSearch(words, 'through');