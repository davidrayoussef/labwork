//
// SORT
//

function CArray(numElements) {
  this.store = [];
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

  for (let i = 0; i < numElements; ++i) {
    this.store[i] = i;
  }
}

function setData() {
  for (let i = 0; i < this.numElements; ++i) {
    this.store[i] = Math.floor(Math.random() * (this.numElements+1));
  }
}

function clear() {
  this.store.forEach(function(v) { v = 0; })
}

function insert(element) {
  this.store[this.pos++] = element;
}

function toString() {
  let retstr = '';

  this.store.map(function(v,i) {
    retstr += (i > 0 && i % 10 == 0) ? '\n' : v + ' ';
  })

  return retstr;
}

function swap(arr, index1, index2) {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

function bubbleSort() {
  let numElements = this.store.length;

  for (let outer = numElements; outer >= 2; --outer) {
    for (let inner = 0; inner <= outer - 1; ++inner) {
      if (this.store[inner] > this.store[inner + 1]) {
        swap(this.store, inner, inner + 1);
        console.log(this.toString());
      }
    }
  }
}

function selectionSort() {
  let min, temp, length = this.store.length;
  for (let outer = 0; outer <= length-2; ++outer) {
    min = outer;
    for (let inner = outer + 1; inner <= length-1; ++inner) {
      if (this.store[inner] < this.store[min]) {
        min = inner;
      }
    }
    swap(this.store, outer, min); // placed after inner loop (instead of in if statement) so inner loop can check all numbers first
    console.log(this.toString());
  }
}

function insertionSort() {
  let temp, inner, length = this.store.length;
  for (let outer = 1; outer <= length - 1; outer++) { // outer loop moves element by element through the array
    temp = this.store[outer];
    inner = outer;

    while (inner > 0 && (this.store[inner - 1] >= temp)) { // inner loop compares the element chosen in the outer loop to the element next to it in the array.
      this.store[inner] = this.store[inner - 1]; // if outer loop element is less than inner loop element, array elements are shifted right to make room for inner-loop element
      inner--;
    }
    this.store[inner] = temp;
    console.log(this.toString());
  }
}

function shellSort() {
  for (let g = 0; g < this.gaps.length; ++g) { // outer loop loops through each number in the gaps array
    for (let i = this.gaps[g]; i < this.store.length; ++i) { // middle loop loops the number amount in the gaps array
      let temp = this.store[i];
      for (let j = i; j >= this.gaps[g] && this.store[j - this.gaps[g]] > temp; j -= this.gaps[g]) {
        this.store[j] = this.store[j - this.gaps[g]];
      }
      this.store[j] = temp;
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


let numElements = 10;
let myNums = new CArray(numElements);
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
  let currIndex = arr.length, temp, randIndex;

  while (currIndex) {
    randIndex = Math.floor(Math.random() * currIndex--); // pick a remaining element...

    temp = arr[currIndex]; // swap with current element
    arr[currIndex] = arr[randIndex];
    arr[randIndex] = temp;
  }

  return arr;
}

let arr = [1,2,3,4,5,6,7,8,9];

shuffle(arr);



//
// QUICKSORT
//

function quickSort(arr) {
  if (arr.length == 0) { return []; }
  let left = [], right = [];
  let pivot = arr[0];
  for (let i = 1; i < arr.length; i++) {
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
let array = [];
for (let i = 0; i < 10; i++) {
  array[i] = Math.floor((Math.random() * 100) + 1);
}
console.log('ORIGINAL ARRAY: ', array);
quickSort(array);



function snailSort(array) {
	let result = [];

	if (array.length == 0 ) return result;

	let max = array[0].length-1;

	//grab the first row | result.push.apply(result,array[0])
	for (let i = 0; i <= max; i++) {
		result.push(array[0][i]);
	}

	//grab the last column
	for (let i = 1; i < max; i++) {
		result.push(array[i][max]);
	}

	//grab the last row
	for (let i = max; i >= 0; i--){
		result.push(array[max][i]);
	}

	//grab the first column
	for (let i = max - 1 ; i > 0; i--) {
		result.push(array[i][0]);
	}

	subarray = [];
	//form the inner matrix
	for (let i = 1 ; i < max ; i++) {
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



// Insertion Sort - Part 1
let input = `6
1 4 3 5 6 2`;

function insertionSort(input) {
  input = input.split('\n')[1].split(' ').map(Number);
  const length = input.length;
  let result = '';
  let tempValue;
  let innerIndex;

  for (let outerIndex = 1; outerIndex < length; outerIndex++) {
    tempValue = input[outerIndex];
    innerIndex = outerIndex;

    while (innerIndex > 0 && input[innerIndex - 1] > tempValue) {
      input[innerIndex] = input[innerIndex - 1];
      innerIndex--;
    }

    input[innerIndex] = tempValue;
    result += input.join(' ') + '\n';

  }

  console.log(result);

}

insertionSort(input);
