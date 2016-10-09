//
// SORT
//

function CArray(numElements) {
  this.dataStore = [];
  this.pos = 0;
  this.numElements = numElements;
  this.insert = insert;
  this.toString = toString;
  this.clear = clear;
  this.setData = setData;
  this.swap = swap;
  this.bubbleSort = bubbleSort;
  this.selectionSort = selectionSort;
  this.insertionSort = insertionSort;
  this.shellSort = shellSort;
  this.gaps = [5,3,1];

  for (var i = 0; i < numElements; ++i) {
    this.dataStore[i] = i;
  }
}

function setData() {
  for (var i = 0; i < this.numElements; ++i) {
    this.dataStore[i] = Math.floor(Math.random() * (this.numElements+1));
  }
}

function clear() {
  this.dataStore.forEach(function(v) { v = 0; })
}

function insert(element) {
  this.dataStore[this.pos++] = element;
}

function toString() {
  var retstr = '';

  this.dataStore.map(function(v,i) {
    retstr += (i > 0 && i % 10 == 0) ? '\n' : v + ' ';
  })

  return retstr;
}

function swap(arr, index1, index2) {
  var temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

function bubbleSort() {
  var numElements = this.dataStore.length;
  var temp;
  for (var outer = numElements; outer >= 2; --outer) {
    for (var inner = 0; inner <= outer - 1; ++inner) {
      if (this.dataStore[inner] > this.dataStore[inner+1]) {
        swap(this.dataStore, inner, inner+1);
        console.log(this.toString());
      }
    }
  }
}

function selectionSort() {
  var min, temp, length = this.dataStore.length;
  for (var outer = 0; outer <= length-2; ++outer) {
    min = outer;
    for (var inner = outer + 1; inner <= length-1; ++inner) {
      if (this.dataStore[inner] < this.dataStore[min]) {
        min = inner;
      }
    }
    swap(this.dataStore, outer, min); // placed after inner loop (instead of in if statement) so inner loop can check all numbers first
    console.log(this.toString());
  }
}

function insertionSort() {
  var temp, inner, length = this.dataStore.length;
  for (var outer = 1; outer <= length-1; ++outer) { // outer loop moves element by element through the array
    temp = this.dataStore[outer];
    inner = outer;
    while(inner > 0 && (this.dataStore[inner-1] >= temp)) { // inner loop compares the element chosen in the outer loop to the element next to it in the array.
      this.dataStore[inner] = this.dataStore[inner-1]; // if outer loop element less than inner loop element, array elements shifted right to make room for inner-loop el
      --inner;
    }
    this.dataStore[inner] = temp;
    console.log(this.toString());
  }
}

function shellSort() {
  for (var g = 0; g < this.gaps.length; ++g) { // outer loop loops through each number in the gaps array
    for (var i = this.gaps[g]; i < this.dataStore.length; ++i) { // middle loop loops the number amount in the gaps array
      var temp = this.dataStore[i];
      for (var j = i; j >= this.gaps[g] && this.dataStore[j - this.gaps[g]] > temp; j -= this.gaps[g]) {
        this.dataStore[j] = this.dataStore[j - this.gaps[g]];
      }
      this.dataStore[j] = temp;
    }
  }
}
// The outer loop controls the movement within the gap sequence. In other words, for the
// first pass through the data set, the algorithm is going to examine elements that are five
// elements away from each other. The next pass will examine elements that are three
// elements away from each other. The last pass performs a standard insertion sort on
// element that are one place away, which means they are adjacent.

function setGaps(arr) {
  this.gaps = arr;
}


var numElements = 10;
var myNums = new CArray(numElements);
myNums.setData();
myNums.toString();
// myNums.bubbleSort();
// myNums.toString();
// myNums.selectionSort();
// myNums.toString();
// myNums.insertionSort();
// myNums.toString();
myNums.shellSort();
myNums.toString();



// Fisher-Yates shuffle
function shuffle(arr) {
  var currIndex = arr.length, temp, randIndex;

  while(currIndex) {
    randIndex = Math.floor(Math.random() * currIndex--); // pick a remaining element...

    temp = arr[currIndex]; // swap with current element
    arr[currIndex] = arr[randIndex];
    arr[randIndex] = temp;
  }

  return arr;
}

var arr = [1,2,3,4,5,6,7,8,9];

shuffle(arr);



//
// QUICKSORT
//

function quickSort(arr) {
  if (arr.length == 0) { return []; }
  var left = [], right = [];
  var pivot = arr[0];
  for (var i = 1; i < arr.length; i++) {
    console.log('pivot: ' + pivot + ' current element: ' + arr[i]);
    if (arr[i] < pivot) {
      console.log('moving ' + arr[i] + ' to the left');
      left.push(arr[i]);
      console.log('left array: ', left);
    }
    else {
      console.log('moving ' + arr[i] + ' to the right');
      right.push(arr[i]);
      console.log('right array: ', right);
    }
  }
  console.warn('After this loop, LEFT IS: ' + left + ' AND PIVOT IS: ' + pivot + ' AND RIGHT IS: ' + right);
  return quickSort(left).concat(pivot, quickSort(right));
}

// random list to test quicksort
var array = [];
for (var i = 0; i < 10; i++) {
  array[i] = Math.floor((Math.random() * 100) + 1);
}
console.log('ORIGINAL ARRAY: ', array);
quickSort(array);



function snailSort(array) {
	var result = [];

	if (array.length == 0 ) return result;

	var max = array[0].length-1;

	//grab the first row | result.push.apply(result,array[0])
	for (var i = 0; i <= max; i++) {
		result.push(array[0][i]);
	}

	//grab the last column
	for (var i = 1; i < max; i++) {
		result.push(array[i][max]);
	}

	//grab the last row
	for (var i = max; i >= 0; i--){
		result.push(array[max][i]);
	}

	//grab the first column
	for (var i = max - 1 ; i > 0; i--) {
		result.push(array[i][0]);
	}

	subarray = [];
	//form the inner matrix
	for (var i = 1 ; i < max ; i++) {
		subarray.push(array[i].splice(1, max-1));
	}

	//call it recursively
	result = result.concat(snailSort(subarray));

	return result;
}


input = [
[1,2,3],
[4,5,6],
[7,8,9]
]
input2 = [
[1,2,3,4],
[5,6,7,8],
[9,10,11,12],
[13,14,15,16]
]
snailSort(input2);   
