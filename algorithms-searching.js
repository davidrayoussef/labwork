//
// SEARCHING ALGORITHMS
//

function sequentialSearch(arr, item) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      return true;
    }
  }

  return false;
}

// returns index of item or -1 if not found
function sequentialSearch(arr, item) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      return i;
    }
  }

  return -1;
}

function binarySearch(arr, num) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let index = Math.floor((start + end) / 2);
    let mid = arr[index];

    if ( mid === num ) return index;

    if ( mid < num ) start = index + 1;
    else end = index - 1;
  }

  return -1;
}
