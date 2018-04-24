//
// SORTING ALGORITHMS
//

function bubbleSort(arr) {
  do {
    var swapped = false;
    for (let i = 0; i < arr.length; i++) {
      if ( arr[i] > arr[i + 1] ) {
        [ arr[i + 1], arr[i] ] = [ arr[i], arr[i + 1] ];
        swapped = true;
      }
    }
  } while (swapped);

  return arr;
}



function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] < arr[j]) {
        let [ spliced ] = arr.splice(i, 1);
        arr.splice(j, 0, spliced);
      }
    }
  }

  return arr;
}



function mergeSort(arr) {
  if (arr.length < 2) return arr;

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge( mergeSort(left), mergeSort(right) );
}

function merge(left, right) {
  let result = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push( left.shift() );
    }
    else result.push( right.shift() );
  }

  while (left.length) {
    result.push( left.shift() );
  }

  while (right.length) {
    result.push( right.shift() );
  }

  return result;
}



function quickSort(arr) {
  if (arr.length < 2) return arr;

  const pivot = arr[arr.length - 1];
  let left = [], right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) left.push(arr[i]);
    else right.push(arr[i]);
  }

  return quickSort(left).concat(pivot, quickSort(right));
}



function selectionSort(arr) {
  let len = arr.length;

  for (let outer = 0; outer <= len - 2; outer++) {
    let min = outer;

    for (let inner = outer + 1; inner <= len - 1; inner++) {
      if (arr[inner] < arr[min]) {
        min = inner;
      }
    }

    [ arr[min], arr[outer] ] = [ arr[outer], arr[min] ];
  }

  return arr;
}



function shellSort(arr) {
  for (let g = arr.length; g > 0; g = Math.floor(g / 2)) {
    for (let i = g; i < arr.length; i++) {
      let k = arr[i];
      let j = i;
      for (; j >= g && k < arr[j - g]; j -= g) {
        arr[j] = arr[j - g];
      }
      arr[j] = k;
    }
  }

  return arr;
}



function radixSort(arr) {
  const getDigit = (number, place, longestNum) => {
    const str = String(number);
    const size = str.length;
    const mod = longestNum - size;
    return str[place - mod] || 0;
  };

  const longestNum = arr.reduce((max, curr) => {
    const length = String(curr).length;
    return length > max ? length : max;
  }, 0);

  const buckets = Array.from({length: 10}, () => []);

  for (let i = longestNum - 1; i >= 0; i--) {
    while (arr.length) {
      const current = arr.shift();
      const index = getDigit(current, i, longestNum);
      buckets[index].push(current);
    }

    for (let j = 0; j < 10; j++) {
      while (buckets[j].length) {
        arr.push( buckets[j].shift() );
      }
    }
  }

  return arr;
}
