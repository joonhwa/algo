// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  return array.reduce((arr, elem) => {
  
    if (arr.length == 0 || arr[arr.length-1].length == size) {
      arr[arr.length] = [];
      arr[arr.length-1][0] = elem;
    } else {
      arr[arr.length-1][arr[arr.length-1].length] = elem;
    }

    return arr;      
  },[])
}

module.exports = chunk;
